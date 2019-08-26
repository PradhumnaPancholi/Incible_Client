import React, {Component} from 'react';
import {Link} from "react-router-dom";
import NavigationBar, {NavItemIcon} from "./navbar.component";
import connect from "react-redux/es/connect/connect";
import {getIncidents, getUserProfile, loadUserTokenFromStorage, signIn} from "../redux/actions/users.action";
import {Container,Tabs,Tab,Dropdown} from 'react-bootstrap';
import IncidentForm from "../components/incidentsForm.component";
import {changeFilter, deleteIncident} from "../redux/actions/incidents.action";
import {IncidentListItem} from "./incident.list.item";
import {IncidentListType} from "./incident.list.type";
import {IncidentFilter} from "./incident.filter";
import {IncidentTable} from "./incident.table";
import IncidentEditForm from "./incidentEditForm.component"
import Footer from "./footer.component";

class IncidentsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displayType: "List"
        }
    }

    changeDisplayType = type => e => {
       this.setState({displayType: type});
    };

    componentDidMount() {
        const {isLoggedIn,getIncidents,getUserProfile,loadUserTokenFromStorage} = this.props;
        // loadUserTokenFromStorage();
        setTimeout(() => {
            if (!isLoggedIn) {
                this.props.history.push("/login");
            } else {
                getIncidents();
                getUserProfile();
            }
        }, 300);
    }

    componentWillReceiveProps(nextProps) {
        const {isLoggedIn} = nextProps;
        if (!isLoggedIn) {
            nextProps.history.push("/login");
        }
    }


    onDeletePressed = (id) => (e) => {
        this.props.deleteIncident(id)
    };

    onFilterChange = (key) => value => {
        this.props.changeFilter({[key]:value.trim()})
    };

    render() {
        const {incidents = [], incident, filter, isLoggedIn} = this.props;
        const {displayType} = this.state;
        return (
            <React.Fragment>
                <Container>
                    <h1 className="t-b pt-3 pb-3 incident-heading">Incidents</h1>
                    <Tabs defaultActiveKey="profile"
                          // activeKey={}
                        >
                    <Tab eventKey="profile"
                                  title={<div className="t-b"><NavItemIcon icon={"fa-list"}/>All incidents</div>}
                        >
                            <div className="mt-4"/>
                            <div className="row">
                                <div className="col-6">
                                    <IncidentFilter
                                        onChangeOption={this.onFilterChange("status")}
                                        selected={filter.status}
                                    />
                                </div>
                                <div className="d-flex justify-content-end col-6">
                                    <IncidentListType
                                        displayType={displayType}
                                        onTypeChange={this.changeDisplayType} />
                                </div>
                            </div>

                            {incidents.map(r => {
                                if (displayType === "Detailed") {
                                    return <IncidentListItem
                                        incident={r}
                                        key={r._id}
                                        deleteHandler={this.onDeletePressed(r._id)}
                                    />
                                } else {
                                    return null
                                }
                            })}

                            {displayType === "List" &&
                                <IncidentTable incidents={incidents} deleteHandler={this.onDeletePressed} />
                            }

                        </Tab>
                        <Tab eventKey="home"
                             title={<div className="t-b"><NavItemIcon icon={"fa-plus"}/>Create new</div>}
                        >
                            <IncidentForm />
                        </Tab>
                    </Tabs>
                </Container>
                <div className="mb-5"></div>
            </React.Fragment>
        );
    }
}

export default connect((state => ({...state.incident,...state.user})), {
    getIncidents, deleteIncident, getUserProfile, changeFilter,
    loadUserTokenFromStorage
})(IncidentsList);