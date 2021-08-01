import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteVehicle } from "../../../../actions/actionVehicle/VehicleActions";

export class VehiclesDelete extends Component {

    deleteItems=()=>{
        this.props.ids.map(p=> this.props.deleteVehicle(p))

    }
  render() {

    return (
            <div className="card">
                {console.log(this.props.ids)}
                <div className="d-flex  pl-3">
                    <div className=" pl-2"><span className="name">مسافت پیموده شده</span>
                        <div><span className="cross"> </span>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between px-3 pt-4 pb-3"  onClick={this.cancel}>
                    <div><span className="back text-secondary ">انصراف</span></div>
                    <button  onClick={this.deleteItems} type="button" className="btn btn-danger button">حذف</button>
                </div>

            </div>

    );
  }
}

VehiclesDelete.propTypes = {
  vehicle: PropTypes.object.isRequired,
    deleteVehicle: PropTypes.func.isRequired
};

export default connect(null,{deleteVehicle})(VehiclesDelete)