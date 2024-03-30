import PropTypes from "prop-types";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComp = (props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };

  const labels = [
    "Carbohydrates",
    "Cholesterol",
    "Saturated Fat",
    "Total Fat",
    "Fiber Content",
    "Potassium",
    "Protein",
    "Sodium",
    "Sugar",
  ];

  const value = [
    props.carbohydrates,
    props.cholesterol,
    props.saturated_fat,
    props.total_fat,
    props.fiber_content,
    props.potassium,
    props.protein,
    props.sodium,
    props.sugar,
  ];

  const data = {
    labels,
    datasets: [
      {
        label: `Nutritional Values of ${
          props.name.charAt(0).toUpperCase() + props.name.slice(1)
        }`,
        data: value,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
          "rgb(255, 159, 64)",
          "rgb(75, 192, 192)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
};

ChartComp.propTypes = {
  name: PropTypes.string,
  serving_size: PropTypes.number,
  carbohydrates: PropTypes.number,
  cholesterol: PropTypes.number,
  saturated_fat: PropTypes.number,
  total_fat: PropTypes.number,
  fiber_content: PropTypes.number,
  potassium: PropTypes.number,
  protein: PropTypes.number,
  sodium: PropTypes.number,
  sugar: PropTypes.number,
};

export default ChartComp;
