import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCapability } from "../../actions/CapabilityActions";
import UpdateIcon from "./UpdateIcon";
import MapDirection from "../../mainPage/components/map/MapDirection";

export class Capability extends Component {
  constructor(props) {
    super(props);
    this.state={lang:[],lat:[],arrayLangLat:[]}
  }
  deleteCapability = (id, deleteLink) => {
    this.props.deleteCapability(id, deleteLink);
  };
  arrayLangLat=[];

  render() {
    const arr = this.props.capability
    var mapped = [];
    var a = [];
if (this.props.capability[3]){
  for (var i=0;i< this.props.capability;i++){
    //console.log(arr[i].lats)
    var arrayItem = [];
    arrayItem.push(Number(this.props.capability[i].lats), Number(this.props.capability[i].longs))
    //console.log(arrayItem)

    a.push(arrayItem)
    // console.log(mapped)

  }
}

    return (
      <div className="card card-body border-primary mb-3">
        {
           console.log(a)
        }
        {
          this.props.capability.map((p,k)=>{
         // console.log(p)



        })
        }

      </div>
    );
  }
}

Capability.propTypes = {
  capability: PropTypes.object.isRequired,
  deleteCapability: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteCapability }
)(Capability);
