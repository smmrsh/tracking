import React, {Component, useState} from 'react';
import {TableData} from "../TableData";
import {RowTable} from "./RowTable";
import Button from "./Button";

export class DisplayTable extends Component {
    constructor(props) {
        super(props);
        this.state = {details: false, itemId: "",detailsClick:this.props.detailsClick==='a'?'a':null
        }
    }

    changeClickDetails = () => {
        this.setState({details: !this.state.details,})
    }

    render() {
        return (

            <>
                <table className="table rtl w-100 table-striped table-dark table-hover mt-3 ">

                    <thead className="align-content-center">
                    <tr className="yekan">
                        <th></th>
                        <th>خودرو</th>
                        <th>ماموریت</th>
                        <th>نام راننده</th>
                        <th>تاریخ شروع</th>
                        <th>تاریخ پایان</th>
                        <th>سرعت مجاز</th>
                        <th>ناحیه مجاز</th>
                        <th>وزن</th>
                        <th>سوخت</th>
                        <th> فاصله پیش بینی</th>
                        <th>زمان استراحت</th>
                    </tr>
                    </thead>
                    <tbody>
                    <RowTable item={this.props.tableData}  detailsCallback={this.changeClickDetails}
                              details={this.state.details} viewMapFun={this.props.viewMapFun} detailsClick={this.state.detailsClick}/>

                    </tbody>
                </table>

            </>
        )
    }
}
