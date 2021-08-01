import React, {Component} from 'react';
import {SidbarMenu} from "./SidbarMenu";
import {SidebarData} from "./SidebarData";

export class Sidebar extends Component {
    render() {
        return (
            <nav id="sidebarMenu"
                 className={`col-md-3 col-lg-2  d-md-block p-0  sidebar collapse ${this.props.clickNavTggle ? 'show' : 'none'}`}>
                <div className="p-0 ">
                    <ul className="nav flex-column ">
                        {SidebarData.map((i) => {
                            return <SidbarMenu item={i}/>
                        })}


                    </ul>

                </div>
            </nav>
        )
    }
}
