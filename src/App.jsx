import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import TradingGraph from "./Components/TradingGraph";
//import NavTwo from "./Components/NavTwo";
import Fundamentals from "./Components/Fundamentals";
import Sentiments from "./Components/Sentiments";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Teams from "./Components/Teams";
import Tokenomics from "./Components/Tokenomics";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

const App = () => {
  // Adjusted initial state to an empty string
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState();
  const [id, setId] = useState();
  const [rank, setRank] = useState();
  const [price, setPrice] = useState();
  const [percent, setPercent] = useState();
  const [india, setIndia] = useState();
  const [search, setSearch] = useState();
 // const [flag,setFlag]=useState([,0,0,0,0,0,0]);

  // Function to update 'name' state
  const trend = (value1, value2, value3, value4) => {
    setName(value1);
    setSymbol(value3);
    setId(value2);
    setSearch(value4);
  };

  const details = (r, pr, pe, prI) => {
    setRank(r);
    setPrice(pr);
    setPercent(pe);
    setIndia(prI);
  };

  return (
    <BrowserRouter>
    <div className="main-container">
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <div className="first">
        <section id="overview">          
          <TradingGraph
            name={name}
            symbol={symbol}
            id={id}
            rank={rank}
            price={price}
            percent={percent}
            india={india}
            search={search}
          />
        </section>
          <div className="nav-main">
            <ul>
              <li>
                <div>
                <Link to='#overview'>
                Overview
                </Link>
                </div>
              </li>
              <li>
                <div>
                <Link to='#fundamentals'>
                Fundamentals
                </Link>
                </div>
              </li>
              <li>
                <div>
                <Link to='#Sentiments'>
                Sentiments
                </Link>
                </div>
              </li>
              <li>
                <div id="about-bitcoin">
                <Link to='#about'>
                About <span id="about-name">{name}</span>
                </Link>
                </div>
              </li>
              <li>
                <div>
                <Link to='#tokenomics'>
                Tokenomics
                </Link>
                </div>
              </li>
              <li>
                <div id="our-teams">
                <Link to='#teams'>
                Our Team
                </Link>
                </div>
              </li>
              <li>
                <div id="important">
                <Link to='#footer'>
                Important links
                </Link>
                </div>
              </li>
            </ul>
          </div>
          <section id="fundamentals">
          <Fundamentals id="fundamentals" name={name} details={details} search={search}/>
          </section>
          <section id="Sentiments">
          <Sentiments />            
          </section>
          <section id="about">
          <About name={name} />
          </section>
          <section id="tokenomics">
          <Tokenomics />
          </section>
          <section id="teams">
          <Teams />            
          </section>
        </div>
        <div className="second">
          {/* Ensure Banner component is designed to receive 'trend' prop */}
          <Banner trend={trend} />
        </div>
      </main>
      <footer className="footer" id='footer'>
        <Footer  />
      </footer>
    </div>
    </BrowserRouter>
  );
};

export default App;
