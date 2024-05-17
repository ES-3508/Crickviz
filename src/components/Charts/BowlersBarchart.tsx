import React, { useState } from 'react';
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

interface PlayerDetail {
  bowler: string;
  over: number;
  avg_extras: number;
  avg_wickets: number;
  avg_runs: number;
}

interface Data {
  xlabel: string;
  ylabel: string;
  title: string;
  legend: string[];
  x_values: number[];
  y_values: number[];
  player_details: Record<string, PlayerDetail[]>;
}

interface PlayerBarChartProps {
  data: Data;
}

const PlayerBarChart: React.FC<PlayerBarChartProps> = ({ data }) => {
  const [selectedMetric, setSelectedMetric] = useState<'avg_extras' | 'avg_wickets' | 'avg_runs'>('avg_runs');

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'bar',
      height: 350,
      stacked: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
      },
    },
    xaxis: {
      categories: data.x_values,
      title: {
        text: data.xlabel,
      },
    },
    yaxis: {
      title: {
        text: data.ylabel,
      },
    },
    legend: {
      position: 'top',
    },
    title: {
      text: data.title,
      align: 'left',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['#fff']
    },
  };

  const series = data.legend.map(bowler => ({
    name: bowler,
    data: data.x_values.map(x => {
      const bowlerData = data.player_details[bowler].find(d => d.over === x);
      return bowlerData ? bowlerData[selectedMetric] : 0;
    }),
  }));

  return (
    <div className="col-span-12 rounded-sm border  border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div>
        <div className="flex justify-end mb-4">
          <label className="mr-2">Select Metric:</label>
          <select
            value={selectedMetric}
            onChange={e => setSelectedMetric(e.target.value as 'avg_extras' | 'avg_wickets' | 'avg_runs')}
            className="border border-gray-300 rounded p-1"
          >
            <option value="avg_extras">Avg Extras</option>
            <option value="avg_wickets">Avg Wickets</option>
            <option value="avg_runs">Avg Runs</option>
          </select>
        </div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart options={options} series={series} type="bar" height={500} />
        </div>
      </div>
    </div>
  );
};

export default PlayerBarChart;
