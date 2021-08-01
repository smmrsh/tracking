import React, {Component} from 'react';
import './Tracing.css';
import * as FcIcons from 'react-icons/fc';
import {DetailsTable} from "./DetailsTable";
import Button from "./Button";

export class RowTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMap: false
        }
    }

    viewMap = (item) => {
        this.setState({viewMap: !this.state.viewMap}, () => this.props.viewMapFun(this.state, item))
    }

    render() {
        let item = this.props.data;

        return (
            <>
                <tr key={item.id}>
                    <td>
                        <div className="iconDetails" onClick={this.props.detailsCallback}><FcIcons.FcViewDetails/></div>
                    </td>

                    <td>{item.id}</td>
                    <td>{item.deviceDescription}</td>

                    { this.props.detailsClick=='a'?null:
                    <td>
                        <a href='#mapScrollSpy'>
                            <button type="button" className="btn btn-sm btn-outline-secondary text-light"
                                    onClick={() => this.viewMap(item)}>
                                نمایش روی نقشه
                            </button>
                        </a>

                    </td>}
                </tr>
                {this.props.details ? <tr>
                    <td colSpan="12"><DetailsTable subData={item.subData}/></td>
                </tr> : null}

            </>
        )
    }
}