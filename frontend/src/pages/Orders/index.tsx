import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

import "./index.css";
import Header from "./Header";
import ProductList from "./ProductList";
import OrderSummary from "./OrderSummary";
import OrderLocation from "./OrderLocation";

import { OrderLocationData, Product } from "./types";
import { checkIsSelected } from "./helpers";

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  useEffect(() => {
    async function getProduts() {
      await api
        .get("/products")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }

    getProduts();
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(
        (item) => item.id !== product.id
      );
      setSelectedProducts(selected);
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };

  async function handleSubmit() {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds,
    };

    await api
      .post("/orders", payload)
      .then((response) => {
        toast.error(`Pedido enviado com sucesso! Nº${response.data.id}`);
        setSelectedProducts([]);
      })
      .catch(() => {
        toast.warning("Erro ao enviar pedido");
      });
  }

  return (
    <div className='orders-container'>
      <Header />
      <ProductList
        products={products}
        onSelectProduct={handleSelectProduct}
        selectedProducts={selectedProducts}
      />
      <OrderLocation
        onChangeLocation={(location) => setOrderLocation(location)}
      />
      <OrderSummary
        amount={selectedProducts.length}
        totalPrice={totalPrice}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
