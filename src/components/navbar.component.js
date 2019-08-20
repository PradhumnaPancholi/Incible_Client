import React, {Component} from 'react';
import logo from "../incible-logo.png";
import {Link} from "react-router-dom"
import connect from "react-redux/es/connect/connect";
import {highlightNavigationItem} from "../redux/helper.functions";
import {Button} from "react-bootstrap/"

const NavItem = (props) => {
    return (<li className={`ml-1 pl-1 nav-item navi ${props.className} ${highlightNavigationItem(props.href,window.location.pathname) && 'nav-a'}`}>
        <Link to={props.href} className="nav-link">
            {props.children}
        </Link>
    </li>)
};

export const NavItemIcon = ({icon = ''}) => {
    return (
        <React.Fragment>
            <i className={`fas ${icon}`}/>&nbsp;{" "}
        </React.Fragment>
    )
  };

class NavigationBar extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        // if (nextProps.)
        return true;
    }

    render() {
        const {isLoggedIn, userProfile} = this.props;
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand" to="/">
                    <i class="fas fa-italic"></i>ncible
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                            aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarColor01">
                        <ul className="navbar-nav mr-auto">
                            {isLoggedIn && (
                                <NavItem href={"/incidents"}>
                                    <NavItemIcon icon={'fa-indent'} />
                                    Incidents
                                </NavItem>
                            )}
                            
                        </ul>
                        <ul className={"navbar-nav float-right"}>
                            {isLoggedIn && (
                                <div className="text-center" style={{padding:8}}>
                                    Hey! {userProfile.firstName}
                                </div>
                            )}
                            {isLoggedIn && (
                                <NavItem className={"float-right"} href={"/logout"}>
                                    <NavItemIcon icon={'fa-sign-out-alt'} />Logout
                                </NavItem>
                            )}
                            {!isLoggedIn && (
                                <NavItem className={"float-right pr-5"} href={"/login"}>
                                    <Button className="loginBtn">Login</Button>
                                </NavItem>
                            )}
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default connect((state => ({...state.user,...state.incident})), {})(NavigationBar);