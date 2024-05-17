import React, { useState } from 'react';
import ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts';

interface PlayerDetail {
  player: string;
  batting_position: number;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strike_rate: number;
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
  const [selectedMetric, setSelectedMetric] = useState<'runs' | 'balls' | 'strike_rate' | 'fours' | 'sixes'>('runs');

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
        // endingShape: 'rounded'
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
      text: `Player performance with ${selectedMetric}`,
      align: 'center',
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

  const series = data.legend.map(player => ({
    name: player,
    data: data.x_values.map(x => {
      const playerData = data.player_details[player].find(d => d.batting_position === x);
      return playerData ? playerData[selectedMetric] : 0;
    }),
  }));

  return (
    <div className="col-span-12 rounded-sm border  border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div>
        <div className="flex justify-end mb-4">
          <label className="mr-2">Select Metric:</label>
          <select
            value={selectedMetric}
            onChange={e => setSelectedMetric(e.target.value as 'runs' | 'balls' | 'strike_rate' | 'fours' | 'sixes')}
            className="border border-gray-300 rounded p-1"
          >
            <option value="runs">Runs</option>
            <option value="balls">Balls</option>
            <option value="strike_rate">Strike Rate</option>
            <option value="fours">Fours</option>
            <option value="sixes">Sixes</option>
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
