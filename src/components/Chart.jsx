import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function ChartComponent({ data }) {
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Monthly Cost",
        data: data.map((item) => item.price),
      },
    ],
  };

  return <Bar data={chartData} />;
}

export default ChartComponent;