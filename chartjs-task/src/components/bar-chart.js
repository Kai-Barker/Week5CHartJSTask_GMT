import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart () {
    return (
        <div className="d-flex flex-column justify content-end">
        <Bar data={{
            labels: ["Phone","Email","Social Media","In-Person","Fax"],
            datasets: [{
                label: 'Cape Town Branch Contacts',
                data: [5,9,7,5,1],
                backgroundColor: '#d1aa96'
            },{
                label: 'Pretoria Branch Contacts',
                data: [10,6,3,1,0],
                backgroundColor: '#109727'
            },{
                label: 'Durban Branch Contacts',
                data: [11,4,5,2,2],
                backgroundColor: '#ab71c7'
            }]
        }}/>
        </div>
    )
}

export default BarChart;