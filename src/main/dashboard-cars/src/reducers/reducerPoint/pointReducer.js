import {
  GET_POINT,
  DELETE_POINT,
  ADD_POINT
} from "../../actions/actionPoint/ActionTypes";

const initialState = {
  points: [],
  point: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_POINT:
      return {
        ...state,
        points: action.payload
      };

    case DELETE_POINT:
      return {
        ...state,
        points: state.points.filter(
            point => point.id !== action.payload
        )
      };

    case ADD_POINT:
      return {
        ...state,
        points: [action.payload, ...state.points]
      };

    default:
      return state;
  }
}
