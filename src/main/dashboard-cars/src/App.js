//import './App.css';
import React,{Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {MainPage} from "./mainPage/MainPage";
import Landing from "./components/Layout/Landing";
import store from './store'
import {Provider} from "react-redux";
export default class App extends Component{
  render() {
    return(
        <Provider store={store}>
            <Router>
                <MainPage/>
            </Router>
        </Provider>

    )
  }
}

