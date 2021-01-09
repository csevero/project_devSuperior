import React, { useEffect, useState } from "react";

import api from "../../services/api";

import "./index.css";
import Header from "./Header";
import ProductList from "./ProductList";
import { Product } from "./types";

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <div className='orders-container'>
      <Header />
      <ProductList products={products} />
    </div>
  );
}
