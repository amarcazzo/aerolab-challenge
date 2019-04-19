import { GET_USER, GET_POINTS } from "./types";
import config from "../config";
import axios from "axios";

export const getUser = () => async dispatch => {
  let response = await axios.get(`${config.apiUri}/user/me`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${config.token}`
    }
  });

  dispatch({
    type: GET_USER,
    payload: { name: response.data.name, points: response.data.points }
  });
};

export const getUserPoints = () => async dispatch => {
  let response = await axios.get(`${config.apiUri}/user/me`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${config.token}`
    }
  });

  dispatch({
    type: GET_POINTS,
    payload: response.data.points
  });
};
