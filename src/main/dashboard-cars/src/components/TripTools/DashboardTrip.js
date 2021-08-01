import React, { Component } from "react";
import AddButton from "./AddButton";
import {getAllTrip} from "../../actions/TripActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {Trip} from "./Trip";

class DashboardTrip extends Component {
  componentDidMount() {
  }

  render() {
    const { trip } = this.props;
    return (
      <React.Fragment>
        {this.props.capabilities.map(a=>console.log(a))}
      </React.Fragment>
    );
  }
}

DashboardTrip.propTypes = {
  getAllCapabilities: PropTypes.func.isRequired,
  capabilities: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  capabilities: state.capability.capabilities
});

export default connect(
  mapStateToProps,
  { getAllCapabilities }
)(DashboardTrip);
