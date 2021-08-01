import React,{Component} from 'react';
import {TableData} from "../../TableData";
import {SelectItem} from "./SelectItem";
import {DisplayTable} from "../../tracing/DisplayTable";

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
