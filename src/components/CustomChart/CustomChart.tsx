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
  Filler,
  ScriptableContext,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface Props {
  sparkline: (string | null)[] | undefined
  color?: string | undefined | null
  name: string | undefined
}


export const CustomChart = ({ sparkline, color, name }: Props) => {

  const coinColor = color ?? "rgb(12, 136, 218)"
  const miData = {
    labels: sparkline?.map((_el, index) => index + 1 + "hs"),
    datasets: [
      {
        label: name ?? "sparkline",
        data: sparkline?.map((el) => el),
        tension: 0.5,
        fill: true,
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, coinColor);
          gradient.addColorStop(1, "rgb(255,255,255,0.5)");
          return gradient;
        },
        pointRadius: 5,
        pointBorderColor: coinColor,
        pointBackgroundColor: coinColor,
      },
    ],
  };

  const misoptions = {
    responsive: true,
    maintainAspectRatio: false,

  };
  return <Line data={miData} height={"200px"} options={misoptions} />;
};
