import axios from "axios";
import {
  GET_DRIVER,
  DELETE_DRIVER,
  ADD_DRIVER
} from "./ActionTypes";

export const getAllDriver = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8080/driver");
    dispatch({
      type: GET_DRIVER,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_DRIVER,
      payload: []
    });
  }
};

export const deleteDriver = (id, deleteLink) => async dispatch => {
  await axios.delete(deleteLink);
  dispatch({
    type: DELETE_DRIVER,
    payload: id
  });
};

export const addDriver = (driver, closeModal) => async dispatch => {
  const res = await axios.post("http://localhost:8080/driver", driver);
  closeModal();
  dispatch({
    type: ADD_DRIVER,
    payload: res.data
  });
};
