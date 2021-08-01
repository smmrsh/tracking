import React, {Component} from 'react';
import {TableData} from "../../components/table/TableData";
import {DatePicker} from "./chartDate/DatePicker";
import {DisplayTable} from "../../../component/mainContent/tracing/DisplayTable";
import MapDirection1 from "../../components/map/MapDirection1";
import {SelectDriverMission} from "./SelectDriverMission";
import {SelectDriverMissionHook} from "./SelectDriverMissionHook";

export class MissionShowInfo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableItemFilter: false,
            dataTable: {},
            dataMap: [],
            viewMapp: false
        }
    }
    viewMapFun = (viewMap, item) => {
        this.setState({viewMapp: viewMap, dataMap: item})
    }
    tableFilter=(data,viewM)=>{
        this.setState({dataTable:data,tableItemFilter:true,viewMapp:viewM})
    }
    closeInfoItem=(item)=>{
        this.setState({tableItemFilter:item})
    }
    render() {
        const idTrack=this.props.idTrack;
        const TrackInfo=TableData.filter(p=>p.id==idTrack)

        return (

            <div>
                <div className='d-flex bg-dark border-light  rtl text-white rounded '>
                    <div className='p-4'><span> <span> تعداد ماشین فعال</span>:5</span></div>
                    <div className='p-4'><span> <span> تعداد راننده فعال </span>5:</span></div>
                    <div className='p-4'><span> <span> تعداد دستگاه فعال</span>5:</span></div>
                </div>
                <div className="bg-dark text-white rtl mt-3 rounded">
                    <span className=" d-flex ">بازه زمانی</span>
                    <div className=' d-flex'>

                        <div className="p-2"><DatePicker/></div>
                        <div className="p-2"><DatePicker/></div>
                    </div>
                </div>
                <div className='rtl d-flex bg-dark text-white mt-3 rounded'>
                    {
                        this.props.idTrack?<SelectDriverMissionHook TrackInfo={TrackInfo} val={TableData} tableFilter={this.tableFilter} closeInfoItem={this.closeInfoItem}/>
                        :<SelectDriverMissionHook  val={TableData} tableFilter={this.tableFilter}/>
                    }
                </div>
                <div className="table-responsive">
                    <div id='mapScrollSpy'>
                    </div>
                    {this.state.tableItemFilter ?
                        < DisplayTable tableData={this.state.dataTable} viewMapFun={this.viewMapFun}/> : null}


                </div>

                {this.state.viewMapp ? <MapDirection1 mapData={this.state.dataMap} /> : null}

            </div>
        )
    }
}
