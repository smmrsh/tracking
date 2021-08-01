import React,{Component} from 'react';
import './MainPage.css';
import {Navbar} from "./Navbar";
import {Sidebar} from "./Sidebar";
import {MainPageContent} from "./MainPageContent";
export class MainPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            clickNavTggle:false


        }
    }
    clickNavToggle=(clck)=>{
        this.setState({clickNavTggle:clck})}
    render() {
        return(
            <div className="container-fluid rtl p-0 fontMain">
                <Navbar clickNavToggle={this.clickNavToggle}/>
                <div className="container-fluid rtl ">
                    <div className="row">
                    <Sidebar clickNavTggle={this.state.clickNavTggle}/>
                    <MainPageContent/>
                    </div>
                </div>
            </div>

        )
    }
}