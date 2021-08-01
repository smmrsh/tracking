import axios from "axios";
import {
  GET_POINT,
  DELETE_POINT,
  ADD_POINT
} from "./ActionTypes";

export const getAllPoint = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8080/dashboard/point/");
    dispatch({
      type: GET_POINT,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_POINT,
      payload: []
    });
  }
};

export const deletePoint = (id, deleteLink) => async dispatch => {
  await axios.delete(deleteLink);
  dispatch({
    type: DELETE_POINT,
    payload: id
  });
};

export const addDriver = (Point, closeModal) => async dispatch => {
  const res = await axios.post("http://localhost:8080/dashboard/point/", Point);
  closeModal();
  dispatch({
    type: ADD_POINT,
    payload: res.data
  });
};
