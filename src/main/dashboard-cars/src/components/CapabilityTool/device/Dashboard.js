import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllDevice } from "../../../actions/actionDevice/DriverActions";
import PropTypes from "prop-types";
import {SelectItems} from "../../../mainPage/components/Files/SelectItems";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllDevice();
  }

  render() {
    const { devices } = this.props;
    return (
      <React.Fragment>
        <SelectItems items={devices} getDeviceId={this.props.getDeviceId}/>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  getAllDevice: PropTypes.func.isRequired,
  devices: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  devices: state.device.devices
});

export default connect(
  mapStateToProps,
  { getAllDevice }
)(Dashboard);
