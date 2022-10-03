import React, { } from 'react';
import '../index.css';
import Navbar from './navbar';
import Footbar from './footer';
import { Card } from 'react-bootstrap';

const Home = () => {

  return (
        <><Navbar />
        <div style={{padding:10}}>
        <Card style={{"width":"100%", padding:10}} > 
            Hello, User!
            <br/>
            <center>
            <div style={{"width":"50%"}} className="row">
                <Card  className="col"  style={{margin:10, padding:20, "width":"50%"}}>
                <div class="w-100 hover-shadow" data-mdb-ripple-color="light" style={{margin:"10px" , "borderColor": "white","width": "45%"}}><span class="align-middle">Experiment</span></div>
                <button style={{"margin":1}} type="button" class="btn btn-secondary" data-bs-toggle="modal">
                    My Labs
                </button>
                </Card>
                <Card className="col"  style={{margin:10, padding:20, "width":"50%"}}>
                <div class="w-100 hover-shadow" data-mdb-ripple-color="light" style={{margin:"10px" , "borderColor": "white","width": "45%"}}><span class="align-middle">Classroom</span></div>
                <button style={{"margin":1}} type="button" class="btn btn-secondary" data-bs-toggle="modal">
                    My Classes
                </button>
                <button style={{"margin":1}} type="button" class="btn btn-secondary" data-bs-toggle="modal">
                    Hosted Classes
                </button>
                <button style={{"margin":1}} type="button" class="btn btn-secondary" data-bs-toggle="modal">
                    Join
                </button>
                <button style={{"margin":1}} type="button" class="btn btn-secondary" data-bs-toggle="modal">
                    Host
                </button>   
                </Card>            
            </div>
            <div style={{"width":"50%"}} className="row">
                <Card className="col"  style={{margin:10, padding:20, "width":"50%"}}>
                <div  class="w-100 hover-shadow" data-mdb-ripple-color="light" style={{margin:"10px" , "borderColor": "white","width": "45%"}}><span class="align-middle">Market</span></div>
                <button style={{"margin":1}} type="button" class="btn btn-secondary" data-bs-toggle="modal">
                    Scenario
                </button> 
                <button style={{"margin":1}} type="button" class="btn btn-secondary" data-bs-toggle="modal">
                    Assets/Actions
                </button> 
                </Card>
                <Card className="col"  style={{margin:10, padding:20, "width":"50%"}}>
                <div class="w-100 hover-shadow" data-mdb-ripple-color="light" style={{margin:"10px" , "borderColor": "white","width": "45%"}}><span class="align-middle">Development</span></div>
                <button style={{"margin":1}} type="button" class="btn btn-secondary" data-bs-toggle="modal">
                    Scenarios
                </button> 
                <button style={{"margin":1}} type="button" class="btn btn-secondary" data-bs-toggle="modal">
                    Assets
                </button> 
                <button style={{"margin":1}} type="button" class="btn btn-secondary" data-bs-toggle="modal">
                    Actions
                </button> 
                </Card>            
            </div>
            </center>
        </Card>

        </div>
        
        <Footbar /></>
    )
};

export default Home 