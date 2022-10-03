import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/navbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Footbar from './Components/footer';


function App() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
  return (
    <div className="App">
      <Navbar/>

      <Footbar/>
    </div>
  );
}

export default App;
