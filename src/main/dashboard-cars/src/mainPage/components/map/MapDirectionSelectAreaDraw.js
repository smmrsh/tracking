import React, {Component} from 'react';
import L from 'leaflet';
import * as RiIcons from 'react-icons/ri';
import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, Popup, useMapEvents, MapConsumer,Polyline,Polygon} from "react-leaflet";
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapDirection.css';
import LeafletGreen from './leaf-green.png'
import {SelectAreaSave} from "./SelectAreaSave";
import {ATTRIBUTEMAP, URLMAP} from "../../../Config";

var myIcon = L.icon({
    iconUrl: LeafletGreen,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
})
export default class MapDirectionSelectAreaDraw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startEdt:false,
            currentpos: null,
            latlng: [],

            saveOnclicklatlng: false,
            coor: [

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
    onMapDbClick=()=>{
        this.setState({ Polyline : [] })
    }


    drawPolyline=()=>{
        this.setState({startEdt:true})
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
                              editable={true}
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
                </MapContainer>
                <span className='icconMaps ' onClick={this.drawPolyline}><RiIcons.RiEditBoxLine/></span>
                <span className='icconMaps mt-5'><RiIcons.RiEditBoxLine/></span>
                <div className="btn-group mr-2 btnSaveSelectArea">
                    <button type="button" className="btn btn-sm btn-outline-secondary " onClick={this.backPolyline }>بازکشت</button>
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

