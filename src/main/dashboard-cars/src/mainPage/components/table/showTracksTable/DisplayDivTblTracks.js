import React, {useState} from "react";
import '../../../MainPage.css';
import DisplayTableTracing from "./DisplayTableTracing";
import {UploadFileJson} from "../../Files/UploadFileJson";
import {DataTableContext} from "../../../contex/DataTableContext";
import {DisplayTable} from "./DisplayTable";

export default function DisplayDivTblTracks(props) {
    const [itemSlct, setitemSlct] = useState([]);
    const [uploadFile, setUploadFile] = useState(false);
    const [dataContex, setdataContex] = useState([]);
    const selectMap=(e)=>{
        setitemSlct(e)
    }
    const changSlectMap=()=>{
        props.selectMaps(itemSlct)
    }
    const openUploadFile  =()=>{
        setUploadFile(!uploadFile)
    }
    const closeUploadFile  =()=>{
        setUploadFile(false)
    }

    return (
        <div className={`table-responsive bg-dark ${props.iconMapStates?'divUnderMap1':'divUnderMap'}`}>
            <DisplayTable iconMapStates={props.iconMapStates} data={props.data} viewMapFun={props.viewMapFun} selectMap={props.selectMap}/>

        </div>
    );
}
