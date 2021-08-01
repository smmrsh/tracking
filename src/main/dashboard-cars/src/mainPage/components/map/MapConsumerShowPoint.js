import {MapConsumer, MapContainer} from "react-leaflet";
import L from "leaflet";
import React,{Component} from "react";
import 'leaflet-polylinedecorator/dist/leaflet.polylineDecorator';
import 'Leaflet.MultiOptionsPolyline/Leaflet.MultiOptionsPolyline'
import 'Leaflet.MultiOptionsPolyline/Leaflet.MultiOptionsPolyline.min'
import lef from './tw.jpg'
import {DetailsClickRouteMap} from "./DetailsClickRouteMap";
export class MapConsumerShowPoint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'yellow',
            detailsClickRouteMap: false
        }

    }

    canclePage = (e) => {
        this.setState({detailsClickRouteMap: e})

    }

    componentDidMount() {
    }
    convertToArray=()=>{
        const arr=[];
        arr.push( this.props.items);
        var tracks = [];
        var a = [];
        var x=[];
        arr.map(p=>{
            // console.log(p.points)
            for (var i=0;i<p.points.length;i++){
                var arrayItem = [];
                arrayItem[0]=Number(p.points[i].lats);
                arrayItem[1]=Number(p.points[i].longs);
                // console.log(arrayItem)
                a.push(arrayItem)
                //console.log(a)
            }
        })
        return a;
    }

    onMapClick = () => {
        this.setState({detailsClickRouteMap: true})

    }
    optionIdxFn = (latLng, prevLatLng) => {
        var i, speed,
            speedThresholds = [30, 35, 40, 45, 50, 55, 60, 65];

        speed = latLng.distanceTo(prevLatLng); // meters
        speed /= (latLng.meta.time - prevLatLng.meta.time) / 1000; // m/s
        speed *= 3.6; // km/h

        for (i = 0; i < speedThresholds.length; ++i) {
            if (speed <= speedThresholds[i]) {
                return i;
            }
        }
        return speedThresholds.length;
}


    render() {
        const    coor= [
            [35.715298, 51.404343],
            [35.7152, 51.404343],
            [35.715298, 51.4043],
            [35.7152, 51.4043],
            [35.715, 51.404343],
            [33.98308, 51.43644],
            [35.7, 51.4]

        ]

        const icon = lef;
        var a=this.convertToArray();
        return (
            <>
                {}
                <MapConsumer>

                    {
                        (map) => {


                            var optionPoly=L.multiOptionsPolyline(a, {
                                multiOptions: {
                                    optionIdxFn: function (latLng) {
                                        var i,
                                            altThresholds = [0, 700, 200, 10, 800, 7152, 800, 1];

                                        for (i = 0; i < altThresholds.length; ++i) {
                                            if (latLng.alt >= altThresholds[i]) {
                                                return i;
                                            }
                                        }
                                        return altThresholds.length;
                                    },
                                    options: [
                                        {color: '#0000FF'}, {color: '#0040FF'}, {color: '#0080FF'},
                                        {color: '#00FFB0'}, {color: '#00E000'}, {color: '#80FF00'},
                                        {color: '#FFFF00'}, {color: '#FFC000'}, {color: '#FFFF00'}
                                    ]
                                },
                                weight: 4,
                                lineCap: 'butt',
                                opacity: 0.75,
                                smoothFactor: 1});
                            var polyLineLayer = L.layerGroup([optionPoly]);
                            polyLineLayer.addTo(map);
                            var decorator = L.polylineDecorator(optionPoly, {
                                patterns: [{
                                    offset: 15, /* pos of first arrow */ repeat: 55, /* dist between arrows */
                                    symbol: L.Symbol.arrowHead({ // Define the arrow symbol
                                        pixelSize: 12, // Size
                                        polygon: false, // false: ^ shape, true: triangle shape.
                                        pathOptions: {stroke: true} // Required to actually draw the arrow.
                                    })
                                }]
                            }).addTo(map);
                            optionPoly.on('click',this.onMapClick)
                            return null;
                        }
                    }

                </MapConsumer>
                {this.state.detailsClickRouteMap ?
                    <DetailsClickRouteMap items={this.props.items} canclePage={this.canclePage} viewMapFun={this.props.viewMapFun}/> : null}
            </>
        )
    }
}
