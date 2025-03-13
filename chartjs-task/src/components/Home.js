import React from "react";
import Radar from './Radarchart';
import DonutChart from "./DonutChart";
import BarChart from "./bar-chart";
import 'react-bootstrap';


function Home() {
  return (
    <div style={{marginLeft:'10%', marginRight:'10%', paddingTop:'4vh',paddingBottom:'4vh'}}>
      <div className="d-flex flex-row justify-content-center gap-3">
        <div className='col-5' style={{ flex: 1, padding: '10px', borderRadius: '10px', border: '3px solid #000' }}>
          <Radar />
        </div>
          <div className='col-5' style={{ flex: 1, padding: '10px', borderRadius: '10px', border: '3px solid #000' }}>
            <div className="d-flex" style={{flexDirection:"column", justifyContent:'flex-end', marginTop:'50%'}}>
            <BarChart/>
            </div>
          </div>
      </div>

      <div className="d-flex flex-row" style={{ borderRadius: '10px', border: '3px solid #000', marginTop: '20px', gap:'-5px' }}>
        
        <DonutChart />
        <DonutChart />
        <DonutChart />
      </div>
    </div>
  );
}

export default Home;