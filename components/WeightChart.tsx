import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import WeightChartProps from "@/types/WeightChartProps";
import { format } from 'date-fns'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const WeightChart = ({ newWeight }: WeightChartProps) => {
  const changeDate = newWeight.map((ma: { date: { toDate: () => any; }; }) => ma.date ? ma.date.toDate() : null);
  const newDate = changeDate.map((date: number | Date) => date ? format(date, 'MM月dd日') : '');

  const data = {
    labels: newDate,
    datasets: [
      {
      label: '体重（kg）',
        data: newWeight.map((map) => map.weight),
        borderColor: 'blue',
        fill: false,
      }
    ]
  }

  const options = {
    scales: {
      y: {
        min: 50, 
        max: 90,
        ticks: {     
          stepSize: 1  // 間隔
        },
      },
      x : {
        max: 6
      }
    },
  };

  
  return (
    <div>
      <div className='mx-auto max-w-min sm:w-11/12 sm:h-5/6'>
        <Line data={data} 
        options={options} 
        width={window.innerWidth > 600 ? 1400 : window.innerWidth - 20}
        height={window.innerWidth > 600 ? 800 : 400}
        />
      </div>
    </div>
  );
}

export default WeightChart;