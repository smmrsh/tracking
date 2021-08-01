import './InfoDashboard.css';
import React,{Component} from 'react';
import {DatePicker} from "./chartDate/DatePicker";
import {SelectDriverCar} from "./chartDate/SelectDriverCar";
import {TableData} from "../TableData";
import {DisplayTable} from "../tracing/DisplayTable";
import MapDirection from "../../map/MapDirection";

export  class InfoDashboard extends Component{
    constructor(props) {
        super(props);
        this.state={
            tableItemFilter:false,
            dataTable:[],
            dataMap:[],
            viewMapp:false
        }
    }
    tableFilter=(newData)=>{
        this.setState({ dataTable:TableData.filter(val=>val.nameCar===newData.valiueDefult&&val.mission===newData.valueTable)
            ,tableItemFilter:true})

    }
    viewMapFun=(viewMap,item)=>{
        this.setState({viewMapp:viewMap,dataMap:item})

    }
    render() {
        return(
            <div className="flex-column w-100">
            <div className="">
            <div className='flex-row-reverse d-flex bg-light border-light'>
                <div className='p-4'><span> {this.props.cars}5:<span> تعداد ماشین فعال</span></span></div>
                <div className='p-4'><span>{this.props.driver} 5:<span> تعداد راننده فعال </span></span></div>
                <div className='p-4'><span>{this.props.gps} 5:<span> تعداد دستگاه فعال</span></span></div>
            </div>
                <span className="flex-row-reverse d-flex">:بازه زمانی</span>
                <div className='flex-row-reverse d-flex'>
                    <div className="p-2"><DatePicker/></div>
                    <div className="p-2"><DatePicker/></div>
                </div>
                <div className='flex-row-reverse d-flex'>
                    <SelectDriverCar  tableFilter={this.tableFilter} />
                </div>
                <div className='flex-row-reverse d-flex'>
                    { this.state.tableItemFilter?< DisplayTable tableData={this.state.dataTable} viewMapFun={this.viewMapFun}/>:null}
                </div>
                </div>
                {this.state.viewMapp?<MapDirection dataMap={this.state.dataMap}/>:null}
            </div>
        )
    }
}
