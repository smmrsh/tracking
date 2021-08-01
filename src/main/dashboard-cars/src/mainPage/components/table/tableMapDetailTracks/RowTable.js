import React, {Component} from 'react';
import * as FcIcons from 'react-icons/fc';

export class RowTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMap: false
        }
    }

    viewMap = (item) => {
        this.setState({viewMap: !this.state.viewMap}, () => this.props.viewMapFun(this.state,item))
    }

    render() {
        let items = this.props.items;

        return (

        <>
            {console.log(this.props.viewMapFun)}

            <tr key={items.deviceId.id}>
                    <td>{items.trackId}</td>
                    <td>{items.deviceId.id}</td>
                    <td>{items.deviceId.id}</td>
                    <td>{items.deviceId.id}</td>
                    <td>{items.deviceId.id}</td>
                    <td>{items.deviceId.id}</td>
                    <td>{items.deviceId.id}</td>
                    <td>{items.deviceId.id}</td>


                </tr>
            <td>
                <button type="button" className="btn btn-sm btn-outline-secondary text-light"
                        onClick={() => this.viewMap(this.props.items)}>
                    پردازش
                </button>

            </td>
            </>
        )
    }
}