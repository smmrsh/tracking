import react,{Component} from 'react';
import './MainPage.css'
import {SidBarToggleLink} from "./SidBarToggleLink";
import {BrowserRouter as Router, Route, Switch, Redirect, Link}
    from "react-router-dom";
import React from "react";
export class SidbarMenu extends Component{
    constructor(props) {
        super(props);
        this.state={
            navbar:false,
        }
    }
    showSubtitle=()=>{
        this.setState({navbar:!this.state.navbar})

    }

    render() {
        return(
                <>
                    <li className="nav-item">
                        <SidBarToggleLink  to={this.props.item.path} showSubtitle={this.showSubtitle} exact={true}

                        >
                            <span className='iconsbar '>
                            {this.props.item.icon}
                            </span>
                            <span className="spanTitle ">{this.props.item.title}</span>
                            <span className='iconsLink position-absolute'>{this.props.item.subNave && this.state.navbar
                                ?this.props.item.iconOpen:
                                this.props.item.subNave
                                    ?this.props.item.iconClose:null
                            }</span>
                        </SidBarToggleLink>
                        {
                            this.state.navbar&&this.props.item.subNave?this.props.item.subNave.map((itm,index)=>{
                                    return(
                                        <div className=" nav-link ">
                                            <Link to={itm.path} key={itm.id}>
                                                {itm.icon}
                                                <span className="spanTitle">{itm.title}</span>
                                            </Link>
                                        </div>
                                    )
                                })
                                :null

                        }

                    </li>

                </>

        )
    }
}
