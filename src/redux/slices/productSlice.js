import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, fetchProduct } from "../services/productService";

const initialState = {
  products: [],
  product: {}
}

const productSlice = createSlice({
  name: "product",
  initialState,
  
})