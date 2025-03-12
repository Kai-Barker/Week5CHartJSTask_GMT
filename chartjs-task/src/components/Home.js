import React from "react";
import Radar from './Radarchart';
import DonutChart from "./DonutChart";
import BarChart from "./bar-chart";


function Home() {
  return (
  <div>
    <Radar />
    <DonutChart/>
    <BarChart/>
  </div>
  );
}

export default Home;