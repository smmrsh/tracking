import {
  GET_TRACK,
  DELETE_TRACK,
  ADD_TRACK, GET_TRACKS
} from "../actions/actionTrack/ActionTypes";

const initialState = {
  tracks: [],
  track: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRACKS:
      return {
        ...state,
        tracks: action.payload
      };

    case DELETE_TRACK:
      return {
        ...state,
        tracks: state.tracks.filter(
            track => track.id !== action.payload
        )
      };

    case ADD_TRACK:
      return {
        ...state,
        tracks: [action.payload, ...state.tracks]
      };
    case GET_TRACK:
      return {
        ...state,
        track: state.tracks.find(
            track => track.id === action.payload
        )
      };

    default:
      return state;
  }
}
