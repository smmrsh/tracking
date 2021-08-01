import axios from "axios";
import {
  GET_TRACKS, GET_TRACK,
    ADD_TRACK,DELETE_TRACK,
    UPDATE_TRACK,CLEAR_TRACK_CLOSE_MODAL,GET_ERRORS
} from "./ActionTypes";

export const getAllTrack = () => async dispatch => {
  try {

    const res = await axios.get("http://localhost:8080/tracks/");
    dispatch({
      type: GET_TRACKS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: GET_TRACKS,
      payload: []
    });
  }
};

export const  getTrackById =( id )=> async dispatch => {
  try {

    const res = await axios.get(`http://localhost:8080/tracks/${id}`);
    dispatch({
      type: GET_TRACK,
      payload: id
    });
  } catch (error) {
    dispatch({
      type: GET_TRACK,
      payload: []
    });
  }
};
export const deleteTrack = (id, deleteLink) => async dispatch => {
  await axios.delete(deleteLink);
  dispatch({
    type: DELETE_TRACK,
    payload: id
  });
};

export const addTrack = (track, closeModal) => async dispatch => {
  const res = await axios.post("http://localhost:8080/tracks/", track);
  closeModal();
  dispatch({
    type: ADD_TRACK,
    payload: res.data
  });
};


