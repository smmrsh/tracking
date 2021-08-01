import './Sidebar.css';
import React,{Component} from 'react';
import {Link} from "react-router-dom";
export  class SubMenu1 extends Component{
    constructor(props) {
        super(props);
        this.state={
            navbar:false,
            classActive:''
        }
    }
    showSubtitle=()=>{
    this.setState({navbar:!this.state.navbar,classActive:'text-white'})

    }
    render() {

        return(
            <>
               <Link  to={this.props.item.path} onClick={this.showSubtitle} className={this.state.navbar?this.state.classActive:null}>
                   {this.props.item.icon}
                 <span className="spanTitle ">{this.props.item.title}</span>
                   <div className='iconsLink'>{this.props.item.subNave && this.state.navbar
                            ?this.props.item.iconOpen:
                            this.props.item.subNave
                                ?this.props.item.iconClose:null
                  }</div>
               </Link>
                {
                  this.state.navbar&&this.props.item.subNave?this.props.item.subNave.map((itm,index)=>{
                        return(
                            <div className=" subnav ">
                        <Link to={itm.path} key={itm.id}>
                            {itm.icon}
                            <span className="spanTitle">{itm.title}</span>
                        </Link>
                                </div>
                        )
                    })
                        :null

                }
        </>
                )
    }
}
