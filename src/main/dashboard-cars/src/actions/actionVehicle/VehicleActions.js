import axios from "axios";
import {
  GET_VEHICLE,
    ADD_VEHICLE,
  DELETE_VEHICLE,
GET_ERRORS,
    UPDATE_VEHICLE,
    DELETE_VEHICLES,
GET_VEHICLES
} from "./ActionTypes";

export const getAllVehicle = () => async dispatch => {
  try {

    const res = await axios.get("http://localhost:8080/vehicle");
    dispatch({
      type: GET_VEHICLES,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_VEHICLES,
      payload: []
    });
  }
};
export const getVehicleById = id => async dispatch => {
  dispatch({
    type: GET_VEHICLE,
    payload: id
  });
};
export const deleteVehicle = (id) => async dispatch => {
  await axios.delete(`http://localhost:8080/vehicle/deleteIds/${id}`);
  dispatch({
    type: DELETE_VEHICLE,
    payload: id
  });
};
export const addVehicle = (
    vehicle
) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:8080/vehicle', vehicle);
    dispatch({
      type: ADD_VEHICLE,
      payload: res.data
    });
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const updateVehicle = (
  id,  vehicle,

) => async dispatch => {
  try {
    const res = await axios.put( `http://localhost:8080/vehicle/${id}`, vehicle);
    dispatch({
      type:UPDATE_VEHICLE,
      payload: res.data
    });
    dispatch();
  } catch (error) {
    dispatch({
      type: GET_ERRORS,

    });
  }
};