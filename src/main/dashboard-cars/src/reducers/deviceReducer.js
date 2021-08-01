import {
  GET_DEVICE,
  DELETE_DEVICE,
  ADD_DEVICE
} from "../actions/actionDevice/ActionTypes";

const initialState = {
  devices: [],
  device: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DEVICE:
      return {
        ...state,
        devices: action.payload
      };

    case DELETE_DEVICE:
      return {
        ...state,
        devices: state.devices.filter(
            device => device.id !== action.payload
        )
      };

    case ADD_DEVICE:
      return {
        ...state,
        devices: [action.payload, ...state.vehicles]
      };

    default:
      return state;
  }
}
