import React, { Component } from "react";
import { Link } from "react-router-dom";
import UploadFiles from "./UploadFiles";

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="light-overlay landing-inner text-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Introduction To HATEOAS</h1>
                  <UploadFiles/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
