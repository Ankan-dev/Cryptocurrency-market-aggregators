import React from "react";
import "../Stylesheets/Sentiments.css";
import { IoIosInformationCircle } from "react-icons/io";
import CarouselContainer from "./CarouselContainer";
import ProgressBar from "./ProgressBar";

const Sentiments = () => {
  const color=["#00b386","#c7c8cd","#f33750"]
  const percent=[73, 8, 16]; // Changed to numbers
  return (
    <div className="sentiments-main">
      <div className="upper">
        <h2>Sentiments</h2>
        <h4 style={{ marginBottom: "20px" }}>
          Key Points{" "}
          <span>
            <IoIosInformationCircle />
          </span>
        </h4>
        <CarouselContainer />
      </div>
      <div className="lower">
        <h4>
          Analyst Estimates{" "}
          <span>
            <IoIosInformationCircle />
          </span>
        </h4>
        <div className="down-part">
          <div className="circle"><p>76%</p></div>
          <div className="levels">
            <div className="buy">
              <h6>Buy</h6>
              <ProgressBar color={color[0]} percent={percent[0]} /> 
              <h6>{percent[0]}%</h6> 
            </div>
            <div className="hold">
              <h6>Hold</h6>
              <ProgressBar color={color[1]} percent={percent[1]} /> 
              <h6>{percent[1]}%</h6> 
            </div>
            <div className="sell">
            <h6>Sell</h6>
              <ProgressBar color={color[2]} percent={percent[2]} /> 
              <h6>{percent[2]}%</h6> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sentiments;