import React, {Component} from 'react';
import '../../MainPage.css'
import {TableDisplay} from "../../components/table/TableDisplay";
import DisplayTableMission from "../../components/table/tableMission/DisplayTableMission";

export class SelectDriverMission extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'انتخاب کنید',
            missionValue: 'انتخاب کنید',
            dataselect: {},
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    componentDidMount() {
        {

            if (this.props.TrackInfo) {
                let a = this.props.val.filter(p => {
                    return p.nameCar === this.props.TrackInfo[0].nameCar
                });
                let m = a.map(p => p.mission)
                this.setState(() => {
                    return {value: this.props.TrackInfo[0].nameCar, missionValue: m, dataselect: a[0]}
                });
            }

        }
    }

    handleChange(event) {
        let a = this.props.val.filter(p => {
            return p.nameCar === event.target.value
        });
        let m = a.map(p => p.mission)
        this.setState({value: event.target.value, missionValue: m, dataselect: a[0]})
    }


    handleSubmit() {
        this.props.tableFilter(this.state.dataselect, false)
    }

    render() {
        let val = this.props.val;
        return (
            <div className='row p-2 rtl mt-3 ' style={{width: '100%'}}>
                <form style={{width: '50%'}}>

                    <div className='form-group col-6'>
                        <span className=""> انتخاب ماشین:</span>
                        <select className="form-control form-control-dark mt-3" value={this.state.value}
                                onChange={this.handleChange}>
                            <option>انتخاب کنید...</option>
                            {val.map(p => {
                                return <option value={p.nameCar}>{p.nameCar}</option>
                            })}
                        </select>
                    </div>
                    <div className='form-group col-6'>
                        <span className=""> انتخاب  ماموریت:</span>
                        <select className="form-control form-control-dark mt-3" value={this.state.value}
                                onChange={this.handleChange}>
                            <option value={this.state.missionValue}>{this.state.missionValue}</option>
                        </select>
                    </div>
                </form>
                <div className='row p-2 rtl mt-3 mr-lg-5' style={{width: '100%'}}>
                    <button className='btn btn-primary ' onClick={this.handleSubmit}>نمایش اطلاعات</button>

                </div>
            </div>
        );
    }
}
