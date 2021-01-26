import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../api/actions";
import ProductsList from "../ProductsList/ProductsList";
import { setProducts, getTotalValue } from "../../app/cartSlice";
import Texts from "../UI/Texts";

export default function CartContainer() {
  const dispatch = useDispatch();
  useEffect(() => {
    getCart()
      .then((response) => {
        dispatch(setProducts(response.data));
      })
      .catch(console.log);
  }, []);
  const amount = useSelector(getTotalValue);
  return (
    <div className="container">
      <h3>Lista produktów:</h3>
      <ProductsList />
      <h3>Cena całkowita:</h3>
      <Texts>{parseFloat(amount).toFixed(2)} zł</Texts>
    </div>
  );
}
