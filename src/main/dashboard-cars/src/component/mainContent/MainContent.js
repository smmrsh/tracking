import './MainContent.css';
import React,{Component} from 'react';
import {Dashboard} from "./dashboard/Dashboard";
import {Link, Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import {Tracing} from "./tracing/Tracing";
import MapDirection from "../map/MapDirection";

export  class MainContent extends Component{
    render() {
        return(
            <>
               <Switch>
                   <Route path='/dashboard' component={Dashboard}/>
                   <Route path='/tracing' component={Tracing}/>
                   <Redirect to="/dashboard" />
               </Switch>
            </>
        )
    }
}
