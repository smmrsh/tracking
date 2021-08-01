import React,{Component} from 'react';
import {TableData} from "../../TableData";
export  class SelectItem extends Component {

    constructor(props) {
        super(props);
        this.state={
            valiueDefult:'کامیون 2445',
            valueTable:'',newDataTable:[]
        }
    }
    updateValue=(e)=>{
        this.setState({valiueDefult:e.target.value,valueTable:e.target.value,

            },

        )
    }
    updateValuechng=(e)=>{
        this.setState({valueTable:e.target.value,
               },   ()=>this.props.tableFilter(this.state)
        )

}
chng=()=>{
        this.setState({ newDataTable:this.props.val.filter(val=>val.nameCar===this.state.valiueDefult&&val.mission===this.state.valueTable),},
            ()=>this.props.tableFilter(this.state.newDataTable)
            )
}
    render() {
        let val=this.props.val;
        return(

<div className='row p-2 rtl mt-3'>

    <div className='form-group col-6' style={{width:'300px'}}>
        <span className="pb-3"> انتخاب ماشین:</span>

        <select className="form-control" name={this.props.name}  onChange={this.updateValue} value={this.state.valiueDefult}>
        <option>انتخاب کنید...</option>
        {
            val.filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t.nameCar === thing.nameCar && t.nameCar === thing.nameCar
                ))
            ).map(valu=>
                <option key={valu.id} value={valu.nameCar}>{valu.nameCar}</option>
            )
        }
    </select>
    </div>
    <div className='form-group col-6' style={{width:'300px'}}>
       <span className="pb-2"> انتخاب ماموریت:</span>
    <select className="form-control " onChange={this.updateValuechng}>
        <option>انتخاب کنید...</option>
        {
            this.props.val.filter((val)=>val.nameCar==this.state.valiueDefult).filter((thing, index, self) =>
                index === self.findIndex((t) => (
                    t.mission === thing.mission && t.mission === thing.mission
                ))).map(valu=>
                <option key={valu.id} value={valu.mission}>{valu.mission}</option>
            )
        }
    </select>
    </div>
</div>
        )
    }

}