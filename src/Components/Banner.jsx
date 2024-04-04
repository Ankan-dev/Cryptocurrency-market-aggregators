import React, { useState, useEffect } from "react";
import "../Stylesheets/Banner.css";
import top from "../assets/Images/top.png";
import { FaArrowRight } from "react-icons/fa6";
import axios from "axios";
import { MdArrowDropUp } from "react-icons/md";

const Banner = ({ trend }) => {
  const [data, setData] = useState([]);
  const [topThree, setTopThree] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://api.coingecko.com/api/v3/search/trending",
          headers: { "x-cg-demo-api-key": "CG-miiLURUvrk7jz97cbG2rCpu9" },
        };

        const response = await axios.request(options);
      console.log(response)
        setData(response.data.coins.slice(0, 3));
        setLoading(false);
      } catch (error) {
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const topThreeData = data.map((coin) => ({
        thumb: coin.item.thumb,
        name: coin.item.name,
        symbol: coin.item.symbol,
        percent: Math.round(
          coin.item.data.price_change_percentage_24h.usd * 100
        ) / 100,
        id:coin.item.id
      }));
      setTopThree(topThreeData);
      trend(topThreeData[0].name,topThreeData[0].symbol,topThreeData[0].thumb,topThreeData[0].id);
    }
  }, [data, trend]);

  return (
    <React.Fragment>
      <div className="top">
        <h2>
          Get started with KoinX
          <br />
          for FREE
        </h2>
        <p>
          With our range of features that we can equip for
          <br />
          free, KoinX allows you to more educate and
          <br />
          aware of your tax reports.
        </p>
        <img src={top} alt="img" />
        <button>
          <span>Get Started for Free</span>
          <FaArrowRight />
        </button>
      </div>
      <div className="bottom">
        <h3>Trending Coins (24h)</h3>
        {loading && <p>Loading...</p>}
        {error && <p style={{ marginLeft: "40px", fontFamily: "Poppins, sans-serif", fontWeight: "400", marginTop: "20px" }}>{error}</p>}
        <div className="data-container">
          {topThree.map((elm, index) => (
            <div key={index} className="elements">
              <div className="name">
                <img src={elm.thumb} alt="icon" />
                <p>{elm.name}<span> {"("}{elm.symbol}{")"}</span></p>
              </div>
              <div className="percent">
                <MdArrowDropUp />
                <p>{elm.percent} %</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
