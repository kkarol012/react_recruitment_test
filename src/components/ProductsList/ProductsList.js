import React from "react";
import CartAmount from "../Cart/CartAmount";
import ProductItem from "./ProductItem";

export default function ProductsList({ items = [], ...props }) {
  if (items.length === 0) {
    return <div {...props}>Brak produktów</div>;
  }
  return (
    <ul {...props}>
      {items.map((el) => (
        <li key={el.pid}>
          <ProductItem item={el} />
          <CartAmount min={el.min} max={el.max} />
        </li>
      ))}
    </ul>
  );
}
