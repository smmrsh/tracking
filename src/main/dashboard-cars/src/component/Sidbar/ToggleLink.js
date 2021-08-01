import src from '*.avif';
import { Class } from 'leaflet';
import React,{Component } from 'react';
import { LINEAR_TRANSITION_PROPS } from 'react-map-gl/src/utils/map-controller';
import {Link,Route} from 'react-router-dom';
export class ToggleLink extends Component {
render(){
    return(
<Route path={this.props.path} exact={this.props.exact} 
children={routProps=>{
    const 
}}
/>


    )
}
}