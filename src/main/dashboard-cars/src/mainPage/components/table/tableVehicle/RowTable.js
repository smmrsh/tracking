import React, {Component} from 'react';
import PropTypes from "prop-types";
import {VehicleDelete} from "./VehiclesDelets";
import VehicleUpdate from "./VehicleUpdate";
 class RowTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedBoxes: [],
            openUpdate:false
        }
    }
     toggleCheckbox = (e, item) => {
     let   arrayId=[];
         if(e.target.select) {
             this.props.arrV.push(item.id);
         }
     }

openUpdatePage=(a)=>{
    this.setState({openUpdate:a})
}

     render() {
        const data = this.props.data;
       // console.log(this.state.ids)
let i=1;
         return (
            <>

                <tr className="text-white" key={data.id}>
                    <td>
                        <div className="form-group form-check  pl-3">
                            <input type="checkbox" className="form-check-input" value={data.id}  onChange={(e) => this.toggleCheckbox(e, data)}/>
                        </div>                    </td>
                    <td>{data.vehicleTag}</td>
                    <td>{data.currentDriver}</td>
                    <td>{data.currentDevice}</td>
                    <td>{data.MaxSpeed}</td>

                        <td>
                            <button type="button" className="btn btn-sm btn-outline-warning text-light" onClick={()=>this.openUpdatePage(true)} >
              ویرایش
                            </button>

                        </td>

                </tr>
                    {this.state.openUpdate?<VehicleUpdate data={data} openUpdatePage={this.openUpdatePage}/>:null}
            </>
        )
    }

 }
export default RowTable