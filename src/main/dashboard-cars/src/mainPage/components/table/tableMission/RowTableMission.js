import React,{Component} from 'react';
import * as FcIcons from 'react-icons/fc';
import Scrollspy from 'react-scrollspy'
import {DetailsTable} from "./DetailsTable";

export  class RowTableMission extends Component{
    constructor(props) {
        super(props);
        this.state={
            viewMap:false
        }
    }
    viewMap=(item)=>{
        this.setState({viewMap:!this.state.viewMap},()=>this.props.viewMapFun(this.state,item))
    }
    render() {
        let item=this.props.item;

        return(
            <>
                <tr key={item.id}>
                    <td ><div className="iconDetails" onClick={this.props.detailsCallback}></div></td>

                    <td >{item.nameCar}</td>
                    <td >{item.mission}</td>
                    <td >{item.driver}</td>

                    <td >{item.dateStart}</td>
                    <td >{item.dateEnd}</td>
                    <td >{item.speed}</td>
                    <td >{item.zone}</td>
                    <td >{item.Weight}</td>
                    <td >{item.Fuel}</td>
                    <td >{item.distance}</td>
                    <td >{item.timeRest}</td>
                    <td><div className="btn-group mr-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary text-light" >جزییات
                        </button>
                        <button id="mapsScrollspy" type="button" className="btn btn-sm btn-outline-secondary text-light">نمایش نقشه
                        </button>
                    </div></td>

                </tr>
                {this.props.details?<tr><td colSpan="12"><DetailsTable subData={item.subData}/></td></tr>:null}

            </>
        )
    }
}