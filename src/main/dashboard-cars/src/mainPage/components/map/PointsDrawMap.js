import {MapConsumer, MapContainer, Popup} from "react-leaflet";
import L from "leaflet";
import React, {Component} from "react";
import icon from './Icon';
import './StationData'
import {StationData} from "./StationData";

export class PointsDrawMap extends Component {
    constructor(props) {
        super(props);
        this.state = {stationSelect:''}
    }
 changStation=(e)=>{
        this.setState({stationSelect:e})

 }
    render() {

        return (
            <MapConsumer>
                {console.log(this.props.items)}
                {

                    (map) => {

                        StationData.map(p=>L.marker(p.location,{icon:icon}).addTo(map).bindPopup(`ایستگاه ${p.nameStation}`))



                        return null;
                    }
                }

            </MapConsumer>
        )
    }

}
