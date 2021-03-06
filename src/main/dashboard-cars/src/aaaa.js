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
export class UploadFileJson extends Component{
    constructor(props) {
        super(props);
        this.state={
            files:[],
            jsonFile: {},
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
    //  componentDidMount() {
    //     axios.get('http://roocket.org/api/products')
    //         .then(response=>{this.setState({tableData:response.data.data.data})})
    //         .catch(error=>{console.log(error)})
    //}
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

        var fs = require('fs');
        fs.writeFile('../table/TableData.js', this.state.jsonFile, function(err) {
            fs.readFile('../table/TableData.js', function(err, contents) {
                console.log(contents.toString());
            });
        });
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
                <h5 className=' h5 text-light m-3'>?????????? ?????????????? ???? ????????</h5>
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
                    <button className='btn mt-3 mr-3 btn-outline-success w-25 rounded-0' onClick={()=>this.disableBtnChng(false)}>???????????? ????????</button>
                </Files>

                <button disabled={this.state.disablebtn?false:true} className='btn mt-3 mr-3 btn-outline-success ml-1 mb-2 w-25 rounded-0' onClick={this.filesUpload}> ?????????? ??????????????</button>
                <button disabled={this.state.disablebtn?false:true} className='btn mt-3 mr-3 btn-outline-danger mb-2 w-25 rounded-0' onClick={this.filesRemoveAll}>?????? ???????? ???????? ????</button>

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