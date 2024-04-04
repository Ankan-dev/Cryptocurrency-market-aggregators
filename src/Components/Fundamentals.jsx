import React, { useEffect, useState } from "react";
import "../Stylesheets/Fundamentals.css";
import axios from "axios";
import { IoMdArrowDropup } from "react-icons/io";

const Fundamentals = ({ name,details,search }) => {
  const [bitcoinData, setBitcoinData] = useState(null);
  const [percent, setPercent] = useState(null);
  const [ratio, setRatio] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${search}`,
          {
            headers: {
              "x-cg-demo-api-key": "CG-miiLURUvrk7jz97cbG2rCpu9",
            },
          }
        );
        setBitcoinData(response.data);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        console.log(error);
      }
    };
    fetchBitcoinData();
  }, [name]);

  useEffect(() => {
    if (bitcoinData) {
      const percentage =
        ((bitcoinData.market_data.current_price.usd -
          bitcoinData.market_data.low_24h.usd) /
          bitcoinData.market_data.low_24h.usd) *
        100;
      setPercent(percentage);
      const ratioCalc =
        bitcoinData.market_data.total_volume.usd /
        bitcoinData.market_data.market_cap.usd;
      setRatio(ratioCalc);
    }
  
    console.log(bitcoinData);
  }, [bitcoinData]);

  if(bitcoinData){
    details(bitcoinData.market_data.market_cap_rank,bitcoinData.market_data.high_24h.usd,bitcoinData.market_data.price_change_percentage_24h_in_currency.usd,bitcoinData.market_data.high_24h.inr)
  }
  

  return (
    <div className="fundamentals-main">
      <div className="performance">
        <h3 id="perf-head">Performance</h3>
        <div className="container">
          {bitcoinData && (
            <>
              <div id="today-low-container">
                <h6>Today's low</h6>
                <p>{bitcoinData.market_data.low_24h.usd}</p>
              </div>
              <div className="prog">
                <div className="prog-bar"></div>
                <div id="percent-display"
                  style={{
                    left: `${percent}%`
                  }}
                >
                  <IoMdArrowDropup style={{ width: "40%", height: "40%" }} />
                  <p>{bitcoinData.market_data.current_price.usd}</p>
                </div>
              </div>
              <div id="today-high-container">
                <h6>Today's high</h6>
                <p>{bitcoinData.market_data.high_24h.usd}</p>
              </div>
            </>
          )}
        </div>

        <div className="container">
          {bitcoinData && (
            <>
              <div id="all-time-low">
                <h6>All Time Low</h6>
                <p>{bitcoinData.market_data.atl.usd}</p>
              </div>
              <div className="prog">
                <div className="prog-bar"></div>
              </div>
              <div id="all-time-high">
                <h6>All Time High</h6>
                <p>{bitcoinData.market_data.ath.usd}</p>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="fundamentals">
        <h3>Fundamentals</h3>
        <div className="list-Info">
          {bitcoinData && (
            <>
              <ul>
                <li>
                  <div>
                    <p>Current Price</p>
                    <h5> ${bitcoinData.market_data.current_price.usd}</h5>
                  </div>
                  <hr />
                </li>

                <li>
                  <div>
                    <p>24h Low / 24h High</p>
                    <h5>
                      {" "}
                      ${bitcoinData.market_data.low_24h.usd} / $
                      {bitcoinData.market_data.high_24h.usd}
                    </h5>
                  </div>
                  <hr />
                </li>

                <li>
                  <div>
                    <p>Trading Volume</p>
                    <h5>${bitcoinData.market_data.total_volume.usd}</h5>
                  </div>
                  <hr />
                </li>

                <li>
                  <div>
                    <p>Market Cap Rank</p>
                    <h5>#{bitcoinData.market_data.market_cap_rank}</h5>
                  </div>
                  <hr />
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <p>Market Cap</p>
                    <h5>${bitcoinData.market_data.market_cap.usd}</h5>
                  </div>
                  <hr />
                </li>

                <li>
                  <div>
                    <p>Volume / Market Cap</p>
                    <h5>{Math.round(ratio * 1000) / 1000}</h5>
                  </div>
                  <hr />
                </li>

                <li>
                  <div>
                    <p>All-time High </p>
                    <h5>{bitcoinData.market_data.ath.usd}</h5>
                  </div>
                  <hr />
                </li>

                <li>
                  <div>
                    <p>All-Time Low</p>
                    <h5>{bitcoinData.market_data.atl.usd}</h5>
                  </div>
                  <hr />
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fundamentals;
