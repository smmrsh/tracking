import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllTrack } from "../../../actions/actionTrack/TrackActions";
import PropTypes from "prop-types";
import MapDirectionShowPoint from "../../../mainPage/components/map/MapDirectionShowPoint";
import {DisplayTable} from "../../../mainPage/components/table/showTracksTable/DisplayTable";
import MapDirectionProccess from "../../../mainPage/components/map/MapDirectionProccess";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import {TableData} from "../../../mainPage/components/table/TableData";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state={
      viewMapp:false,
      dataMap:[],  tableData:TableData,
      iconMapStates:false,
      itemShowMap:{},
      itemShow:false
    }
  }
  componentDidMount() {
    this.props.getAllTrack();

  }
  iconMapChng=()=>{
    this.setState({iconMapStates:!this.state.iconMapStates})
  }


  viewMapFun = (viewMap, item) => {
    this.setState({viewMapp: viewMap, dataMap: item})
  }
  viewMapFunClose = (viewMap) => {
    this.setState({viewMapp: false})
  }
  render() {
    const { tracks } = this.props;
    var data=[];
    {this.state.viewMapp? data=tracks:data= this.state.dataMap
    }

    return (
      <React.Fragment>
        <div className='flex-row-reverse d-flex'>
          <div className='flex-row-reverse d-flex'>
            {this.state.viewMapp?  <span className="icconMaps" onClick={this.viewMapFunClose}><MdIcons.MdArrowBack/></span>
                :
                <span className="icconMaps" onClick={this.iconMapChng}>{this.state.iconMapStates?<BiIcons.BiMessageSquareAdd/>:<BiIcons.BiMessageSquareMinus/>}</span>
            }
          </div>

        </div>
        {this.state.viewMapp?<MapDirectionProccess data={this.state.dataMap} viewMapFunClose={this.viewMapFunClose}/>
            :<MapDirectionShowPoint data={tracks} viewMapFun={this.viewMapFun}/>}
        {this.state.viewMapp?null: <DisplayTable iconMapStates={this.state.iconMapStates} data={tracks} viewMapFun={this.viewMapFun} selectMap={this.selectMap}/>}
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  getAllTrack: PropTypes.func.isRequired,
  tracks: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  tracks: state.track.tracks
});

export default connect(
  mapStateToProps,
  { getAllTrack }
)(Dashboard);
