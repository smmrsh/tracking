import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
export class SidBarToggleLink extends Component {
    render() {
        return <Route path={ this.props.to }
                      children={ routeProps => {
                          const baseClasses = this.props.className || " nav-link";
                          const activeClass =  "sidebarActive";
                          const inActiveClass = this.props.inActiveClass || " nav-link"
                          const combinedClasses =
                              `${baseClasses} ${routeProps.match ? activeClass : inActiveClass}`
                          return <Link to={ this.props.to } className={ combinedClasses } onClick={this.props.showSubtitle}>
                              { this.props.children }
                          </Link>
                      }} />
    }
}