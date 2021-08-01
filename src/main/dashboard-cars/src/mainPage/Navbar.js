import react, {Component} from 'react';
import './MainPage.css';
import * as FaIcons from "react-icons/fa";
import * as Io5Icons from "react-icons/io5";
import React from "react";
import * as FiIcons from "react-icons/fi";
import {Notification} from "./components/Notification";

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickToggle: false,
            showNotif: false
        }
    }

    navbarToggler = () => {
        this.setState({clickToggle: !this.state.clickToggle}, () => this.props.clickNavToggle(this.state.clickToggle));

    }
    showNotification = () => {
        this.setState({showNotif: !this.state.showNotif})
    }
    notifOff=(e)=>{
        this.setState({showNotif: e})
    }
    render() {
        return (
            <nav className="navbar navbar-dark   flex-md-nowrap shadow">
                <a className=" navbar-brand col-md-3 col-lg-2 mr-0 px-3 position-relative" href="#"> </a>
                <button className="navbar-toggler  position-absolute d-md-none collapsed " type="button"
                        onClick={this.navbarToggler}>
                    <span className="navbar-toggler-icon text-white "></span>
                </button>
                <input className="form-control form-control-dark inputItem rtl" type="text" placeholder="جستجو ... "
                       aria-label="Search"/>
                <ul className="navbar-nav px-3 d-inline">
                    <li className="nav-item text-nowrap pt-1">
                        <span className="text-dark"><Io5Icons.IoPersonSharp/></span>
                    </li>
                    <li className="nav-item text-nowrap pr-1">
                        <a className="nav-link" href="#">محمدی</a>
                    </li>
                    <li className="nav-item text-nowrap">
                        <span className="nav-link  position-relative bell" onClick={this.showNotification}>
                            <span className="badge bg-danger  rounded-pill text-white ">6</span>
                            <FaIcons.FaRegBell/>
                        </span>
                    </li>
                    <li className="nav-item text-nowrap">
                        <a className="nav-link"  title='خروج'><FiIcons.FiPower/></a>
                    </li>

                </ul>
                {
                    this.state.showNotif ? <Notification notifOff={this.notifOff}/> : null
                }

            </nav>

        )

    }
}


