import React, {Component} from 'react';
import {Link} from "react-router-dom"
import image from "../incible-logo.png";
import connect from "react-redux/es/connect/connect";
import {loadUserTokenFromStorage, signIn} from "../redux/actions/users.action";
import {CenteredLogo} from "./centered.logo";

export class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    onChange = key => (e) => {
        console.warn(e,key);
        this.setState({[key] : e.target.value})
    };

    signIn = (e) => {
        e.preventDefault();
        const {email,password,firstName,lastName} = this.state;
        this.props.signInUser({email,password})
    };

    componentDidMount() {
        loadUserTokenFromStorage();
        if (this.props.isLoggedIn) {
            this.props.history.push("/incidents");
        }
    }

    componentWillReceiveProps(nextProps) {
        loadUserTokenFromStorage();
        if (nextProps.isLoggedIn) {
            nextProps.history.push("/incidents");
        }
    }

    render() {

        const {email, password} = this.state;

        return (
            <div className="mh-100">
                <div className="" style={{minHeight:'93vh'}}>
                    <div className="login">
                        <div className="d-flex justify-content-center h-90">
                            <div className="card  h-70">
                                <div className="card-header">
                                    <h3 className="t-b text-center">Sign In</h3>
                                </div>
                                <div className="card-body ">
                                    <form>

                                        <div className="form-group">
                                            <label htmlFor="si-username" className="w-100 t-b text-left">Email</label>
                                            <input id="si-username" type="text" className="form-control" placeholder="email         " value={email} onChange={this.onChange('email')} />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="si-password" className="w-100 t-b text-left">Password</label>
                                            <input id={"si-password"} type="password" className="form-control" placeholder="password" value={password} onChange={this.onChange('password')} />
                                        </div>
                                        <div className="text-center login-btn-container">
                                            <button className="btn text-center login-btn" onClick={this.signIn}>
                                                Login 
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-center">
                                        <a href="#">Forgot your password?</a>
                                    </div>
                                    <div className="d-flex justify-content-center links">
                                        Don't have an account?
                                        <Link to="/signup">&nbsp;Sign Up</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect((state => ({...state.user,...state.incident})), {signInUser: signIn, loadUser: loadUserTokenFromStorage})(SignIn);