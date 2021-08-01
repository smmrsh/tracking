import react, {Component} from 'react';
import {TableData} from "./table/TableData";
import '../MainPage.css';
import {Link} from "react-router-dom";

export class Notification extends Component {
    closeNotif = () => {
        this.props.notifOff(false)
    }

    render() {
        return (
            <div className='bg-light position-absolute notification overflow-auto rounded p-0 pt-3'>
                <ul className="list-group list-group-flush bg-light p-0 ">
                    {TableData.map(p => {
                        return <li className='liNotif'>
                            <Link onClick={this.closeNotif} to={`/missionShow/${p.id}`}
                                  className="list-group-item"> {p.nameCar}</Link></li>
                    })}


                </ul>
            </div>
        )
    }
}

