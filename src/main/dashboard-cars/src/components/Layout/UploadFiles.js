
import React from 'react'
import axios from 'axios';

class FileUpload extends React.Component{

    constructor(){
        super();
        this.state = {
            selectedFile:'',
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({
            selectedFile: event.target.files[0],
        })
    }

    submit(){
        const data = new FormData()
        data.append('file', this.state.selectedFile)
        data.append('deviceId', this.props.deviceId)
        console.warn(this.state.selectedFile);
        axios.post("http://localhost:8080/dashboard/saveCsvs", data, { // receive two parameter endpoint url ,form data
        })
            .then(res => { // then print response status
                console.warn(res);
            })

    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br /><br />

                        <br />
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="text-white">Select File :</label>
                                <input type="file"  className="form-control" name="upload_file" onChange={this.handleInputChange} />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="col-md-6">
                                <button type="submit" className="btn btn-dark" onClick={()=>this.submit()}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FileUpload;