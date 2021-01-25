import React from "react";
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
        </li>
      ))}
    </ul>
  );
}
