import React from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../../app/cartSlice";
import CartAmount from "../Cart/CartAmount";
import ProductItem from "./ProductItem";

export default function ProductsList({ ...props }) {
  const items = useSelector(getAllProducts);

  if (items.length === 0) {
    return <div {...props}>Brak produktów</div>;
  }
  return (
    <ul {...props}>
      {items.map((el) => (
        <li key={el.pid}>
          <ProductItem item={el} />
          <CartAmount
            min={el.min}
            max={el.max}
            pid={el.pid}
            is_blocked={el.isBlocked}
          />
        </li>
      ))}
    </ul>
  );
}
