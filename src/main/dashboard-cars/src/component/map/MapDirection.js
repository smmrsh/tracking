import React,{Component} from 'react';
import L from 'leaflet';
import icon from "./Icon";
import {MapContainer,TileLayer,Marker,Popup,useMapEvents,MapConsumer} from "react-leaflet";
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapDirection.css';
import l from 'leaflet-routing-machine';
import LeafletGreen from './leaf-green.png'
import {TableData} from "../mainContent/TableData";
var myIcon=L.icon({
    iconUrl:LeafletGreen,
    iconSize:[25,41],
    iconAnchor:[12.5,41],
    popupAnchor:[0,-41]
})
export default class MapDirection extends Component{
constructor(props) {
    super(props);
    this.state={
        currentpos:null,
        coor:[]

    }
}

    render() {

        var latlngs = this.props.dataMap.latlngs;

        const position = [ 35.715298,51.404343]
        return(
            <MapContainer className="map" center={position} zoom={10} scrollWheelZoom={false} onClick={this.changePos} ref={this.saveMap}>
                <TileLayer
                    attribution='&copy; <a href="http://164.90.165.229">OpenStreetMap</a> contributors'
                    url="http://164.90.165.229/hot/{z}/{x}/{y}.png"
                />
                {this.props.dataMap.latlngs? <MapConsumer>
                        {
                            (map) => {
                                var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
                                return null;
                            }
                        }

                    </MapConsumer>
                    :null}
            </MapContainer>
        )    }
}

