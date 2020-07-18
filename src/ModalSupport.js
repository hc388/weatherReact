import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import NewUserModal from './NewUserModal'



function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button data-dismiss= "modal" className="fa fa-sign-in btn btn-primary-outline" style={{backgroundColor: "transparent",
        border: "none", color: "#000"}}  onClick={handleShow}>
        Login
      </Button>

      <Modal size = "lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <Modal.Body>
          <form>
            <div className="form-row">
              <div className="form-group col-sm-4">
                <label className="sr-only" htmlFor="exampleInputEmail3">Email address</label>
                <input type="email" className="form-control form-control-sm mr-1"
                       id="exampleInputEmail3"
                       placeholder="Enter email"/>
              </div>
              <div className="form-group col-sm-4">
                <label className="sr-only" htmlFor="exampleInputPassword3">Password</label>
                <input type="password" className="form-control form-control-sm mr-1"
                       id="exampleInputPassword3"
                       placeholder="Password"/>
              </div>
              <div className="col-sm-auto">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox"/>
                  <label className="form-check-label"> Remember me


                  </label>

                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className={"loginFooter"} >
          <span className={"helpmeplease"} style={{color: "#666666"}}>Not a member? <span>  <NewUserModal/></span></span>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}
export default LoginModal;