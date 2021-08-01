import './Navigation.css';
import * as Io5Icons from 'react-icons/io5';
import * as FaIcons from 'react-icons/fa';
import * as BiIcons from 'react-icons/bi';
import * as HiIcons from 'react-icons/hi';


import React,{Component} from 'react';
export  class Navigation extends Component{
    render() {
        return(
            <div className="d-flex  nav" >
                <div className=" mr-auto " style={{    width:'20%' }}>
                    <div className="d-flex">
                        <span className='pl-3'>خروج</span>
                        <button className="btn header-item noti-icon waves-effect " aria-expanded="false">
                            <span className="badge bg-danger  rounded-pill text-white ">3</span>
                            <FaIcons.FaRegBell/>
                        </button>
                        <span className='pr-2'>  محمدی</span>
                        <span ><Io5Icons.IoPersonSharp/></span>
                    </div>
                </div>
                <div className=" " style={{    width:'30%' }}>
                    <div className="d-flex rtl">
                        <span className="pl-5"><HiIcons.HiOutlineMenu/></span>
                        <form className="app-search d-none d-lg-block">
                            <div className="position-relative ">
                                <input type="text" className="form-control rtl" placeholder="جستجو ... "/>
                                <span><BiIcons.BiSearchAlt/></span>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        )
    }
}
