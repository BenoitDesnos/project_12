import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { UserActivity } from "../../../types/user";
import { fetchUserActivity } from "../../../services/requests";
import { checkMockedRoute } from "../../../utils";
import { useEffect, useState } from "react";
export interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    value: number;
    unit: string;
  }[];
}
function DailyActivity({ id }: { id: number }) {
  const [userActivity, setUserActivity] = useState<UserActivity | undefined>(
    undefined
  );
  const handleFetchUserActivity = async () => {
    const parsedData = await fetchUserActivity(id, checkMockedRoute());
    if (!parsedData) {
      console.error(parsedData.error);
      return;
    } else {
      setUserActivity(parsedData);
    }
  };

  useEffect(() => {
    handleFetchUserActivity();
  }, [id]);

  const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload) {
      // Customize the tooltip content here based on your data
      return (
        <div
          style={{
            background: "#E60000",
            color: "#FFFFFF",
            padding: "0.25em 0.5em",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "500",
          }}
        >
          {payload.map((entry, index) => (
            <p
              key={index}
              style={{ margin: "1.25em 0" }}
            >{`${entry.value} ${entry.unit}`}</p>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%" minHeight={320}>
      <BarChart data={userActivity?.sessions} barGap={12} barSize={8}>
        <text
          x={0}
          y={25}
          textAnchor="left"
          style={{
            fontSize: "1.8rem",
            fontWeight: 500,
            fill: "#000000",
          }}
        >
          Activité quotidienne
        </text>
        <CartesianGrid strokeDasharray="3 3" opacity={0.5} vertical={false} />
        <XAxis
          tickLine={false}
          axisLine={{ stroke: "#DEDEDE" }}
          tick={{ stroke: "#9B9EAC", fontWeight: "400" }}
          dy={14}
        />
        <YAxis
          yAxisId="kilogram"
          orientation="right"
          stroke="#282D30"
          axisLine={false}
          tickLine={false}
          tickCount={3}
          tick={{ stroke: "#9B9EAC", fontWeight: "400" }}
          type="number"
          domain={["dataMin - 5", "auto"]}
          dx={14}
        />
        <YAxis yAxisId="calories" hide />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="right"
          iconType="circle"
          wrapperStyle={{
            paddingBottom: "4em",
          }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar
          yAxisId="kilogram"
          name="Poids (kg)"
          dataKey="kilogram"
          unit="kg"
          fill="#282D30"
          radius={[20, 20, 0, 0]}
        />
        <Bar
          yAxisId="calories"
          name="Calories brûlées (kCal)"
          dataKey="calories"
          unit="kCal"
          fill="#E60000"
          radius={[20, 20, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default DailyActivity;
