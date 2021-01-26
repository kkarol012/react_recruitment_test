import axios from "axios";
import debounce from "../helpers/debounce";
import { CART_ENDPOINT, CHECK_PRODUCT_ENDPOINT } from "./Endpoints";

export async function getCart() {
  const response = await axios.get(CART_ENDPOINT);
  return response;
}

export const checkProduct = debounce(checkProductCall, 500);

async function checkProductCall(data, callback) {
  axios.post(CHECK_PRODUCT_ENDPOINT, data).catch((er) => {
    if (er.response?.data?.isError) {
      callback();
    }
  });
}
