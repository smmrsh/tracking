import react,{Component} from 'react';
import '../../MainPage.css';
import React from "react";
import Files from "./Files";

export class RemoveAllFiles extends Component{
    constructor(props) {
        super(props);
        this.state={
            files:[]
        }

    }
    //  componentDidMount() {
    //     axios.get('http://roocket.org/api/products')
    //         .then(response=>{this.setState({tableData:response.data.data.data})})
    //         .catch(error=>{console.log(error)})
    //}
    onFilesChange = (files) => {
        this.setState({
            files
        }, () => {
            console.log(this.state.files)
        })
    }

    onFilesError = (error, file) => {
        console.log('error code ' + error.code + ': ' + error.message)
    }

    filesRemoveAll = () => {
        this.refs.files.removeFiles()
    }
    render() {
        return(

            <>
                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h5 className="h5 text-light"> دریافت اطلاعات از فایل</h5>
                </div>
                <Files
                    ref='files'
                    className='files-dropzone-gallery'
                    onChange={this.onFilesChange}
                    onError={this.onFilesError}
                    accepts={['image/*']}
                    multiple
                    clickable={false}
                >
                    {
                        this.state.files.length > 0
                            ? <div className='files-gallery'>
                                {console.log(this.state.files.length)}
                                {this.state.files.map((file) =>
                                    <img className='files-gallery-item' src={file.preview.url} key={file.id} />
                                )}
                            </div>
                            : <div className='bg-danger '>Drop images here</div>
                    }
                </Files>
                <button onClick={this.filesRemoveAll}>Remove All Files</button>
                <div className='flex-row-reverse d-flex'>

                </div>


            </>
        )
    }
}