import React from "react";
import Radar from './Radarchart';
import DonutChart from "./DonutChart";
import BarChart from "./bar-chart";


function Home() {
  return (
  <div style={{display:'flex', flexDirection:'column' , alignItems:'center'}}>
    <Radar />
    <DonutChart/>
    <BarChart/>
  </div>
  );
}

export default Home;