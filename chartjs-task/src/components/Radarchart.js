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
    labels: ['# of bugs at start', '# of bugs squashed', '# of bugs caused by debugging', '# of bugs remaining'],
    datasets: [
      {
        label: 'DV Student 1',
        data: [20, 0, 15, 35],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 71, 111)',
        borderWidth: 1,
      },
      {
        label: 'DV Student 2',
        data: [25, 25, 25, 25],
        backgroundColor: 'rgba(122, 255, 104, 0.2)',
        borderColor: 'rgb(117, 255, 53)',
        borderWidth: 1,
      },
    ],
  };

const Radarchart = () => {
    return (
        <div className='justify-content-center'>
            <Radar data={data} style={{width: '40%', height: 'auto', marginLeft:'20vh'}}/>
        </div>
    );
};

export default Radarchart;