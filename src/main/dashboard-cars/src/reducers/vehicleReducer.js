import {
  GET_VEHICLE,
  DELETE_VEHICLE,
  ADD_VEHICLE,
    UPDATE_VEHICLE,
    GET_VEHICLES
} from "../actions/actionVehicle/ActionTypes";

const initialState = {
  vehicles: [],
  vehicle: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_VEHICLES:
      return {
        ...state,
        vehicles: action.payload
      };

    case DELETE_VEHICLE:
      return {
        ...state,
        vehicles: state.vehicles.filter(
            vehicle => vehicle.id !== action.payload
        )
      };

    case ADD_VEHICLE:
      return {
        ...state,
        vehicles: [action.payload, ...state.vehicles]
      };
    case GET_VEHICLE:
      return {
        ...state,
        vehicle: state.vehicles.find(
            vehicle => vehicle.id === action.payload
        )
      };
    case UPDATE_VEHICLE:
      return {
        ...state,
        vehicles: state.vehicles.map(vehicle =>
            vehicle.id === action.payload.id
                ? (vehicle = action.payload)
                : vehicle
        )
      };
    default:
      return state;
  };


}
