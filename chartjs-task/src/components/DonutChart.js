import React from "react";
import { Doughnut } from "react-chartjs-2";
import './DonutChart.css'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";





const DonutChart = () => {
    return (
        <div className="chart-container">
             <h1>Chart Data Title</h1>
            <Doughnut
            data={{
                labels: ["Apples", "Bananas", "Cherries"],
                datasets: [
                  {
                    data: [30, 50, 20],
                    backgroundColor: [
                        "#FF7E4F",
                      "#E12532", 
                      "#2D4718", 
                    ],
                    borderColor: "transparent",
                    borderWidth:0,
                  },
                ],
                
            }}
            >

            </Doughnut>

        </div>
       


    );
  };

  export default DonutChart;