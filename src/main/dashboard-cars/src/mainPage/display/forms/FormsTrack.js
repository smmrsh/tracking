import React,{Component} from 'react';
import {Fontcolor} from "../../../Config";
export class FormsTrack extends Component{
    render() {
        return(
            <div className="container">

                <div className="row ">
                    <div className="p-3">
                        <h5 className="mb-3 " style={{color: Fontcolor}}>تعریف راننده جدید</h5>
                    </div>
                </div>
                <div className="row border border-secondary p-5 rounded">
                    <form className="needs-validation" noValidate="">
                        <div className='row  mb-3'>
                            <label htmlFor="driverName" style={{color: Fontcolor}}>نام</label>
                            <input className="form-control form-control-dark  rtl inputForm " type="text" placeholder=""
                                   aria-label="driverName"/>
                        </div>
                        <div className='row  mb-3'>
                            <label htmlFor="driverFamily" style={{color: Fontcolor}}>نام خانوادگی</label>
                            <input className="form-control form-control-dark  rtl inputForm " type="text"
                                   placeholder=" " aria-label="driverFamily"/>
                        </div>
                        <div className='row  mb-3'>
                            <label htmlFor="driverPersonalCode" style={{color: Fontcolor}}>کد پرسنلی</label>
                            <input className="form-control form-control-dark  rtl inputForm " type="text"
                                   placeholder="1234567896 " aria-label="driverPersonalCode"/>
                        </div>
                        <div className='row  mb-3'>
                            <label htmlFor="driverNationalCode" style={{color: Fontcolor}}>کد ملی</label>
                            <input className="form-control form-control-dark  rtl inputForm " type="text"
                                   placeholder="0072001609 " aria-label="driverNationalCode"/>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="partId" style={{color: Fontcolor}}>منطقه</label>
                            <select className="custom-select d-block w-100 form-control-dark" id="partId" required="">
                                <option value="">انتخاب منطقه...</option>
                                <option>منطقه 1</option>
                                <option>منطقه 2</option>
                                <option>منطقه 3</option>
                            </select>

                        </div>
                        <div className="row  ">
                            <div className="col text-center ">
                                <button type="button" className="bg-primary btn  btn-outline-secondary text-white w-50 mt-3">
                                    ثبت
                                </button>
                            </div>
                        </div>


                    </form>

                </div>


            </div>
        )
    }

}


