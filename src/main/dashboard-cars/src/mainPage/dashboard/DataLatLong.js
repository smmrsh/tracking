import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllCapabilities } from "../../actions/CapabilityActions";
import PropTypes from "prop-types";
import {Capability} from "../../components/CapabilityTool/Capability";
import AddButton from "../../components/CapabilityTool/AddButton";

class DataLatLong extends Component {
  componentDidMount() {
    this.props.getAllCapabilities();
  }

  render() {
    const { capabilities } = this.props;
    return (
        <React.Fragment>
          <AddButton />
          {capabilities.map(capability => (
              <Capability key={capability.id} capability={capability} />
          ))}
        </React.Fragment>
    );
  }
}

DataLatLong.propTypes = {
  getAllCapabilities: PropTypes.func.isRequired,
  capabilities: PropTypes.array.isRequired

};

const mapStateToProps = state => ({
  capabilities: state.capability.capabilities
});

export default connect(
    mapStateToProps,
    { getAllCapabilities }
)(DataLatLong);