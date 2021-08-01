import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllVehicle } from "../../../actions/actionVehicle/VehicleActions";
import PropTypes from "prop-types";
import {SelectVehicle} from "../../../mainPage/components/Files/SelectItems";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllVehicle();
  }

  render() {
    const { vehicles } = this.props;
    return (
      <React.Fragment>
<SelectVehicle vehicle={vehicles}/>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  getAllVehicle: PropTypes.func.isRequired,
  vehicles: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles
});

export default connect(
  mapStateToProps,
  { getAllVehicle }
)(Dashboard);
