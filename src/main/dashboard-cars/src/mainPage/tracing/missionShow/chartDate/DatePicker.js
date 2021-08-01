import {DateTimeInput, DateTimeInputSimple, DateInput, DateInputSimple} from 'react-hichestan-datetimepicker';
import React,{Component} from 'react';
export  class DatePicker extends Component{
    constructor(props) {
        super(props);
        this.state={
            myDateTime:""
        }
    }
    handleChange = (event) => {
        const newState = {};
        newState[event.target.name] = event.target.value;
        this.setState(newState);
    };
    render() {

        return(

            <span className="">
                <DateInput
                    value={this.state.myDateTime}
                    name={'myDateTime'}
                    onChange={this.handleChange}/>

            </span>
        )
    }
}

