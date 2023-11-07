import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

import { chartData } from '../../../../utilities/faker';
import { useEffect, useState } from 'react';

import styles from './chart.module.scss';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function BarChart() {
  const [charts, setChartData] = useState(chartData);

  useEffect(() => {
    const interval = setInterval(() => {
      const newData = charts.map((chart) => {
        const yearChange = Math.floor(Math.random() + 1);
        const calculateChange =
          Math.random() < 0.5 ? Math.floor(Math.random() * 100) + 1 : -(Math.floor(Math.random() * 100) + 1);
        return {
          ...chart,
          calculate: chart.calculate + calculateChange,
          year: chart.year + yearChange,
        };
      });
      setChartData(newData);
    }, 5000);
    return () => clearInterval(interval);
  }, [charts]);

  return (
    <div className={styles.wrapper}>
      <Bar
        data={{
          labels: charts.filter((data) => data.month).map((chart) => chart.month),
          datasets: [
            {
              label: `London ${charts.filter((data) => data.year).map((data) => data.year)}`,
              data: charts.filter((data) => data.name === 'London').map((londonItem) => londonItem.calculate),
              backgroundColor: 'rgba(65, 176, 170)',
            },
            {
              label: `Paris ${charts.filter((data) => data.year).map((data) => data.year)} `,
              data: charts.filter((data) => data.name === 'Paris').map((parisItem) => parisItem.calculate),
              backgroundColor: 'rgba(102, 65, 176)',
            },
            {
              label: `New-York ${charts.filter((data) => data.year).map((data) => data.year)}`,
              data: charts.filter((data) => data.name === 'New-York').map((n_YItem) => n_YItem.calculate),
              backgroundColor: 'rgba(176, 65, 176)',
            },
            {
              label: `Seoul ${charts.filter((data) => data.year).map((data) => data.year)}`,
              data: charts.filter((data) => data.name === 'Seoul').map((seoulItem) => seoulItem.calculate),
              backgroundColor: 'rgba(176, 65, 109)',
            },
          ],
        }}
      />
    </div>
  );
}

export { BarChart };
