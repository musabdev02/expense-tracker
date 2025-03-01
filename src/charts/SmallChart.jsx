import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const SmallChart = ({ expenses }) => {
  const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0", "#546E7A", "#26a69a", "#D10CE8"];

  const [chartData, setChartData] = useState({
    series: [{ data: [] }],
    options: {
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            console.log(chart, w, e);
          },
        },
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [],
        labels: {
          style: {
            colors: colors,
            fontSize: "12px",
          },
        },
      },
    },
  });

  useEffect(() => {
    if (expenses.length > 0) {
      setChartData({
        series: [{ data: expenses.map((exp) => exp.amount) }],
        options: {
          ...chartData.options,
          xaxis: {
            categories: expenses.map((exp) => exp.title), 
          },
        },
      });
    }
  }, [expenses]);

  return (
    <div>
      <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={400} />
    </div>
  );
};

export default SmallChart;
