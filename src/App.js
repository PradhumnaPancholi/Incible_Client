import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import './styles/style.css'
import { Provider } from "react-redux";
import {LandingPage} from "./components/landing.page.component";
import SignIn from "./components/signin.component";
import SignUp from "./components/signup.component";
import store from "./redux/store";
import IncidentsList from "./components/incidents.list";
import connect from "react-redux/es/connect/connect";
import Logout from "./components/logout.component";
import {getUserProfile, loadUserTokenFromStorage} from "./redux/actions/users.action";
import UserList from "./components/users.list";
import IncidentItem from "./components/incident.item";
import IncidentEditForm from "./components/incidentEditForm.component";
import NavigationBar from "./components/navbar.component";

class AppI extends React.Component {

    componentDidMount() {
        this.props.loadUser();
        this.props.getUserProfile();
        console.log(process.env.NODE_ENV);
    }

    render() {
        return (
            <div className="App">

                <Route path="/" component={NavigationBar} />

                <Route path="/" exact component={LandingPage} />
                <Route path="/login/" component={SignIn} />
                <Route path="/logout" component={Logout} />
                <Route path="/signup/" component={SignUp} />


                <Route path="/incidents/" exact component={IncidentsList} />

                <Route path="/incident/:id/details" component={IncidentItem} />
                <Route path="/incident/:id/edit" exact component={IncidentEditForm} />

                <Route path="/users" exact component={UserList} />
                <Route path="/users/:page" component={UserList} />
            </div>
        );
    }
}

export const App = connect((state => state), {loadUser: loadUserTokenFromStorage, getUserProfile})(AppI);

const routedApp = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>

);

export default routedApp;
