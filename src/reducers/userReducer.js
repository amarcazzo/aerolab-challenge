import { GET_USER, GET_POINTS } from "../actions/types";

const initialState = {
  createdDate: new Date(),
  id: "",
  name: "",
  points: 0
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case GET_USER:
      return { ...state, ...payload };
    case GET_POINTS:
      return { ...state, points: payload };
    default:
      return state;
  }
}
