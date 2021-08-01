import react,{Component} from 'react';
import '../MainPage.css';
import React from "react";
import {TableData} from "../components/table/TableData";
import MapDirection from "../components/map/MapDirection";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import MapDirection1 from "../components/map/MapDirection1";
import Dashboard from "../../components/CapabilityTool/track/Dashboard";
import DisplayDivTblTracing from "../components/table/tableTracing/DisplayDivTblTracing";

export class PointsShow extends Component{
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
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2  border-bottom">
                    <h5 className="h5 text-light">نمایش مسیرهای دریافتی</h5>
                </div>


                <Dashboard iconMapStates={this.state.iconMapStates} selectMaps={this.selectMaps}/>          </>
        )
    }
}