import React, {Component, useState} from 'react';
import RowTable from "./RowTable";

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
            <div className={`table-responsive bg-dark ${this.props.iconMapStates?'divUnderMap1':'divUnderMap'}`}>
                <table className="table rtl w-100 table-striped table-dark table-hover mt-3 ">

                    <thead className="align-content-center">
                    <tr className="yekan">
                        <th>زمان شروع</th>
                        <th>زمان پایان</th>
                        <th>حداکثر سرعت</th>
                        <th>خودرو</th>
                        <th>کد دستگاه</th>
                        <th> راننده</th>
                        <th>متوسط سرعت</th>
                        <th>مسافت پیموده شده</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.props.data.map(p=> < RowTable data={p} key={p.deviceId.id} viewMapFun={this.props.viewMapFun}/>  )}

                    </tbody>
                </table>

            </div>
        )
    }
}
