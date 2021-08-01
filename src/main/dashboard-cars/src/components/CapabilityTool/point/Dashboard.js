import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllPoint } from "../../../actions/actionPoint/PointActions";
import PropTypes from "prop-types";
import MapDirectionShowPoint from "../../../mainPage/components/map/MapDirectionShowPoint";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getAllPoint();
  }

  render() {
    const { points } = this.props;
    console.log(points)
    return (
      <React.Fragment>
    <MapDirectionShowPoint points={points}/>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  getAllPoint: PropTypes.func.isRequired,
  points: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  points: state.point.points
});

export default connect(
  mapStateToProps,
  { getAllPoint }
)(Dashboard);
