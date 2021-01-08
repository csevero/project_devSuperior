import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Footer from "./assets/components/Footer";
import NavBar from "./assets/components/Navbar";
import Home from "./pages/Home";

export default function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
