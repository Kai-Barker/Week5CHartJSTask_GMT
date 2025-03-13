import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Radar } from 'react-chartjs-2';

  
  ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

export const data = {
    labels: ['CSS', 'JS', 'HTML', 'XML'],
    datasets: [
      {
        label: 'DV Student 1',
        data: [2, 9, 8, 6],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 71, 111)',
        borderWidth: 1,
      },
      {
        label: 'DV Student 2',
        data: [9, 6, 5, 6],
        backgroundColor: 'rgba(122, 255, 104, 0.2)',
        borderColor: 'rgb(117, 255, 53)',
        borderWidth: 1,
      },
    ],
  };

const Radarchart = () => {
  return (
    <div className='justify-content-center'>
      <Radar data={data}/>
    </div>
  );
};

export default Radarchart;