import { Bar } from "react-chartjs-2";

function Test({ data }) {
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

export default Test;