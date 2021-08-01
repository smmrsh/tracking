import React, {Component} from 'react';
import L from 'leaflet';
import icon from "./Icon";
import {MapContainer, TileLayer, Marker, Popup, useMapEvents, MapConsumer,Polyline,Polygon} from "react-leaflet";
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapDirection.css';
import LeafletGreen from './leaf-green.png'
import {TableData} from "../table/TableData";
import {MapConsumer1} from "./MapConsumer1";
import {MrkerStationMap} from "./MrkerStationMap";
import {MapConsumer3} from "./MapConsumer3";
import {MapDirection3PageSaveLatlng} from "./MapDirection3PageSaveLatlng";
import {SelectAreaSave} from "./SelectAreaSave";
import {ATTRIBUTEMAP, URLMAP} from "../../../Config";

var myIcon = L.icon({
    iconUrl: LeafletGreen,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
})
export default class MapDirectionSelectArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentpos: null,
            latlng: [],

            saveOnclicklatlng: false,
            coor: [
                [35.715298, 51.404343],
                [32.64857, 51.65489],
                [38.09649, 46.27921],
                [36.25465, 59.61744],
                [36.40327, 55.01611],
                [29.58138, 52.56902],
                [31.89257, 54.35434]

            ],
            Polyline  :[
            ],
            savePolygon:false
        }
    }

    onMapClick = (e) => {
        var joined = this.state.Polyline .concat(e.latlng);
        this.setState({ Polyline : joined })

    }

    resetPolyline =()=>{
        this.setState({Polyline :[],savePolygon:false})
    }
    savePolygon =()=>{
        this.setState({savePolygon :true,saveOnclicklatlng:true })
    }
    canclePage = (e) => {
        this.setState({saveOnclicklatlng: e})
    }
    backPolyline=()=>{
        let a=this.state.Polyline
a.pop()
        this.setState({Polyline:a})
    }

    render() {
        const position = [32.166, 56.052]
        const purpleOptions = { color: 'purple' }

        return (
            <>
                <MapContainer className="map" center={position} zoom={6} scrollWheelZoom={true}
                              onClick={this.changePos} ref={this.saveMap}
                              zoomDelta={0.25} zoomSnap={0}
                              dragging={true}
                              doubleClickZoom={true}
                              attributionControl={false}
                              zoomControl={true}
                >

                    <TileLayer
                        attribution={ATTRIBUTEMAP}
                        url={URLMAP}
                    />
                    {
                        <MapConsumer>
                            {(map) => {
                                map.on('click', this.onMapClick)

                                return null
                            }}

                        </MapConsumer>

                    }

                    <Polyline pathOptions={purpleOptions} positions={this.state.Polyline } />
                    {
                        this.state.savePolygon? <Polygon pathOptions={purpleOptions} positions={this.state.Polyline } />:null
                    }
                </MapContainer>
                <div className="btn-group mr-2 btnSaveSelectArea">
                    <button type="button" className="btn btn-sm btn-outline-secondary " onClick={this.savePolygon }>ذخیره</button>
                    <button type="button" className="btn btn-sm btn-outline-secondary " onClick={this.resetPolyline }>تنظیم مجدد</button>
                </div>
                {
                    this.state.saveOnclicklatlng ? <SelectAreaSave canclePage={this.canclePage}/> : null
                }
            </>
        )
    }

}

