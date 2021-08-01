import {
  GET_DRIVER,
  DELETE_DRIVER,
  ADD_DRIVER
} from "../../actions/actionDriver/ActionTypes";

const initialState = {
  drivers: [],
  driver: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DRIVER:
      return {
        ...state,
        drivers: action.payload
      };

    case DELETE_DRIVER:
      return {
        ...state,
        drivers: state.drivers.filter(
            driver => driver.id !== action.payload
        )
      };

    case ADD_DRIVER:
      return {
        ...state,
        drivers: [action.payload, ...state.drivers]
      };

    default:
      return state;
  }
}
