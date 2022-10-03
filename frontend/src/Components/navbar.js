import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function Navbar() {
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
var formType = "login";
const changeForm = () => {
    formType = "register"
}

var formType = "login";
    return (
        <div>
<div className="modal fade" id="exampleModalReset" tabindex="-1" aria-labelledby="exampleModalLabelReset" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabelReset"> Register</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form action="https://utility-gvlbfn7fea-el.a.run.app/register" method="post" oninput='confirm_password.setCustomValidity(confirm_password.value != password.value ? "Passwords do not match." : "")' >
          <div class="mb-3">
                <label for="exampleInputEmail1Login" class="form-label">First Name</label>
                <input type="text" class="form-control" name="first_name" id="first_name"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1Login" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="last_name" name ="last_name"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1Login" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1Login" name ="email"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1Login" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1Login" name ="password"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1Login" class="form-label">Confirm Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1Login" name ="confirm_password"/>
            </div>
            <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn btn-primary" type="submit">Register</button>
          </div>
          </form>
        </div>
      </div>
    </div>
  </div>


<div class="modal fade" id="exampleModalLogin" tabindex="-1" aria-labelledby="exampleModalLabelLogin" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabelLogin"> Login </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
<form action="/login" method="post">
  <div class="mb-3">
    <label for="exampleInputEmail1Login" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1Login" name ="email"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1Login" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1Login" name ="password"/>
  </div>
  <div class="d-grid gap-2 col-6 mx-auto">
  <Button class="btn btn-primary" type="submit">Login</Button>
  <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#exampleModalReset">Register</button>
</div>
</form>
      </div>
    </div>
  </div>
</div>

            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid">
            <a class="navbar-brand" href="javascript:void(0)">SimulAny</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
            </ul>
            <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModalLogin">
              Login
            </button>
    </div>
  </div>
</nav>
        </div>
    );
}
 export default Navbar;