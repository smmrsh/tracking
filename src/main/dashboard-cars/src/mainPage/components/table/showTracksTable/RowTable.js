import React, {Component} from 'react';

export default class RowTable extends Component {
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

        let data = this.props.data;
        return (
            <>
                <tr key={data.deviceId.id}>
                    <td>{data.trackId}</td>
                    <td>{data.trackId}</td>
                    <td>{data.trackId}</td>
                    <td>{data.trackId}</td>
                    <td>{data.trackId}</td>
                    <td>{data.trackId}</td>
                    <td>{data.trackId}</td>

                    <td>{data.deviceId.deviceDescription}</td>
                    { this.props.detailsClick=='a'?null:
                        <td>
                            <button type="button" className="btn btn-sm btn-outline-secondary text-light"
                                    onClick={() => this.viewMap(this.props.data)}>
                پردازش
                            </button>

                        </td>}
                </tr>

            </>
        )
    }
}
