import './Main.css';
import {Sidbar1} from "./Sidbar/Sidbar1";
import React,{Component} from 'react';
import Sidebar from "./Sidbar/Sidebar";
import {Navigation} from "./navigation/Navigation";
import {MainContent} from "./mainContent/MainContent";
import {Link,Route,BrowserRouter as Router} from 'react-router-dom';

export  class Main extends Component{
    render() {
        return(
            <>
                <Navigation/>
                    <Router>
                        <div className='container-fluid main'>
                            <div className="col-3">
                            <Sidbar1/>
                            </div>
                            <div className="col-10" style={{position: 'relative',top: '83px'}}>
                            <MainContent/>
                            </div>
                        </div>

                    </Router>
                </>

        )
    }
}
