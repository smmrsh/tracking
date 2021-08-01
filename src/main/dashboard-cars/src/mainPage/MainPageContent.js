import React,{Component} from 'react';
import {Link, Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import {Dashboard} from "./dashboard/Dashboard";
import {Tracing} from "./tracing/Tracing";
import {FormsMission} from "./display/forms/FormsMission";
import {FormsDriver} from "./display/forms/FormsDriver";
import {FormsVehicle} from "./display/forms/FormsVehicle";
import {FormsDevice} from "./display/forms/FormsDevice";
import {FormsStation} from "./display/forms/FormsStation";
import {FormsTrack} from "./display/forms/FormsTrack";
import {MissionDefinition} from "./tracing/MissionDefinition";
import DisplayTableDriver from "./components/table/tableDriver/DisplayTableDriver";
import DisplayTableDevice from "./components/table/tableDevice/DisplayTableDevice";
import DisplayTableStation from "./components/table/tableStation/DisplayTableStation";
import DisplayTableTrack from "./components/table/tableTrack/DisplayTableTrack";
import DisplayTableMission from "./components/table/tableMission/DisplayTableMission";
import {MissionShow1} from "./tracing/missionShow/MissionShow1";
import MapDirectionSelectAreaDarw from "./components/map/MapDirectionSelectAreaDraw";
import {UploadFileJson} from "./components/Files/UploadFileJson";
import {PointsShow} from "./tracing/PointsShow";
import {ProccessPage} from "./tracing/ProccessPage";
import DashboardVehicle from "./components/table/tableVehicle/DashboardVehicle";
export  class MainPageContent extends Component{
    render() {
        return(
            <>
                <main role="main" className="col-md-9 ml-sm-auto col-lg-10  maincontent">
                    <Switch>
                        <Route path='/dashboard' component={Dashboard}/>
                        <Route path='/tracing' component={Tracing}/>
                        <Route path='/pointsShow' component={PointsShow}/>
                        <Route path='/missionDefinition' component={MissionDefinition}/>
                        <Route path='/missionShow/:id?' component={MissionShow1}/>
                        <Route path='/dashboard' component={Dashboard}/>
                        <Route path='/info/mission' component={DisplayTableMission}/>
                        <Route path='/info/driver' component={DisplayTableDriver}/>
                        <Route path='/info/vehicle' component={DashboardVehicle}/>
                        <Route path='/info/device' component={DisplayTableDevice}/>
                        <Route path='/info/station' component={DisplayTableStation}/>
                        <Route path='/info/point' component={DisplayTableTrack}/>
                        <Route path='/info/area' component={MapDirectionSelectAreaDarw}/>
                        <Route path='/createDevice' component={FormsDevice}/>
                        <Route path='/createDriver' component={FormsDriver}/>
                        <Route path='/createVehicle' component={FormsVehicle}/>
                        <Route path='/createStation' component={FormsStation}/>
                        <Route path='/createTrack' component={FormsTrack}/>
                        <Route path='/createMission' component={FormsMission}/>
                        <Route path='/enterInformation' component={UploadFileJson}/>
                        <Route path='/proccessPage' component={ProccessPage}/>
                        <Redirect to='/dashboard'/>
                    </Switch>
                </main>
            </>
        )
    }
}
