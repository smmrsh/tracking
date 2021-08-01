import axios from "axios";
import {
  GET_DEVICE,
  DELETE_DEVICE,
  ADD_DEVICE
} from "./ActionTypes";

export const getAllDevice = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8080/device");
    dispatch({
      type: GET_DEVICE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_DEVICE,
      payload: []
    });
  }
};

export const deleteDevice = (id, deleteLink) => async dispatch => {
  await axios.delete(deleteLink);
  dispatch({
    type: DELETE_DEVICE,
    payload: id
  });
};

export const addDevice = (Device, closeModal) => async dispatch => {
  const res = await axios.post("http://localhost:8080/Device", Device);
  closeModal();
  dispatch({
    type: ADD_DEVICE,
    payload: res.data
  });
};
