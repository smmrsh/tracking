import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCapability } from "../../actions/CapabilityActions";
import UpdateIcon from "./UpdateIcon";
import MapDirection from "../../mainPage/components/map/MapDirection";

export class Trip extends Component {
  constructor(props) {
    super(props);
    this.state={lang:[],lat:[],arrayLangLat:[]}
  }
  deleteTrip = (id, deleteLink) => {
    this.props.deleteTrip(id, deleteLink);
  };
  arrayLangLat=[];

  render() {
    const arr = this.props.Trip
    var mapped = [];
    var a = [];

    return (
      <div className="card card-body border-primary mb-3">
        {
           console.log(a)
        }
        {
          this.props.Trip.map((p,k)=>{
         // console.log(p)



        })
        }

      </div>
    );
  }
}

Trip.propTypes = {
  Trip: PropTypes.object.isRequired,
  deleteTrip: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTrip }
)(Trip);
