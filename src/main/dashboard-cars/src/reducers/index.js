import { combineReducers } from "redux";
import capabilityReducer from "./capabilityReducer";
import driverReducer from "./reducerDriver/driverReducer";
import vehicleReducer from "./vehicleReducer";
import deviceReducer from "./deviceReducer";
import pointReducer from "./reducerPoint/pointReducer";
import trackReducer from "./trackReducer";
export default combineReducers({
  capability: capabilityReducer,
  driver:driverReducer,
  vehicle:vehicleReducer,
  device:deviceReducer,
  point:pointReducer,
  track:trackReducer
});
