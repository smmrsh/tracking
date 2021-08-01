import react, {Component} from 'react';
import '../../MainPage.css';
import React from "react";
import {MissionShowInfo1} from "./MissionShowInfo1";

export class MissionShow1 extends Component {
    render() {
        const {params} = this.props.match
        return (
            <>
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h5 className="h5 text-light"> نمایش ماموریت</h5>
                    <div className="btn-toolbar mb-2 mb-md-0">
                    </div>
                </div>


                {params.id ? <MissionShowInfo1 idTrack={params.id}/> : <MissionShowInfo1/>}

                <div className="table-responsive">
                </div>


            </>
        )
    }
}