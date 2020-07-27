import React, {useState} from 'react';
import LoginModal from './ModalSupport';
const Navigator = () => {
  return (
    <div>
      <nav className="navbar navbar-light navbar-expand-sm fixed-top" style={{paddingBottom: "0px"}}>
        <div className="container logocontainer">
          <a href="./redoIndex.html"><img src={require("./gifnewlogo.gif")} height="40px" width="160px" id="logoimg"
                                          style={{paddingRight: "20px"}} alt="logo new gif"/></a>
          <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#Navbar">
            <span id="toggler" className="navbar-toggler-icon newbutton"></span>
          </button>

          <div className="collapse navbar-collapse" id="Navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item"><a className="nav-link" href="./weather.html"><span
                className="fa fa-home fa-lg"></span> Home</a></li>
              <li className="nav-item"><a className="nav-link" href="./aboutus.html"><span
                className="fa fa-info fa-lg"></span> About</a></li>
              <li className="nav-item"><a className="nav-link" href="#"><span
                className="fa fa-list fa-lg"></span> Menu</a>
              </li>
              <li className="nav-item"><a className="nav-link" href="./contactus.html"><span
                className="fa fa-address-card fa-lg"></span> Contact</a></li>
              <li className="nav-item active"><a className="nav-link" href="weather.html"><span
                className="fa fa-sun-o fa-lg"></span> Weather</a></li>
            </ul>
            <span className="navbar-text">
                            <a data-toggle="modal" data-target="#loginModal">
                                 <LoginModal/>
                            </a>
                        </span>
          </div>
        </div>
      </nav>
    </div>

  );
};
export default Navigator();