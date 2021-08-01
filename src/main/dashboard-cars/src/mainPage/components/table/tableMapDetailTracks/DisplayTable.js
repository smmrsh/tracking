import React, {Component, useState} from 'react';
import {RowTable} from "../tableMapDetailTracks/RowTable";
import '../../../MainPage.css';
import '../TableDisplay.css';
export class DisplayTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMapItem: false,
            cancleP:false,
        }


    }
    cancel=()=>{
        this.setState({cancleP: true})
        this.props.canclePage (false)
    }
    changeClickDetails = () => {
        this.setState({details: !this.state.details,})
    }
    viewMap = (item) => {
        this.props.viewMapFun(true,item)
    }

    render() {
        const lengthPoint=this.props.items.points.length;
        return (

            <div className="card">
                {console.log(this.props.items)}
                <div>
                            <div className="d-flex pt-3 pl-3">
                                <div className="mt-3 pl-2"><span className="name">زمان شروع</span>
                                    <div><span className="cross"> {this.props.items.points[0].timeFirst}</span>
                                      </div>
                                </div>

                            </div>
                            <div className="d-flex  pl-3">
                                <div className=" pl-2"><span className="name">زمان پایان</span>
                                    <div><span className="cross">  {this.props.items.points[lengthPoint-1].timeSecond}</span>
                                      </div>
                                </div>
                            </div>
                            <div className="d-flex  pl-3">
                                <div className=" pl-2"><span className="name">خودرو</span>
                                    <div><span className="cross"> {this.props.items.trackId}</span>
                                      </div>
                                </div>
                            </div>
                            <div className="d-flex  pl-3">
                                <div className=" pl-2"><span className="name">کد دستگاه</span>
                                    <div><span className="cross"> {this.props.items.trackId}</span>
                                      </div>
                                </div>
                            </div>
                            <div className="d-flex  pl-3">
                                <div className=" pl-2"><span className="name">راننده</span>
                                    <div><span className="cross">میثاقی </span>
                                      </div>
                                </div>
                            </div>
                            <div className=" px-3">
                                <div className="first pl-2 d-flex py-2">
                                    <div className="border-left pl-2"><span className="head">متوسط سرعت</span>
                                        <div><span className="amount">8245</span><span className="dollar">کیلومتر</span></div>
                                    </div>
                                </div>

                            </div>
                            </div>
                        <div className="d-flex  pl-3">
                            <div className=" pl-2"><span className="name">مسافت پیموده شده</span>
                                <div><span className="cross"> {this.props.items.trackId}</span>
                                </div>
                            </div>
                        </div>
                            <div className="d-flex justify-content-between px-3 pt-4 pb-3"  onClick={this.cancel}>
                                <div><span className="back text-danger ">خروج</span></div>
                                <button onClick={() => this.viewMap(this.props.items)} type="button" className="btn btn-primary button">پردازش</button>
                            </div>

            </div>
        )
    }
}
