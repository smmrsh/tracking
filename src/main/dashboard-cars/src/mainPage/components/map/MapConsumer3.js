

import {MapConsumer, MapContainer} from "react-leaflet";
import L from "leaflet";
import React,{Component} from "react";
export class MapConsumer3 extends Component{
    constructor(props) {
        super(props);
        this.state={
            color:'yellow'
        }

    }

    render() {

        return(

            <MapConsumer>

                {
                    (map) => {

                        var polyline = L.on('click', function(e) {
                            alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
                        });
                        return null;
                    }
                }

            </MapConsumer>
        )
    }

}

