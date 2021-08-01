import React, {Component} from 'react';
import {TableData} from "../components/table/TableData";
import {DatePicker} from "./chartDate/DatePicker";
import {SelectDriverCar} from "./chartDate/SelectDriverCar";
import {DisplayTable} from "../../component/mainContent/tracing/DisplayTable";
import MapDirection1 from "../components/map/MapDirection1";

export class InfoDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableItemFilter: false,
            dataTable: [],
            dataMap: [],
            viewMapp: false
        }
    }

    tableFilter = (newData) => {
        this.setState({
            dataTable: TableData.filter(val => val.nameCar === newData.valiueDefult && val.mission === newData.valueTable)
            , tableItemFilter: true
        })

    }
    viewMapFun = (viewMap, item) => {
        this.setState({viewMapp: viewMap, dataMap: item})

    }

    render() {
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
                    <SelectDriverCar tableFilter={this.tableFilter}/>
                </div>
                <div className="table-responsive">
                    <div id='mapScrollSpy'>
                    </div>
                    {this.state.tableItemFilter ?
                        < DisplayTable tableData={this.state.dataTable} viewMapFun={this.viewMapFun}/> : null}


                </div>

                {this.state.viewMapp ? <MapDirection1 mapData={this.state.dataMap}/> : null}

            </div>
        )
    }
}
