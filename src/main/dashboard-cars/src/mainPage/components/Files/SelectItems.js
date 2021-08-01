import react,{Component} from 'react';
import "../../MainPage.css"
import React from "react";
export class SelectItems extends Component{
    constructor(props) {
        super(props);
        this.state={
            value:1
        }
    }
    componentDidMount() {
    }

    handleChange=(event)=> {
        this.setState({value: event.target.value});
        this.props.getDeviceId(event.target.value)

    }
    render() {
        const items= this.props.items;
                return<>

                    <div className='form-group col-6 pt-5'>
                        <span className="text-white "> انتخاب دستگاه :</span>
                        <select className="form-control form-control-dark mt-3" value={this.state.value}
                                onChange={this.handleChange}>
                            <option>انتخاب کنید...</option>
                            {items.map(veh => {
                                return <option key={veh.id} value={veh.id}>{veh.id}</option>
                            })}
                        </select>
                    </div>
        </>
    }
}