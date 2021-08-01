import React, {Component} from 'react';
import L from 'leaflet';
import icon from "./Icon";
import {MapContainer, TileLayer, Marker, Popup, useMapEvents, MapConsumer} from "react-leaflet";
import 'mapbox-gl/dist/mapbox-gl.css';
import './MapDirection.css';
import LeafletGreen from './leaf-green.png'
import {TableData} from "../table/TableData";
import {MapConsumer1} from "./MapConsumer1";
import {MrkerStationMap} from "./MrkerStationMap";
import {MapConsumer3} from "./MapConsumer3";
import {MapDirection3PageSaveLatlng} from "./MapDirection3PageSaveLatlng";
import {ATTRIBUTEMAP, URLMAP} from "../../../Config";

var myIcon = L.icon({
    iconUrl: LeafletGreen,
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41]
})
export default class MapDirection3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentpos: null,
            latselectStart: [],
            lngselectStart: [],
            latselectEnd: [],
            lngselectEnd: [],
            saveOnclicklatlng: false,
            coor: [
                [35.715298, 51.404343],
                [32.64857, 51.65489],
                [38.09649, 46.27921],
                [36.25465, 59.61744],
                [36.40327, 55.01611],
                [29.58138, 52.56902],
                [31.89257, 54.35434]

            ]
        }
    }

    onMapClick = (e) => {
        this.props.valueBiginOrDestination==='start'? this.setState({latselectStart: e.latlng.lat, lngselectStart: e.latlng.lng, saveOnclicklatlng: true}):
            this.setState({latselectEnd: e.latlng.lat, lngselectEnd: e.latlng.lng, saveOnclicklatlng: true})
    }
    canclePage = (e) => {
        this.setState({saveOnclicklatlng: e})
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
                    {
                        <MapConsumer>
                            {(map) => {
                                map.on('click', this.onMapClick)

                                return null
                            }}

                        </MapConsumer>

                    }

                    {
                        this.state.saveOnclicklatlng ? <MapDirection3PageSaveLatlng canclePage={this.canclePage}
                                                                                 lt={this.state.lngselectEnd}   valueBiginOrDestination={this.props.valueBiginOrDestination}/> : null
                    }
                </MapContainer>
            </>
        )
    }

}

