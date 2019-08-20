import React from 'react';
import NavigationBar from "./navbar.component";
import {Link} from "react-router-dom";
import {Jumbotron, Button, Card} from "react-bootstrap";
import Footer from "./footer.component";
 
export const Feature = ({imgSource='',title}) => {
  return (
      <div className="border rounded p-3">
          <img src={imgSource} alt="" className="img-thumbnail"/>
          <h3 className="t-b">{title}</h3>
      </div>
  )
};

export const LandingPage = () => {
    return (
        <div>
            <Jumbotron fluid className="mb-0">
                <h1 className="t-b mb-1 text-center jumbotron-text">Welcome to Incible!</h1>
                <h4 className="text-center jumbotron-text">
                    Incident management made easy. <br/>
                </h4>
                <h5 className='t-b mt-3 m-2 text-center jumbotron-text'>
                    Incible is made for every member of your team to plan, track, and organize tasks for your project.
                </h5>
                <div className="text-center mb-2 signup-btn">
                    <Link to="/signup">
                        <Button variant="primary">Join Now</Button>
                    </Link>
                </div>
                
            </Jumbotron>
            <div className="container">
                <div className="t-b text-center p-3 reasons-tag">
                    <h2>Why Incible?</h2>
                </div>
                <div className="row">

                    <Card className= "feature-card">
                        <div className="card-block">
                            <i class="fas fa-award"></i>
                        </div>
                        <Card.Body>
                            <Card.Title className="t-b">Trusted</Card.Title>
                            <Card.Text>
                            Incible is built with keeping relaibilty and trust in mind. So, that
                            you can use all your focus towards your customers. 
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className= "feature-card">
                        <div className="card-block">
                            <i class="fas fa-bug"></i>
                        </div>
                        <Card.Body>
                            <Card.Title className="t-b">Bug-Free</Card.Title>
                            <Card.Text>
                            At incible, we keep testing our software to provide you a seemless and bug -free
                            experience.  
                            </Card.Text>
                        </Card.Body>
                    </Card>

                    <Card className= "feature-card">
                        <div className="card-block">
                            <i class="fas fa-chart-line"></i>
                        </div>
                        <Card.Body>
                            <Card.Title className="t-b">Producitvity</Card.Title>
                            <Card.Text>
                            Made for productivity, we try our best to make your workflow as seemless as possible. 
                            So, all you can use all of your attention towards your customers instead of learning to use a software.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
};
