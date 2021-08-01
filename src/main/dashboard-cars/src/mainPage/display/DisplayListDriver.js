import React,{Component} from 'react';
import {TableData} from "../components/table/TableData";
import DisplayTableDriver from "../components/table/tableDriver/DisplayTableDriver";
export class DisplayListDriver extends Component{
    constructor(props) {
        super(props);
        this.state={
            tableData:TableData,
            iconMapStates:false,
        }
    }
    render() {
        return(
            <DisplayTableDriver tableData={this.state.tableData} iconMapStates={this.state.iconMapStates}/>        )
    }

}
