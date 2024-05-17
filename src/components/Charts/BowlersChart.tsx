import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface PlayerDetail {
  player: string;
  date: string;
  economy_rate: number;
  bowling_average: number;
  strike_rate: number;
  wickets_per_over: number;
  dots_per_over: number;
  predicted_performance: number;
}

interface Data {
  xlabel: string;
  ylabel: string;
  title: string;
  legend: string[];
  x_values: string[];
  y_values: number[];
  player_details: Record<string, PlayerDetail[]>;
}

interface PlayerPerformanceChartProps {
  data: Data;
}

const PlayerPerformanceChart: React.FC<PlayerPerformanceChartProps> = ({ data }) => {
  const [selectedMetric, setSelectedMetric] = useState<'economy_rate' | 'bowling_average' | 'strike_rate' | 'wickets_per_over' | 'dots_per_over' | 'predicted_performance'>('bowling_average');

  const options: ApexOptions = {
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
    },
    colors: ['#3C50E0', '#33BBFF', '#FFAE03'],
    chart: {
      fontFamily: 'Satoshi, sans-serif',
      height: 335,
      type: 'line',
      dropShadow: {
        enabled: true,
        color: '#623CEA14',
        top: 10,
        blur: 4,
        left: 0,
        opacity: 0.1,
      },
      toolbar: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 350,
          },
        },
      },
    ],
    stroke: {
      width: [2],
      curve: 'straight',
    },
    grid: {
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 4,
      colors: '#fff',
      strokeColors: ['#3056D3'],
      strokeWidth: 3,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [],
      hover: {
        size: undefined,
        sizeOffset: 5,
      },
    },
    xaxis: {
      type: 'datetime',
      categories: [],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1),
      },
      min: 0,
    },
    title: {
      text: data.title,
      align: 'left',
    },
  };

  const series = data.legend
    .filter(player => data.player_details[player]) // Only include players present in player_details
    .map(player => ({
      name: player,
      data: data.player_details[player].map(detail => ({
        x: new Date(detail.date).getTime(),
        y: detail[selectedMetric],
      })),
    }));

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5" style={{ width: '100%' }}>
      <div>
        <div className="flex justify-end mb-4">
          <label className="mr-2">Select Metric:</label>
          <select
            value={selectedMetric}
            onChange={e => setSelectedMetric(e.target.value as 'economy_rate' | 'bowling_average' | 'strike_rate' | 'wickets_per_over' | 'dots_per_over' | 'predicted_performance')}
            className="border border-gray-300 rounded p-1"
          >
            <option value="economy_rate">Economy Rate</option>
            <option value="bowling_average">Bowling Average</option>
            <option value="strike_rate">Strike Rate</option>
            <option value="wickets_per_over">Wickets per Over</option>
            <option value="dots_per_over">Dots per Over</option>
            <option value="predicted_performance">Predicted Performance</option>
          </select>
        </div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart options={options} series={series} type="line" height={500} />
        </div>
      </div>
    </div>
  );
};

export default PlayerPerformanceChart;
