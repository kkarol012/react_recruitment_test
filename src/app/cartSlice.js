import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { data: [] },
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload.map((product) => {
        product.quantity = product.min;
        return product;
      });
      state.data = products;
    },
    setProductQuantity: (state, action) => {
      const { pid, quantity } = action.payload;
      const product = state.data.find((product) => product.pid === pid);
      if (product) {
        product.quantity = quantity;
      }
    },
  },
});

export const { setProducts, setProductQuantity } = cartSlice.actions;

export const getAllProducts = (state) => state.cart.data;

export const getProductQuantity = (state, pid) =>
  state.cart.data.find((it) => it.pid === pid).quantity;

export const getTotalValue = (state) =>
  state.cart.data.reduce((acu, next) => {
    const total = acu + next.quantity * next.price;
    return total;
  }, 0);

export default cartSlice.reducer;
