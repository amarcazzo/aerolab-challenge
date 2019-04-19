import { GET_PRODUCTS, REDEEM_PRODUCT, CLEAN_REDEEMED } from "./types";
import Axios from "axios";
import config from "../config";

export const getProducts = () => async dispatch => {
  let response = await Axios.get(`${config.apiUri}/products`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${config.token}`
    }
  });

  dispatch({ type: GET_PRODUCTS, payload: response.data });
};

export const redeemProduct = id => async dispatch => {
  let response = await Axios.post(
    `${config.apiUri}/redeem`,
    { productId: id },
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${config.token}`
      }
    }
  );

  console.log(response);

  dispatch({
    type: REDEEM_PRODUCT,
    payload: {
      status: response.status,
      msg: response.data.message,
      productId: id
    }
  });
};

export const cleanLastRedeemed = () => dispatch =>
  dispatch({
    type: CLEAN_REDEEMED,
    payload: { status: 0, msg: "", productId: "" }
  });
