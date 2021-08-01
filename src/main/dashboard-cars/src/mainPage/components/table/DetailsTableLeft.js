import React,{Component} from 'react';
import {TableData} from "../../../component/mainContent/TableData";

export  class DetailsTableLeft extends Component{
    render() {
        let expanded=Number(this.props.expanded);
        return(
            <>
                <h6 className="p-2 font-weight-bold">جزییات </h6>
                <table style={{fontSize:".9rem"}} className=" table table-sm border-none ">
                    <thead className='bg-light '><tr><td>داده ها</td><td>مسافت</td><td>فعالیت</td></tr></thead>
                    <tbody>
                    <tr>{TableData.map((item,index)=>{return index===2?'yes':null})}</tr>
                    </tbody>
                </table>
            </>
        )
    }
}
