import logo from "./logo.svg";
import myPic from "./mypic.JPG";
import "./App.css";
import app1 from "./app1.png";
import app2 from "./app2.png";
import ms1 from "./ms1.png";
import ms2 from "./ms2.png";
import dc1 from "./dc1.png";
import dc2 from "./dc2.png";
import { Tabs } from "antd";
import "bootstrap-icons/font/bootstrap-icons.css";
import { FaJava } from "react-icons/fa";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import ReactDOM from "react-dom";

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="navbar-brand ms-5" href="#">
          Khalid Gobin
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end me-5" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://www.linkedin.com/in/khalidgobin/">
                <i class="bi bi-linkedin"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://github.com/kgobin2000">
                <i class="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
function Intro() {
  return (
    <div class="intro bg-image row " id="intro">
      <div class="col text">
        Hi.
        <br />
        I'm Khalid
        <br />
        <span class="make-things">I make development simple.</span>
      </div>
    </div>
  );
}

function Projects() {
  const [modalShow, setModalShow] = React.useState(false);
  const [name, setName] = useState("");
  const [img1, setImg1] = useState(app1);
  const [img2, setImg2] = useState(app2);
  const [desc, setDesc] = useState("");
  console.log(name);
  const taxCalc = [
    "Tax Calculator (Android)",
    "This app assists the citizens of Guyana to calculate the import duty on their motor vehicles",
    app1,
    app2
  ];
  const soccerGame = ["Mini Soccer Game (Java)", "Play Mini Soccer, with this fun App created using Java Swing!", ms1, ms2];
  const decentraLease = [
    "Decentralease (Ethereum Blockchain App)",
    "This app tracks the lifecycle of a car from it's creation to it's scrapping using an Ethereum Blockchain network",
    dc1,
    dc2
  ];
  return (
    <div class="row projects h-50 p-1" id="projects">
      <div class="row  mb-3 mt-5 pro h-100 justify-content-center">
        <div class="col m-5 mybox" id="app">
          <Button
            id="mybut"
            onClick={() => {
              setModalShow(true);
              setName(taxCalc[0]);
              setDesc(taxCalc[1]);
              setImg1(taxCalc[2]);
              setImg2(taxCalc[3]);
            }}
          ></Button>
        </div>
        <div class="col bg-secondary m-5 mybox" id="ms">
          <Button
            id="mybut"
            onClick={() => {
              setModalShow(true);
              setName(soccerGame[0]);
              setDesc(soccerGame[1]);
              setImg1(soccerGame[2]);
              setImg2(soccerGame[3]);
            }}
          ></Button>
        </div>
        <div class="col bg-secondary m-5 mybox" id="dc">
          <Button
            id="mybut"
            onClick={() => {
              setModalShow(true);
              setName(decentraLease[0]);
              setDesc(decentraLease[1]);
              setImg1(decentraLease[2]);
              setImg2(decentraLease[3]);
            }}
          ></Button>
        </div>
      </div>

      <MyVerticallyCenteredModal name={name} desc={desc} show={modalShow} image1={img1} image2={img2} onHide={() => setModalShow(false)} />
    </div>
  );
}
function MyVerticallyCenteredModal(props) {
  console.log(props);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col">
            {" "}
            <p>{props.desc}</p>
          </div>
          <div className="col myImg overflow-scroll">
            {" "}
            <img src={props.image2} class="img-fluid" alt="" />
            <img src={props.image1} class="img-fluid" alt="" />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function Other() {
  return (
    <div class="row p-5 m-1 mybox3 justify-content-center">
      <div className=" row p-5 justify-content-center good ">I'm good at English, and even better at these:</div>
      <div class="row m-5">
        <div class="col m-1 bigbox">
          <div class=" mybox2">
            <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" />
          </div>
        </div>
        <div class="col m-1 bigbox">
          <div class=" mybox2">
            <img src="https://img.icons8.com/color/48/000000/c-programming.png" />
          </div>
        </div>
        <div class="col m-1 bigbox">
          <div class="mybox2 ">
            <img src="https://img.icons8.com/ios-filled/50/000000/javascript.png" />{" "}
          </div>
        </div>
      </div>
      <div class="row m-5">
        <div class="col m-1 bigbox">
          <div class="mybox2 ">
            <img src="https://img.icons8.com/ios/50/000000/solidity.png" />{" "}
          </div>
        </div>
        <div class="col m-1 bigbox">
          <div class="mybox2 ">
            <img src="https://img.icons8.com/material/48/000000/html-5.png" />
          </div>
        </div>
        <div class="col m-1 bigbox">
          <div class="mybox2 ">
            <img src="https://img.icons8.com/ios/50/000000/css.png" />
          </div>
        </div>
      </div>
      <div className="row m-5">
        <div className="col m-1 bigbox">
          <div className="mybox2 ">
            <a href="#intro">
              <img
                className=""
                src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-rocket-business-kiranshastry-lineal-color-kiranshastry.png"
              />
            </a>
          </div>
        </div>
      </div>
      <div className=" row p-5 justify-content-center reserved">All Rights Reserved 2022.</div>
    </div>
  );
}

function App() {
  return (
    <div className="App container-fluid">
      <NavBar />
      <Intro />
      <Projects />
      <Other />
    </div>
  );
}

export default App;
