import react,{Component} from 'react';
import '../MainPage.css';
import React from "react";
import {TableDisplay} from "../components/table/TableDisplay";
import {TableData} from "../components/table/TableData";
import MapDirection from "../components/map/MapDirection";
import * as BiIcons from "react-icons/bi";
import MapDirection1 from "../components/map/MapDirection1";
import DisplayDivTblTracing from "../components/table/tableTracing/DisplayDivTblTracing";
import Dashboard from "../../components/CapabilityTool/point/Dashboard";

export class Tracing extends Component{
    constructor(props) {
        super(props);
        this.state={
            tableData:TableData,
            iconMapStates:false,
            itemShowMap:{},
            itemShow:false
        }

    }
    //  componentDidMount() {
    //     axios.get('http://roocket.org/api/products')
    //         .then(response=>{this.setState({tableData:response.data.data.data})})
    //         .catch(error=>{console.log(error)})
    //}
    iconMapChng=()=>{
        this.setState({iconMapStates:!this.state.iconMapStates})
    }

    showItemMap=(item)=>{
        return console.log('hi')


    }

    selectMap=(e)=>{
        console.log(e)
    }
    render() {
        return(
            <>
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 pr-5 border-bottom">
                    <h5 className="h5 text-light">ردیابی و ماموریت</h5>
                </div>

                <div className='flex-row-reverse d-flex'>
                    <span className="icconMaps" onClick={this.iconMapChng}>{this.state.iconMapStates?<BiIcons.BiMessageSquareAdd/>:<BiIcons.BiMessageSquareMinus/>}</span>

                    {this.state.itemShow?<MapDirection1 mapData={this.state.itemShowMap}/>:<MapDirection dataMap={this.state.tableData} itemshow={false}/>}

                </div>

            </>
        )
    }
}