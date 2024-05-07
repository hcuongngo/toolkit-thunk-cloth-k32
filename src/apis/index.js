import axios from "axios";
import { PRODUCT_URL } from "../constants";

const fakeStoreApi = () => {
  return axios.create({
    baseURL: PRODUCT_URL
  })
}

export default fakeStoreApi;