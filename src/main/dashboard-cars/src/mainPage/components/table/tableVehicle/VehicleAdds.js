import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addVehicle } from "../../../../actions/actionVehicle/VehicleActions";
import {Fontcolor} from "../../../../Config";
class VehicleAdds extends Component {
    state = {
        vehicleTag: "",
        currentDriver: "",
        currentDevice: "",
        MaxSpeed: 0,
        vehicleActive:false,

    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        const { vehicleTag, currentDriver, currentDevice,MaxSpeed ,vehicleActive} = this.state;
        const newVehicle = {
            vehicleTag,
            currentDriver,
            currentDevice,
            MaxSpeed ,vehicleActive
        };

        this.props.addVehicle( newVehicle );
        this.props.openAddVehicle(false)
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.errors !== prevState.errors) {
            return { errors: nextProps.errors };
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className=" mb-3 formsStyle">
                <div className="row mr-5">
                    <div className="p-3 ">
                        <h5 className="mb-3  " style={{color: Fontcolor}}>تعریف خودرو جدید</h5>
                    </div>
                </div>
                <div className="row border border-secondary p-5 rounded">
                    <form onSubmit={this.onSubmit} className="form-horizontal">
                        <div className="form-group">
                            <label htmlFor="driverName" style={{color: Fontcolor}}>پلاک خودرو</label>
                            <input
                                type="text"
                                name="vehicleTag"
                                value={this.state.vehicleTag}
                                className="form-control form-control-lg"
                                onChange={this.onChange}
                            />

                        </div>
                        <div className="form-group">
                            <label htmlFor="driverFamily" style={{color: Fontcolor}}>نام راننده</label>
                            <input
                                type="text"
                                name="currentDriver"
                                value={this.state.currentDriver}
                                className="form-control form-control-lg"
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="driverPersonalCode" style={{color: Fontcolor}}> دستگاه</label>
                            <input
                                type="text"
                                name="currentDevice"
                                value={this.state.currentDevice}
                                className="form-control form-control-lg"
                                onChange={this.onChange}
                            />
                        </div>
                        <input
                            type="submit"
                            value="ثبت"
                            className="bg-primary btn  btn-outline-secondary text-white w-50 mt-3 "
                        />
                        <input
                            type="button"
                            value="انصراف"
                            className="bg-primary btn  btn-outline-secondary text-white w-50 mt-3"
                            onClick={()=>this.props.openAddVehicle(false)}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

VehicleAdds.propTypes = {
    addVehicle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
});

export default connect(
    mapStateToProps,
    { addVehicle }
)(VehicleAdds);