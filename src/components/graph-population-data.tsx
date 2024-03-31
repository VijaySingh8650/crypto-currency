import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { IGraphData } from "../types/graph-data.interface";
import { Bar } from "react-chartjs-2";
import styles from "../styles/home.module.css";

Chart.register(CategoryScale);

const GraphPopulationData = () => {
  const [chartData, setChartData] = useState<any>({});

  useEffect(() => {
    fetch(`https://datausa.io/api/data?drilldowns=Nation&measures=Population`)
      .then((res) => res.json())
      .then((res) => {
        
        let data: IGraphData[] = res.data;

        if (data?.length > 0) {
          setChartData({
            labels: data?.map((item: IGraphData) => item.Year),
            datasets: [
              {
                label: "Population",
                data: data?.map((item: IGraphData) => item.Population),
                backgroundColor: new Array(data?.length).fill("#6558f5"),
                borderColor: "white",
                borderWidth: 1,
              },
            ],
          });
        }
      });
  }, []);

  return (
    <div>
      <h1 className={styles.section_title}>United States Population</h1>
      {Object.values(chartData)?.length > 0 && 
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: `United States Population (${chartData?.labels[chartData.labels.length-1]} - ${chartData?.labels[0]})`
            },
            legend: {
              display: false,
            },
          },
        }}
      />}
    </div>
  );
};

export default GraphPopulationData;
