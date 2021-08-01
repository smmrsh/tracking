import react,{Component} from 'react';
import './File.css';
import React from "react";
import Files from "./Files";
import FormData from 'form-data'
import axios from "axios";
import * as AiIcons from 'react-icons/ai';
import '../table/TableData'
import Dashboard from "../../../components/CapabilityTool/device/Dashboard";
export class UploadFileJson extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: [],
            jsonFile: {},
            proContextData: {
                dataTableContex: [],
                selectedFile: '',
                deviceId:0,
                percentage:0,
                showEndFile:false,
                showLoadFile:false
            }
        }


    }
   getDeviceId=(e)=>{
        this.setState({deviceId:e})
        //this.setState(e.target.name=e.target.value)
   }
    handleInputChange(event) {
        this.setState({
            selectedFile: event.files[0],
        })
    }

    submit(){
        this.setState({showLoadFile:true})
        const data = new FormData()
        this.state.selectedFile.forEach(file=>{
            data.append("file", file);
        });
        data.append('deviceId', this.state.deviceId)
        console.warn(this.state.selectedFile);
        const options={
            onUploadProgress:(progressEvent)=>{
                const {loaded, total}=progressEvent;
                let percent=Math.floor((loaded*100)/total)
                console.log(loaded,total,percent)
            }
        }
        axios.post("http://localhost:8080/dashboard/saveCsvs", data,options, { // receive two parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                this.filesRemoveAll()

            })

    }

    onFilesChange = (files) => {
        this.setState({
            files,
            selectedFile:files,
            disablebtn: true
        }, () => {
        })

    }

    onFilesError = (error, file) => {
        console.log('error code ' + error.code + ': ' + error.message)
    }

    filesRemoveOne = (file) => {
        this.refs.files.removeFile(file)
    }

    filesRemoveAll = () => {
        this.refs.files.removeFiles();
        this.setState({showEndFile:true,showLoadFile:false})
    }


    filesUpload = () => {

    }


    jsonFilePars = () => {

        this.state.files.map(file => console.log(JSON.parse('./sample1.json')))

    }
    disableBtnChng = (e) => {
        this.setState({disablebtn: e,showEndFile:false})
    }


    render() {
        return (

            <div className="container border border-secondary mt-5 vh-100 bgUl">
                <h5 className=' h5 text-light m-3'>ارسال اطلاعات از فایل</h5>
                <Files
                    ref='files'
                    className='files-dropzone-list'
                    style={{height: '50px'}}
                    onChange={(file) => this.onFilesChange(file)}
                    onError={this.onFilesError}
                    multiple
                    maxFiles={10}
                    maxFileSize={10000000}
                    minFileSize={0}

                >
                    <button className='btn mt-3 mr-3 btn-outline-success w-25 rounded-0'
                            onClick={() => this.disableBtnChng(false)}>انتخاب فایل
                    </button>
                </Files>
                <Dashboard getDeviceId={this.getDeviceId}/>
                <button type="submit" className="btn mt-3 mr-3 btn-outline-success ml-1 mb-2 w-25 rounded-0" onClick={()=>this.submit()}>ارسال اطلاعات</button>

                <button disabled={this.state.disablebtn ? false : true}
                        className='btn mt-3 mr-3 btn-outline-danger mb-2 w-25 rounded-0'
                        onClick={this.filesRemoveAll}>حذف فایل
                </button>

                {
                    this.state.files.length > 0
                        ? <div className='files-list bg-secondary'>
                            <ul className='list-group list-group-flush bg-secondary'>{this.state.files.map((file) =>
                                <li className='files-list-item list-group-item bg-secondary' key={file.id}>
                                    <div className='files-list-item-content'>
                                        <span className='text-light spanFileIcon' onClick={() => this.filesRemoveOne(file)}><AiIcons.AiOutlineClose/></span>
                                        <span
                                            className='spanFi leName files-list-item-content-item files-list-item-content-item-1 text-light'>{file.name}</span>
                                        <div
                                            className='spanFileSize files-list-item-content-item files-list-item-content-item-2 text-light'>{file.sizeReadable}</div>
                                    </div>
                                    <div
                                        id={file.id}
                                        className='files-list-item-remove'
                                        onClick={this.filesRemoveOne.bind(this, file)} // eslint-disable-line
                                    />
                                </li>
                            )}</ul>
                        </div>
                        : <div className='bgUl'></div>
                }
                    {this.state.showLoadFile?<div className="d-flex align-items-center text-white pt-3 pr-2">
                        <strong>لطفا منتظر بمانید ...</strong>
                        <div className="spinner-border ml-auto text-white" role="status" aria-hidden="true"></div>
                    </div>:null}
                    {this.state.showEndFile? <div className="d-flex align-items-center text-white pt-3 pr-2">
                        <strong>پایان بارگیری فایل</strong>
                    </div>:null}

            </div>
        )
    }
}