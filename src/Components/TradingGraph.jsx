import React, { useEffect, useState } from "react";
import "../Stylesheets/TradingGraph.css";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import { IoMdArrowDropup } from "react-icons/io";

const TradingGraph = ({
  name,
  symbol,
  id,
  rank,
  price,
  percent,
  india,
  search,
}) => {
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${search}/market_chart?vs_currency=usd&days=7&interval=daily`,
          {
            headers: {
              "x-cg-demo-api-key": "CG-miiLURUvrk7jz97cbG2rCpu9",
            },
          }
        );
        if (response && response.data && response.data.prices) {
          setGraphData(response.data.prices);
          console.log(graphData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [name]);

  const coinData = graphData.map((value) => ({
    x: value[0],
    y: value[1],
  }));

  console.log(coinData);
  const options = {
    responsive: true,
  };

  const data = {
    labels: coinData.map((value) => moment(value.x).format("MMM DD")),
    datasets: [
      {
        label: `${name}`,
        data: coinData.map((value) => value.y),
        borderColor: "rgb(53, 62, 235)",
        backgroundColor: "rgb(53, 62, 235)",
      },
    ],
  };

  return (
    <div className="graph-main">
      <div className="line-container">
        <p>
          Cryptocurrencies &gt;&gt; <span>{name}</span>
        </p>
      </div>
      <div className="graph-container">
        <div id="part-1">
          <div id="top">
            <img src={symbol} alt="thumb" id="coin-symbol" />
            <h4>{name}</h4>
            <p>{id}</p>
            <div id="rank"><span>Rank #{rank}</span></div>
          </div>
          <div id="price-container">
            <h3 id="price">${price}</h3>
            {percent !== undefined && (
              <div id="percent">
                <IoMdArrowDropup style={{ marginBottom: "5px" }} />
                <h6>{parseFloat(percent.toFixed(2))}%</h6>
              </div>
            )}
            <p id="twenty-four">(24h)</p>
          </div>
          <h6 id="india">₹{india}</h6>
        </div>
        <div id="part-2">
          <Line
            options={options}
            data={data}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TradingGraph;
