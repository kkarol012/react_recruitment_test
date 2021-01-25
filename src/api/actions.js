import axios from "axios";
import { CART_ENDPOINT, CHECK_PRODUCT_ENDPOINT } from "./Endpoints";

export async function getCart() {
  const response = await axios.get(CART_ENDPOINT);
  return response;
}
