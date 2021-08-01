import React, {Component} from "react";
import {RowTable} from "./RowTable";
import '../../MainPage.css'
export  class TableDisplay extends Component {
    constructor(props) {
        super(props);
        this.state={details:false,itemId:""}
    }
    render() {
        return(
            <div className={`table-responsive  ${this.props.iconMapStates?'divUnderMap1':'divUnderMap'}`}>
                <table className="table table-striped table-sm table-dark table-hover">
                    <thead className="align-content-center"><tr >
                        <th></th> <th>خودرو</th><th>ماموریت</th><th>نام راننده</th><th>تاریخ شروع</th><th>تاریخ پایان</th><th>سرعت مجاز</th><th>ناحیه مجاز</th>
                        <th>وزن</th><th>سوخت </th><th> فاصله پیش بینی</th><th>زمان استراحت</th>
                    </tr></thead>
                    <tbody>
                    {
                        this.props.tableData.map((i)=>{
                            return <RowTable item={i} key={i.id} detailsCallback={this.changeClickDetails} details={this.state.details} viewMapFun={this.props.viewMapFun}/>
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

