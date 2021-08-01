import react,{Component} from 'react';
import '../MainPage.css';
import * as BiIcons from "react-icons/bi";
import {TableData} from "../components/table/TableData";
import MapDirection from "../components/map/MapDirection";
import DisplayDivTblTracing from "../components/table/tableTracing/DisplayDivTblTracing";

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableData: TableData,
            iconMapStates: false,
        }
    }

    //  componentDidMount() {
    //     axios.get('http://roocket.org/api/products')
    //         .then(response=>{this.setState({tableData:response.data.data.data})})
    //         .catch(error=>{console.log(error)})
    //}
    iconMapChng = () => {
        this.setState({iconMapStates: !this.state.iconMapStates})
    }

    selectMaps = (e) => {
        this.setState({tableData: e})
    }

    render() {
        return (
            <>

                <div
                    className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2  border-bottom">
                    <h5 className="h5 text-light">داشبورد مدیریت</h5>
                </div>

                <div className='flex-row-reverse d-flex'>
                    <span className="icconMaps" onClick={this.iconMapChng}>{this.state.iconMapStates ?
                        <BiIcons.BiMessageSquareAdd/> : <BiIcons.BiMessageSquareMinus/>}</span>

                    {<MapDirection dataMap={this.state.tableData}/>}

                </div>
            </>
        )
    }
}