import axios from "axios";
import {
  GET_TRIP,
  DELETE_TRIP,
  ADD_TRIP
} from "./ActionTripTypes";

export const getAllTrip = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:8080/dashboard");
    dispatch({
      type: GET_TRIP,
      payload: res.data._embedded.tripList
    });
  } catch (error) {
    dispatch({
      type: GET_TRIP,
      payload: []
    });
  }
};

export const deleteTrip = (id, deleteLink) => async dispatch => {
  await axios.delete(deleteLink);
  dispatch({
    type: DELETE_TRIP,
    payload: id
  });
};

export const addTrip = (trip, closeModal) => async dispatch => {
  const res = await axios.post("http://localhost:8080/dashboardTrip", trip);
  closeModal();
  dispatch({
    type: ADD_TRIP,
    payload: res.data
  });
};
