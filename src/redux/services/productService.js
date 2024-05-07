import { createAsyncThunk } from "@reduxjs/toolkit";
import fakeStoreApi from "../../apis";

export const fetchProducts = createAsyncThunk("product/fetchProducts", async () => {
  const { data } = await fakeStoreApi().get("");
  return data
})

export const fetchProduct = createAsyncThunk("product/fetchProduct", async (id) => {
  const { data } = await fakeStoreApi().get(`/${id}`);
  return data
})