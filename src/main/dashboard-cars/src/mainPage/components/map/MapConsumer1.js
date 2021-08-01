import {MapConsumer, MapContainer} from "react-leaflet";
import L from "leaflet";
import React,{Component} from "react";
import {DetailsClickRouteMap} from "./DetailsClickRouteMap";
import 'leaflet-polylinedecorator/dist/leaflet.polylineDecorator';
import lef from './tw.jpg'
export class MapConsumer1 extends Component{
    constructor(props) {
        super(props);
        this.state={
            color:'yellow',
            detailsClickRouteMap:false
        }

    }
    canclePage=(e)=>{
        this.setState({detailsClickRouteMap:e})

    }
    componentDidMount() {
        if (this.props.routData.status==1){this.setState({color:'red'})}else if (this.props.routData.status==2){this.setState({color:'green'})}
    }
    onMapClick=()=>{
        this.setState({detailsClickRouteMap:true})
    }
    render() {
        const latlangs=this.props.routData
        const icon=lef
        return(
            <>
                <MapConsumer>

                    {
                        (map) => {

                            var polyline = L.polyline(latlangs, {color: `${this.state.color}`}).addTo(map);
                            var decorator = L.polylineDecorator(polyline, {
                                patterns: [{
                                    offset: 15, /* pos of first arrow */ repeat: 55, /* dist between arrows */
                                    symbol: L.Symbol.arrowHead({ // Define the arrow symbol
                                        pixelSize: 12, // Size
                                        polygon: false, // false: ^ shape, true: triangle shape.
                                        pathOptions: {stroke: true} // Required to actually draw the arrow.
                                    })
                                }]
                            }).addTo(map);
                            polyline.on('click',this.onMapClick)
                            return null;
                        }
                    }

                </MapConsumer>
                {this.state.detailsClickRouteMap?<DetailsClickRouteMap tableData={this.props.routData} canclePage={this.canclePage}/>:null}
            </>
        )
    }

}
