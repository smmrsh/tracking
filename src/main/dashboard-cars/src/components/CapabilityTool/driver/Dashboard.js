import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllDriver } from "../../../actions/actionDriver/DriverActions";
import PropTypes from "prop-types";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllDriver();
  }

  render() {
    const { drivers } = this.props;
    console.log(drivers)
    return (
      <React.Fragment>

      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  getAllDriver: PropTypes.func.isRequired,
  drivers: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  drivers: state.driver.drivers
});

export default connect(
  mapStateToProps,
  { getAllDriver }
)(Dashboard);
