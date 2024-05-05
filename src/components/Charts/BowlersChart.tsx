import { ApexOptions } from 'apexcharts';
import React, { useState, useEffect } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

const options: ApexOptions = {
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left',
  },
  colors: ['#3C50E0', '#33BBFF', '#FFAE03', '#FF4560', '#775DD0'],
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
    type: 'category',
    categories: [],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false, // Hide x-axis labels
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: '0px',
      },
    },
    min: 0,
    labels: {
      formatter: function (value) {
        return value.toFixed(2); // Rounds to 2 decimal points
      }
    }
  },
};

interface PlayerData {
  date_number: number[];
  ratio: number[];
}

const BowlersChart: React.FC = () => {
  const initialData: Record<string, PlayerData> = JSON.parse(
    '{"Wanindu Hasaranga": {"date_number": [10, 11, 12, 13, 14, 15, 16, 17, 18], "ratio": [7.5, 6.75, 7.0, 7.5, 2.25, 9.75, 5.5, 13.666666666666666, 9.0]}, "Maheesh Theekshana": {"date_number": [15, 16, 17, 18], "ratio": [7.25, 7.25, 8.25, 12.0]}, "Tillakaratne Dilshan": {"date_number": [0, 1, 2, 5], "ratio": [14.0, 10.0, 7.0, 4.0]}, "Angelo Mathews": {"date_number": [0, 1, 2, 3, 4, 6, 7, 8, 9, 11], "ratio": [7.5, 15.473684210526317, 9.666666666666666, 7.666666666666667, 6.25, 5.333333333333333, 11.0, 6.333333333333333, 6.857142857142857, 12.666666666666666]}}');

  const [data, setData] = useState<Record<string, PlayerData>>(initialData);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://127.0.0.1:5173/api/matches?country=Sri%20Lanka');
  //       const responseData: Record<string, PlayerData> = response.data;
  //       setData(responseData);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const series = Object.keys(data).map((key, index) => ({
    name: key,
    data: data[key].ratio,
  }));

  const categories = Object.values(data)[0].date_number.map(entry => entry.toString());
  const updatedOptions = { ...options, xaxis: { ...options.xaxis, categories } };

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-8">
      <div>
        <div id="chartOne" className="-ml-5">
          <ReactApexChart options={updatedOptions} series={series} type="line" height={500} />
        </div>
      </div>
    </div>
  );
};

export default BowlersChart;
