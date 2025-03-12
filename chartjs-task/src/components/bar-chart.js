import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

function BarChart () {
    return (
        <Bar data={{
            labels: ["TcgPlayer","eBay","Amazon","CoolStuffInc"],
            datasets: [{
                label: 'Dataset 1',
                data: [2.69,4.95,6.18,3.99]
            }]
        }}/>
    )
}

export default BarChart;