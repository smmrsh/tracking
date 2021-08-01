import react, {Component} from 'react';
import React from "react";
import './MapDirection.css';
import * as IoIcons from 'react-icons/io';
import {DisplayTable} from "../table/tableMapDetailTracks/DisplayTable";

export class DetailsClickRouteMap extends Component {
    constructor(props) {
        super(props);
        this.state={
            cancleP:false,
            valueInput:''
        }
    }
    cancel=()=>{
        this.setState({cancleP: true})
        this.props.canclePage (false)
    }
    inputValue=(e)=>{
        this.setState({valueInput: e.target.value})
    }
    saveValue=(e)=>{
        e.preventDefault();

    }
    render() {
        return (
            <>
                <div className='  position-absolute detailsClickRouteMap  rounded row   p-3 pt-4 '>
                   <span onClick={this.cancel} className='iconeClose' >  <IoIcons.IoIosClose/></span>
                    <DisplayTable items={this.props.items} viewMapFun={this.props.viewMapFun} canclePage={this.props.canclePage}/>

                </div>

            </>
        )
    }
}