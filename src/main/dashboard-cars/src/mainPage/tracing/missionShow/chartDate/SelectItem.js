import React, {Component} from 'react';

export class SelectItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            valueTable: '', newDataTable: [],
            value: 'خودرو6',
            nameTrack: this.props.Trackname
        }
    }


    updateValue = (e) => {
        this.setState({
                valiueDefult: e.target.value, valueTable: e.target.value,

            },
        )
    }
    updateValuechng = (e) => {
        this.setState({
                valueTable: e.target.value,
            }, () => this.props.tableFilter(this.state)
        )

    }
    chng = () => {
        this.setState({newDataTable: this.props.val.filter(val => val.nameCar === this.state.valiueDefult && val.mission === this.state.valueTable),},
            () => this.props.tableFilter(this.state.newDataTable)
        )
    }


    render() {
        console.log(this.props.Trackname)
        let val = this.props.val;
        return (

            <div className='row p-2 rtl mt-3'>

                <div className='form-group col-6' style={{width: '300px'}}>
                    <span className="pb-3"> انتخاب ماشین:</span>

                    <select className="form-control form-control-dark" name={this.props.name}
                            onChange={this.updateValue} value={this.props.TrackInfo[0].nameCar}>
                        <option>انتخاب کنید...</option>

                        {
                            val.filter((thing, index, self) =>
                                index === self.findIndex((t) => (
                                    t.nameCar === thing.nameCar && t.nameCar === thing.nameCar
                                ))
                            ).map(valu =>
                                <option key={valu.id} value={valu.nameCar}>{valu.nameCar}</option>
                            )
                        }
                    </select>
                </div>
                <div className='form-group col-6' style={{width: '300px'}}>
                    <span className="pb-2"> انتخاب ماموریت:</span>
                    <select className="form-control form-control-dark" onChange={this.updateValuechng}
                            value={this.props.TrackInfo[0].mission}>
                        <option>انتخاب کنید...</option>
                        {
                            this.props.val.filter((val) => val.nameCar == this.props.TrackInfo[0].nameCar).filter((thing, index, self) =>
                                index === self.findIndex((t) => (
                                    t.mission === thing.mission && t.mission === thing.mission
                                ))).map(valu =>
                                <option key={valu.id} value={valu.mission}>{valu.mission}</option>
                            )
                        }
                    </select>
                </div>
            </div>
        )
    }

}