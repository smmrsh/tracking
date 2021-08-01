import react, {Component} from 'react';
import '../../MainPage.css';
import React from "react";

export class SelectAreaSave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cancleP: false,
            valueInput: ''
        }
    }

    cancle=()=>{
        this.setState({cancleP: true})
        this.props.canclePage(this.state.cancleP)
    }
    inputValue=(e)=>{
        this.setState({valueInput: e.target.value})
    }
    saveValue=(e)=>{
        this.setState({cancleP: true})
        this.props.canclePage(this.state.cancleP)
    }
    render() {
        return (
            <div className="container">

                <div className='bg-secondary  position-absolute selectAreaSave  rounded row border border-secondary p-5 '>
                    <div className='row  mb-3 w-100'>
                        <label className="text-white"> نام محدوده انتخابی
                            <input className="form-control form-control-dark  rtl inputForm mt-3" type="text"
                                   placeholder=" " aria-label="driverPersonalCode" onChange={this.inputValue}/>
                        </label>
                    </div>
                    <div className='row  mb-3 w-100'>
                        <label className="text-white"> توضیحات محدوده انتخابی
                            <textarea className="form-control form-control-dark  rtl inputForm mt-3" type="text"
                                      placeholder=" " aria-label="driverPersonalCode" onChange={this.inputValue}/>
                        </label>
                    </div>
                    <div className="w-100">
                        <div className=" d-flex justify-content-between btnScrollSpy">
                            <a href='#scrollSpayMissonDefinition'>
                                <button type="button" onClick={this.saveValue}
                                        className="bg-primary btn  btn-outline-secondary text-white  mt-3 buttonMap">
                                    ثبت
                                </button>
                            </a>

                            <div className="d-flex justify-content-between ">

                                    <button type="button" onClick={this.cancle} className="bg-primary btn  btn-outline-secondary text-white   mt-3 buttonMap">
                                        لغو
                                    </button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}