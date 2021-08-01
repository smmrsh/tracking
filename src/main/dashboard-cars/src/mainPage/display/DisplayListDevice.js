import React,{Component} from 'react';
import {TableData} from "../components/table/TableData";
import DisplayTableDevice from "../components/table/tableDevice/DisplayTableDevice";
export class DisplayListDevice extends Component{
    constructor(props) {
        super(props);
        this.state={
            tableData:TableData,
            iconMapStates:false,
        }
    }
    render() {
        return(
            <DisplayTableDevice tableData={this.state.tableData} iconMapStates={this.state.iconMapStates}/>        )
    }

}
