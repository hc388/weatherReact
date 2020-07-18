import React, {useState} from 'react';
import {Button, Modal} from "react-bootstrap";
import LoginModal from './ModalSupport'

const NewUserModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button data-dismiss= "modal" className=" btn btn-primary-outline" style={{backgroundColor: "transparent",
        border: "none", color: "#666666", margin: "0", padding: "0"}}  onClick={handleShow}>
        <a href={"#"} style= {{color: "#666666"}}>Sign up now! </a>
      </Button>

      <Modal size = "lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp</Modal.Title>
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
          <span className={"helpmeplease"} style={{float: "left"}}>Already a member?<span><LoginModal/></span></span>
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
export default NewUserModal;