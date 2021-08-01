import React,{Component} from 'react';
import {DetailsTableLeft} from "./DetailsTableLeft";
import {DetailsTableRight} from "../../../component/mainContent/tracing/DetailsTableRight";
export  class DetailsTable extends Component{
    render() {

        return(

              <div className=" d-flex justify-content-sm-center mainDetails" style={{background:'#f3f3f9'}}>
                 <div className="col-5 pl-2 bg-light m-2  ">
                     <DetailsTableRight/>
                 </div>

                 <div className="col-5 bg-light m-2">
                   <DetailsTableLeft expanded={this.props.expanded}/>
                 </div>
              </div>
        )
    }
}
