import React, {Component} from 'react';
import NavigationBar from "./navbar.component";
import { Modal, Button } from "react-bootstrap";
import {connect} from 'react-redux';
import {getIncidentDetails} from "../redux/actions/incidents.action";

//this component is meant to display details of selected incident//
class IncidentItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: "",
            status: "",
            description: ""
        }
    }
    componentDidMount(){
        this.getIncidentData()
    }

    componentWillReceiveProps(next){
        const foundIncident = this.props.foundIncident
        console.log(foundIncident)

        if(foundIncident){
            this.setState({title: foundIncident.title});
            this.setState({description: foundIncident.description});
            this.setState({status: foundIncident.status});
            this.setState({incidentID: foundIncident._id});
        }
    }

    getIncidentData = () => {
        const{id} = this.props.match.params;
        this.props.getIncidentDetails(id);
        const {foundIncident} = this.props;
        if(foundIncident){
            console.log(foundIncident.id);
            console.log("this is from getdata");
            this.setState({
                title: foundIncident.title,
                status: foundIncident.status,
                description: foundIncident.description
            })
            console.log(this.state)
        }
    }

    redirectHandler = () => {
        this.props.history.push("/incidents")
    }

    render(){
        
        return(
            <div>
                <div className="container">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Incident Detail</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Title: {this.state.title}</p>
                            <p>Status: {this.state.status}</p>
                            <p>Description: {this.state.description}</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <button className= "btn btn-secondary incident-close-btn"onClick={this.redirectHandler}>Close</button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </div>
        )
    }
}

export default connect((state => state.incident), {getIncidentDetails}) (IncidentItem);
