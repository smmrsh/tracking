import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteCapability } from "../../../actions/CapabilityActions";
import MapDirectionShowPoint from "../../../mainPage/components/map/MapDirectionShowPoint";
import MapDirection1 from "../../../mainPage/components/map/MapDirection1";
import {MapConsumerShowPoint} from "../../../mainPage/components/map/MapConsumerShowPoint";

export class ConvertToArray extends Component {
  constructor(props) {
    super(props);
    this.state={lang:[],lat:[],arrayLangLat:[]}
  }
  deleteCapability = (id, deleteLink) => {
    this.props.deleteCapability(id, deleteLink);
  };

  render() {
      const arr=[];
     arr.push( this.props.items);
    var tracks = [];
    var a = [];
    var x=[];
    arr.map(p=>{
       // console.log(p.points)
      for (var i=0;i<p.points.length;i++){
        var arrayItem = [];
        arrayItem[0]=Number(p.points[i].lats);
        arrayItem[1]=Number(p.points[i].longs);
      // console.log(arrayItem)
        a.push(arrayItem)
        //console.log(a)
      }
    })


    return (
      <>
          {       // console.log(a)
          }
        <MapConsumerShowPoint viewMapFun={this.props.viewMapFun} data={a} items={this.props.items}/>
      </>
    );
  }
}


export default connect(
  null,
)(ConvertToArray);
