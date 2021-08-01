import React, {Component} from 'react';
import L from 'leaflet';
 import {MapContainer, TileLayer, Marker, Popup, useMapEvents, MapConsumer} from "react-leaflet";
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapDirection.css';
import LeafletGreen from './leaf-green.png'
import {MrkerStationMap} from "./MrkerStationMap";
import {ATTRIBUTEMAP, URLMAP} from "../../../Config";
import icn from './station.png'
import {ConvertToArray} from "../../../components/CapabilityTool/track/ConvertToArray";
import {PointsDrawMap} from "./PointsDrawMap";
import {MapConsumerShowProccess} from "./MapConsumerShowProccess";

var myIcon = L.icon({
    iconUrl: LeafletGreen,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
})
export default class MapDirectionProccess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentpos: null,
            coor: [
                [35.715298, 51.404343],
                [35.7152, 51.404343],
                [35.715298, 51.4043],
                [35.7152, 51.4043],
                [35.715, 51.404343],
                [35.715298, 51.404],
                [35.715, 51.404]

            ]
        }
    }

    render() {
        const position = [32.166, 56.052]
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
                        return <MrkerStationMap />

                    }


<MapConsumerShowProccess data={this.props.data} viewMapFunClose={this.props.viewMapFunClose}/>
                    <div className="position-relative mapGuide m-3 rounded p-2">
                        <div className='row'>
                            <span
                                className="rounded-circle  pr-2 position-absolute  mapGuideColor3  ">
                                <img src={icn} width='25px' height='31px'/>
                            </span>
                            <span
                                className='pr-1 position-absolute mapGuidetitle mapGuidetitle3  fontMain'>ایستگاه</span>

                        </div>

                    </div>
                </MapContainer>
            </>
        )
    }

}

