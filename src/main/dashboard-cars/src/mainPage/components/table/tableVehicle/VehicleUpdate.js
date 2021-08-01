import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
    getVehicleById,
    updateVehicle
} from "../../../../actions/actionVehicle/VehicleActions";
import {Fontcolor} from "../../../../Config";

 class VehicleUpdate extends Component {
    state = {
        id: "",
        vehicleTag: "",
        currentDriver: "",
        currentDevice: "",
        MaxSpeed: 0,
        vehicleActive:false,
        errors: {}
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    componentWillMount() {
        this.props.getVehicleById(this.props.id);
        const {
            id,
            vehicleTag, currentDriver, currentDevice,MaxSpeed ,vehicleActive
        } = this.props.data;

        this.setState({
            id: id,
            vehicleTag: vehicleTag,
            currentDriver: currentDriver,
            currentDevice: currentDevice,
            MaxSpeed: MaxSpeed,
            vehicleActive:vehicleActive,
            errors: {}
        });
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }

        const {
            id,
            vehicleTag, currentDriver, currentDevice,MaxSpeed ,vehicleActive
        } = this.props.data;

        this.setState({
            id: id,
            vehicleTag: vehicleTag,
            currentDriver: currentDriver,
            currentDevice: currentDevice,
            MaxSpeed: MaxSpeed,
            vehicleActive:vehicleActive,
            errors: {}
        });
    }

    onSubmit = e => {
        e.preventDefault();
        const {
            id,
            vehicleTag, currentDriver, currentDevice,MaxSpeed ,vehicleActive
        } = this.state;

        const updatedVehicle = {
            vehicleTag, currentDriver, currentDevice,MaxSpeed ,vehicleActive
        };

        this.props.updateVehicle(
          id, updatedVehicle

        );
        this.props.openUpdatePage(false)
    };

    render() {
        const { errors } = this.state;
        console.log("techStack: " + this.state.vehicleTag);
        console.log("techStack: " + this.props.data);

        return (
            <div className=" mb-3 formsStyle">
                <div className="row mr-5">
                    <div className="p-3 ">
                        <h5 className="mb-3  " style={{color: Fontcolor}}>ویرایش خودرو جدید</h5>
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
                            value="ویرایش"
                            className="bg-primary btn  btn-outline-secondary text-white w-50 mt-3 "
                        />
                        <input
                            type="button"
                            value="انصراف"
                            className="bg-primary btn  btn-outline-secondary text-white w-50 mt-3"
                            onClick={()=>this.props.openUpdatePage(false)}
                        />
                    </form>
                </div>
            </div>
        );
    }
}

VehicleUpdate.propTypes = {
    getVehicleById: PropTypes.func.isRequired,
    updateVehicle: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    vehicle: state.vehicle.vehicle,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getVehicleById, updateVehicle }
)(VehicleUpdate);