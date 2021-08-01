import React,{Component} from 'react';
import {InfoDashboard} from "./InfoDashboard";
import {DatePicker} from "./chartDate/DatePicker";


export  class Dashboard extends Component{
    render() {
        return(
            <div className=' yekan'>
                <h5 className=' rtl p-3'>داشبورد</h5>
                <div className='flex-row-reverse d-flex'><InfoDashboard/></div>

            </div>

        )
    }
}
