import react,{Component} from 'react';
import './File.css';
import React from "react";
import Files from "./Files";
import Blob from 'blob'
import FormData from 'form-data'
import axios from "axios";
import * as AiIcons from 'react-icons/ai';
import '../table/TableData'
import {TableData} from "../table/TableData";
import {DataTableContext} from "../../contex/DataTableContext";
export class UploadFileJson extends Component{
    constructor(props) {
        super(props);
        this.state={
            files:[],
            jsonFile: {},
            proContextData: {
                dataTableContex: []
            }
        }
        this.fileReader = new FileReader();
        this.fileReader.onload = async (event) => {

            // or do whatever manipulation you want on JSON.parse(event.target.result) here.

            this.setState({ jsonFile: JSON.parse(event.target.result) }, () => {
                console.log(this.state.jsonFile);
                alert(JSON.stringify(this.state.jsonFile ))
            });
        };

    }
    componentDidMount() {
        const config = {
            headers: { Authorization: `Token 588294c6fe9f0136dfac88192c23a420b211a34e` }
        };
        axios.get('https://collect2.com/api/6ed6674f-eda2-4f06-9fb5-70fabd088e34/datarecord/',config)
            .then(response=>console.log(response)
            )
            .catch(error=>{console.log(error)})
    }
    onFilesChange = (files) => {
        this.setState({
            files,
            disablebtn:true
        }, () => {
        })
        this.fileReader.readAsText(files[0]);


    }

    onFilesError = (error, file) => {
        console.log('error code ' + error.code + ': ' + error.message)
    }

    filesRemoveOne = (file) => {
        this.refs.files.removeFile(file)
    }

    filesRemoveAll = () => {
        this.refs.files.removeFiles()
    }


    filesUpload = () => {
        TableData.push(this.state.jsonFile)
        console.log(TableData)
        const a=document.createElement('a')
        a.href=URL.createObjectURL(new Blob([JSON.stringify(TableData,null,2)],{type:'text/plain'}))
        a.setAttribute('download','data.js')
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }


    jsonFilePars=()=>{

        this.state.files.map(file=>console.log(JSON.parse('./sample1.json')))

    }
    disableBtnChng=(e)=>{
        this.setState({disablebtn:e})
    }


    render() {
        return(

            <div className="container border border-secondary mt-5 vh-100">
                <h5 className=' h5 text-light m-3'>ارسال اطلاعات از فایل</h5>
                <Files
                    ref='files'
                    className='files-dropzone-list'
                    style={{ height: '50px' }}
                    onChange={(file)=>this.onFilesChange(file)}
                    onError={this.onFilesError}
                    multiple
                    maxFiles={10}
                    maxFileSize={10000000}
                    minFileSize={0}

                >
                    <button className='btn mt-3 mr-3 btn-outline-success w-25 rounded-0' onClick={()=>this.disableBtnChng(false)}>انتخاب فایل</button>
                </Files>

                <button disabled={this.state.disablebtn?false:true} className='btn mt-3 mr-3 btn-outline-success ml-1 mb-2 w-25 rounded-0' onClick={this.filesUpload}> ارسال اطلاعات</button>
                <button disabled={this.state.disablebtn?false:true} className='btn mt-3 mr-3 btn-outline-danger mb-2 w-25 rounded-0' onClick={this.filesRemoveAll}>حذف تمام فایل ها</button>

                {
                    this.state.files.length > 0
                        ? <div className='files-list bg-secondary'>
                            <ul className='list-group list-group-flush bg-secondary'>{this.state.files.map((file) =>
                                <li className='files-list-item list-group-item bg-secondary' key={file.id}>
                                    <div className='files-list-item-content'>
                                        <span className='text-light spanFileIcon' onClick={()=>this.filesRemoveOne(file)}><AiIcons.AiOutlineClose/></span>
                                        <span className='spanFi leName files-list-item-content-item files-list-item-content-item-1 text-light'>{file.name}</span>
                                        <div className='spanFileSize files-list-item-content-item files-list-item-content-item-2 text-light'>{file.sizeReadable}</div>
                                    </div>
                                    <div
                                        id={file.id}
                                        className='files-list-item-remove'
                                        onClick={this.filesRemoveOne.bind(this, file)} // eslint-disable-line
                                    />
                                </li>
                            )}</ul>
                        </div>
                        :<div className='bgUl'></div>
                }
            </div>
        )
    }
}