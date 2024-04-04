import React from "react";
import "../Stylesheets/About.css";
import { Card, Button } from "react-bootstrap";
import calculate from "../assets/Images/calculate.jpg";
import tax from "../assets/Images/tax.jpg"

const About = ({name}) => {
  return (
    <div className="About-container">
      <h3 id="About-heading" >About {name}</h3>
      <h5 className="About-sub-heading" >What is {name}?</h5>
      <p className="About-para" >
        Incididunt voluptate nostrud aute nostrud aute mollit cupidatat magna ad
        enim. Velit do exercitation incididunt quis reprehenderit anim in
        commodo sunt est incididunt. Mollit exercitation veniam labore nisi
        proident dolore. Nulla incididunt ipsum ut occaecat veniam consectetur
        irure deserunt aliqua amet duis consequat excepteur ea. Ad deserunt
        officia sit sit proident labore aute consequat commodo consequat
        proident minim excepteur. Quis ad dolor proident magna duis ullamco id
        amet tempor laborum dolore exercitation proident sint.
      </p>
      <hr />
      <h5 className="About-sub-heading" >Exercitation enim ullamco</h5>
      <p className="About-para">
        Amet fugiat anim laborum ea est minim officia amet magna officia culpa
        culpa. Do proident deserunt Lorem pariatur anim amet do duis mollit
        minim aliqua id. Ipsum tempor ullamco velit elit pariatur non ex ullamco
        aliqua est. Incididunt et elit irure velit aliquip in consectetur
        laboris adipisicing. Voluptate ipsum velit anim cillum ad. Pariatur sint
        cupidatat voluptate Lorem mollit ea excepteur ex veniam aute. Incididunt
        quis ullamco cillum sint occaecat nisi id enim ea eiusmod sit et culpa.
        Nulla veniam ea tempor amet in dolor voluptate excepteur sit deserunt
        ut. Dolore aliqua ad enim eu culpa reprehenderit Lorem adipisicing ea
        nostrud elit non eiusmod ad. Ullamco aliquip et mollit aute commodo ut
        est veniam nisi. Qui do et fugiat ipsum officia fugiat ex duis velit eu
        et fugiat qui dolore. Magna id velit mollit cillum ipsum amet nostrud
        minim. Excepteur deserunt elit officia reprehenderit. Laborum occaecat
        mollit anim adipisicing. Fugiat est esse excepteur non cupidatat do
        adipisicing culpa dolore ad eiusmod pariatur adipisicing. Incididunt
        elit quis cillum duis in cupidatat laboris aliqua. In consequat esse
        mollit sint exercitation dolor sunt ea.
      </p>
      <hr />
      <h3 id="About-heading-two" >Are you holding a {name}?</h3>
      <div className="cards-container">
        <Card id="card-1" >
          <Card.Img variant="top" id="card-image-1" src={calculate} />
          <Card.Body>
            <Card.Title id="card-title-1" >Calculate Your<br />Profits</Card.Title>
            <Button variant="primary" id="card-button-1">Check Now</Button>
          </Card.Body>
        </Card>

        <Card id="card-2" >
          <Card.Img variant="top" id="card-image-2" src={tax} />
          <Card.Body>
            <Card.Title id="card-title-2" >Calculate your tax<br/>liability</Card.Title>

            <Button variant="primary" id="card-button-2" >Check Now</Button>
          </Card.Body>
        </Card>
      </div>
      <hr />
      <p id="end-section" style={{}}>
        Do enim cillum ea aliquip quis nostrud sint incididunt elit Lorem labore
        officia nisi exercitation. Voluptate nostrud amet irure commodo est
        aliqua adipisicing et eu qui nisi sit aliquip Lorem.
      </p>
    </div>
  );
};

export default About;
