import React,{Component} from 'react';
import * as BiIcons from "react-icons/bi";
import './Tracing.css';
import {InfoDashboard} from "../dashboard/InfoDashboard";
import {DisplayTable} from "./DisplayTable";
import DisplayTable1 from "./DisplayTable1";
import MapDirection from "../../map/MapDirection";
import {TableData} from "../TableData";
import '../MainContent.css'
import Button from './Button';
//import axios from 'axios';

export  class Tracing extends Component{
    constructor(props) {
        super(props);
        this.state={
            tableData:TableData,
            iconMapState:false,
        }
    }
  //  componentDidMount() {
   //     axios.get('http://roocket.org/api/products')
   //         .then(response=>{this.setState({tableData:response.data.data.data})})
   //         .catch(error=>{console.log(error)})
    //}
    iconMapChng=()=>{
        this.setState({iconMapState:!this.state.iconMapState})
    }

    render() {
        return(
            <div className=' yekan'>
                <h5 className=' rtl'>ردیابی و ماموریت</h5>
                <span className="iconMap " onClick={this.iconMapChng}>{this.state.iconMapState?<BiIcons.BiMessageSquareAdd/>:<BiIcons.BiMessageSquareMinus/>}</span>
                <div className='flex-row-reverse d-flex ' style={{width:1500}}>
                    <MapDirection dataMap={this.state.tableData}/>
                    </div>

                <div className={`flex-row-reverse d-flex ${this.state.iconMapState?'divUnderMap1':'divUnderMap'}`} >
                    <div className='col rtl'>
                        <button className=' btnMy m-3 btnblue'>نمایش 10مسیر آخر</button>
                        <button className='btnMy m-3 btnblue'>آخرین ماموریتهای اتمام یافته</button>
                        <button className='btnMy m-3 btnblue'>مسیرهای بدون ماموریت</button>
                        <DisplayTable1 />

                        </div>
                        
                </div>



            </div>
        )
    }
}
