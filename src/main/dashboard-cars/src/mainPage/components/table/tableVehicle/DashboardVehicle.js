import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllVehicle ,deleteVehicle} from "../../../../actions/actionVehicle/VehicleActions";
import PropTypes from "prop-types";
import RowTable from "./RowTable";
import VehicleAdd from "./VehicleAdds";
import '../TableDisplay.css'
import {Fontcolor} from "../../../../Config";
class DashboardVehicle extends Component {
  arrayV=[];
  constructor(props) {
    super(props);
    this.state={
      vehicles:[],
      stateDelete:false,
      openAddVehicleStatus:false,deletStatus:false
    }
  }
  componentDidMount() {
    this.props.getAllVehicle();
  }
  componentWillReceiveProps() {
    if (this.state.deletStatus){
      this.props.getAllVehicle();
      this.setState({deletStatus:false})
    }
  }

  deleteItems=(a)=>{
    this.props.deleteVehicle(a);
this.setState({deletStatus:true})
  }
  openAddVehicle=(e)=>{
    this.setState({openAddVehicleStatus:e})
  }
  render() {
    const { vehicles } = this.props;
    return (
      <React.Fragment>
        <div className={`table-responsive bg-dark tableHeight`} >
          <div className="row mr-5 pt-2">
            <div className="p-3 ">
              <h5 className="  " style={{color: Fontcolor}}> خودرو ها</h5>
            </div>
          </div>
          <div  className='row ab pt-3 pl-3'>
            <button className='btn btn-danger m-2' onClick={()=>{this.deleteItems(this.arrayV)}} >حذف</button>
            <button className='btn btn-outline-primary m-2 text-white' onClick={()=>this.openAddVehicle(true)}>ایجاد </button>
          </div>
          <table className="table rtl w-100 table-striped table-dark table-hover mt-3 ">
            <thead className="align-content-center">
            <tr className="yekan">
              <th>
                <div className="form-group form-check  pl-3">
                  <input type="checkbox" className="form-check-input" />
                </div>
              </th>
              <th>پلاک خودرو</th>
              <th> راننده</th>
              <th>کد دستگاه</th>
              <th>متوسط سرعت</th>
            </tr>
            </thead>

            <tbody>
            {vehicles.map(p=> <RowTable data={p} key={p.id}  arrV={this.arrayV} />  )}
            </tbody>
          </table>
        </div>
        {this.state.openAddVehicleStatus?<VehicleAdd openAddVehicle={this.openAddVehicle}/>:null}
      </React.Fragment>
    );
  }
}

DashboardVehicle.propTypes = {
  getAllVehicle: PropTypes.func.isRequired,
  vehicles: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  vehicles: state.vehicle.vehicles
});

export default connect(
  mapStateToProps,
  { getAllVehicle ,deleteVehicle}
)(DashboardVehicle);
