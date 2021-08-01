import React,{Component} from 'react';
import L from "leaflet";
export class WayPoint extends Component{
    render() {
        return(
            L.Routing.control(
                {
                    waypoints: [
                        L.latLng(35.715400,51.404400),
                        L.latLng(this.props.lat,this.props.lng)
                    ]

                }
            ).addTo(this.props.map)


        )
    }
}