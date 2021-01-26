import React, { useEffect, useState } from "react";
import { getCart } from "../../api/actions";
import ProductsList from "../ProductsList/ProductsList";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getCart()
      .then((response) => setItems(response.data))
      .catch(console.log);
  }, []);

  return (
    <div className="container">
      <h3>Lista produktów:</h3>
      <ProductsList items={items} />
    </div>
  );
};

export { App };
