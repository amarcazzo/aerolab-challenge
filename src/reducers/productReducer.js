import { GET_PRODUCTS, REDEEM_PRODUCT, CLEAN_REDEEMED } from "../actions/types";

const initialState = {
  items: [],
  lastRedeemed: {
    status: 0,
    msg: "",
    productId: ""
  }
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PRODUCTS:
      return { ...state, items: payload };
    case REDEEM_PRODUCT:
      return { ...state, lastRedeemed: payload };
    case CLEAN_REDEEMED:
      return { ...state, lastRedeemed: payload };
    default:
      return state;
  }
}
