import React from "react";
import { Carousel, Card } from "react-bootstrap";
import "../Stylesheets/Sentiments.css";
import { IoNewspaper } from "react-icons/io5";
import { BsGraphUpArrow } from "react-icons/bs";

const CarouselContainer = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="screen-1">
          <Card style={{ width: "35rem", backgroundColor:"rgb(231,244,253)", textAlign:"justify", paddingTop:"10px"}}>
            <Card.Body>
              <Card.Title>
                <span style={{backgroundColor:"#0082fe", padding:"10px", borderRadius:"50%" , marginRight:"7px"}}><IoNewspaper style={{color:"white"}} />
                </span>
                {"   "}  
                Sunt proident qui elit dolore voluptate est anim ea.
              </Card.Title>
              <Card.Text style={{marginLeft:"50px"}}>
                Voluptate do enim commodo exercitation. Reprehenderit anim est
                minim dolor irure esse ipsum tempor quis minim velit
                exercitation deserunt. Quis et cillum elit exercitation velit
                culpa non ullamco nostrud consequat laboris nulla ullamco.
                Aliquip voluptate est sint ea qui ipsum qui est eiusmod.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "35rem", backgroundColor:"rgb(234,249,244)", textAlign:"justify",paddingTop:"10px"}}>
            <Card.Body>
              <Card.Title >
              <span style={{backgroundColor:"#0fba83", padding:"10px", borderRadius:"50%", marginRight:"7px"}}>
              <BsGraphUpArrow style={{color:"white"}}/>
              </span>
              {"   "}
              Sunt proident qui elit dolore voluptate est anim ea.</Card.Title>
              <Card.Text style={{marginLeft:"50px"}}>
              Voluptate do enim commodo exercitation. Reprehenderit anim est
                minim dolor irure esse ipsum tempor quis minim velit
                exercitation deserunt. Quis et cillum elit exercitation velit
                culpa non ullamco nostrud consequat laboris nulla ullamco.
                Aliquip voluptate est sint ea qui ipsum qui est eiusmod.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="screen-2">
        <Card style={{ width: "35rem", backgroundColor:"rgb(231,244,253)", textAlign:"justify",paddingTop:"10px"}}>
            <Card.Body>
              <Card.Title>
                <span style={{backgroundColor:"#0082fe", padding:"10px", borderRadius:"50%", marginRight:"7px"}}><IoNewspaper style={{color:"white"}} />
                </span>
                {"   "}  
                Sunt proident qui elit dolore voluptate est anim ea.
              </Card.Title>
              <Card.Text style={{marginLeft:"50px"}}>
                Voluptate do enim commodo exercitation. Reprehenderit anim est
                minim dolor irure esse ipsum tempor quis minim velit
                exercitation deserunt. Quis et cillum elit exercitation velit
                culpa non ullamco nostrud consequat laboris nulla ullamco.
                Aliquip voluptate est sint ea qui ipsum qui est eiusmod.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "35rem", backgroundColor:"rgb(234,249,244)", textAlign:"justify" ,paddingTop:"10px"}}>
            <Card.Body>
              <Card.Title >
              <span style={{backgroundColor:"#0fba83", padding:"10px", borderRadius:"50%", marginRight:"7px"}}>
              <BsGraphUpArrow style={{color:"white"}}/>
              </span>
              {"   "}
              Sunt proident qui elit dolore voluptate est anim ea.</Card.Title>
              <Card.Text style={{marginLeft:"50px"}}>
              Voluptate do enim commodo exercitation. Reprehenderit anim est
                minim dolor irure esse ipsum tempor quis minim velit
                exercitation deserunt. Quis et cillum elit exercitation velit
                culpa non ullamco nostrud consequat laboris nulla ullamco.
                Aliquip voluptate est sint ea qui ipsum qui est eiusmod.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="screen-3">
        <Card style={{ width: "35rem", backgroundColor:"rgb(231,244,253)", textAlign:"justify",paddingTop:"10px"}}>
            <Card.Body>
              <Card.Title>
                <span style={{backgroundColor:"#0082fe", padding:"10px", borderRadius:"50%", marginRight:"7px"}}><IoNewspaper style={{color:"white"}} />
                </span>
                {"   "}  
                Sunt proident qui elit dolore voluptate est anim ea.
              </Card.Title>
              <Card.Text style={{marginLeft:"50px"}}>
                Voluptate do enim commodo exercitation. Reprehenderit anim est
                minim dolor irure esse ipsum tempor quis minim velit
                exercitation deserunt. Quis et cillum elit exercitation velit
                culpa non ullamco nostrud consequat laboris nulla ullamco.
                Aliquip voluptate est sint ea qui ipsum qui est eiusmod.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "35rem", backgroundColor:"rgb(234,249,244)", textAlign:"justify",paddingTop:"10px"}}>
            <Card.Body>
              <Card.Title >
              <span style={{backgroundColor:"#0fba83", padding:"10px", borderRadius:"50%", marginRight:"7px"}}>
              <BsGraphUpArrow style={{color:"white"}}/>
              </span>
              {"   "}
              Sunt proident qui elit dolore voluptate est anim ea.</Card.Title>
              <Card.Text style={{marginLeft:"50px"}}>
              Voluptate do enim commodo exercitation. Reprehenderit anim est
                minim dolor irure esse ipsum tempor quis minim velit
                exercitation deserunt. Quis et cillum elit exercitation velit
                culpa non ullamco nostrud consequat laboris nulla ullamco.
                Aliquip voluptate est sint ea qui ipsum qui est eiusmod.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
