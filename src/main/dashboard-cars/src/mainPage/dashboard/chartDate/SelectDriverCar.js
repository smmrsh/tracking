import React,{Component} from 'react';
import {SelectItem} from "./SelectItem";
import {TableData} from "../../components/table/TableData";


export  class SelectDriverCar extends Component{

    render() {
        return(
            <>
                <div className='row p-2 rtl mt-3'>

                <SelectItem name="cars" valiueDefult={this.props.valiueDefult} val={TableData} tableFilter={this.props.tableFilter}/>
                </div>
            </>

        )
    }
}
