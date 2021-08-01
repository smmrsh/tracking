import React,{Component} from 'react';
import {Fontcolor} from "../../../Config";
export class FormsDevice extends Component{
    render() {
        return(
            <div className="container">

                <div className="row ">
                    <div className="p-3">
                        <h5 className="mb-3 " style={{color: Fontcolor}}>تعریف دستگاه جدید</h5>
                    </div>
                </div>
                <div className="row border border-secondary p-5 rounded">
                    <form className="needs-validation" noValidate="">
                        <div className='row  mb-3'>
                            <label htmlFor="driverName" style={{color: Fontcolor}}>نام دستگاه</label>
                            <input className="form-control form-control-dark  rtl inputForm " type="text" placeholder=""
                                   aria-label="driverName"/>
                        </div>
                        <div className='row  mb-3'>
                            <label htmlFor="driverFamily" style={{color: Fontcolor}}> نام منطقه</label>
                            <input className="form-control form-control-dark  rtl inputForm " type="text"
                                   placeholder=" " aria-label="driverFamily"/>
                        </div>
                        <div className='row  mb-3'>
                            <label htmlFor="driverPersonalCode" style={{color: Fontcolor}}> توضیحات</label>
                            <textarea className="form-control form-control-dark  rtl inputForm " type="text"
                                   placeholder=" " aria-label="driverPersonalCode"/>
                        </div>
                        <div className='row  mb-3'>
                            <label  htmlFor="driverNationalCode" style={{color: Fontcolor}}> وضعیت فعالیت</label>
                            <input className="m-2  mb-3 form-control-dark " type="checkbox"
                                    aria-label="driverNationalCode"/>
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


