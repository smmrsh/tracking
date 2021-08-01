import './Sidebar.css';
import {SidebarData} from "./SidebarData";
import React,{Component} from 'react';
import {Link} from "react-router-dom";
import {SubMenu1} from "./SubMenu1";

export  class Sidbar1 extends Component{
    render() {
        return(
            <div className='sidbarNav '>
                <div className='sidbarWrap'>
                    {SidebarData.map((i)=>{return<SubMenu1 item={i} />})}
                </div>
            </div>
        )
    }
}
