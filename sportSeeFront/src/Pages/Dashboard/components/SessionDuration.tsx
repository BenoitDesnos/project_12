import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { CustomTooltipProps } from "./Activity";
import { UserAverageSessions } from "../../../types/user";
import { useEffect, useState } from "react";
import { fetchUserAverageSessions } from "../../../services/requests";
import { checkMockedRoute } from "../../../utils";
import { useParams } from "react-router";

function SessionDuration() {
  const [userAverageSessions, setUserAverageSessions] = useState<
    UserAverageSessions | undefined
  >(undefined);
  const { id } = useParams();
  const dayLetters = ["L", "M", "M", "J", "V", "S", "D"];
  const handleFetchUserAverageSessions = async () => {
    const data = await fetchUserAverageSessions(
      parseInt(id || ""),
      checkMockedRoute()
    );
    if (data) {
      setUserAverageSessions(data);
    }
  };

  useEffect(() => {
    handleFetchUserAverageSessions();
  }, [id]);
  const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
    if (active && payload?.length) {
      return (
        <div
          style={{
            background: "#FFFFFF",
            color: "#000000",
            padding: "1em 1em",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "500",
          }}
        >
          <p>{payload[0].value} min</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="bg-[#FF0000] rounded-md relative">
      <LineChart
        data={userAverageSessions?.sessions}
        margin={{ top: 20, right: 10, left: 10, bottom: 20 }}
        width={275}
        height={263}
      >
        <defs>
          <linearGradient id="lineGradient">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="30%" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="100%" />
          </linearGradient>
        </defs>
        <text
          x={10}
          y={30}
          textAnchor="left"
          style={{
            fontSize: "15px",
            fontWeight: 500,
            fill: "#FFFFFF",
            fillOpacity: "50%",
          }}
        >
          Durée moyenne des sessions
        </text>
        <XAxis
          dataKey="day"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "#FFFFFF", fillOpacity: "50%", fontSize: "12px" }}
          stroke="#FFFFFF"
          tickMargin={10}
          tickFormatter={(day) => dayLetters[day - 1]}
        />
        <YAxis
          dataKey="sessionLength"
          hide={true}
          domain={["dataMin -20", "dataMax + 50"]}
        />
        <Line
          dataKey="sessionLength"
          type="natural"
          stroke="url(#lineGradient)"
          strokeWidth={2.5}
          dot={false}
          activeDot={{
            stroke: "#FFFFFF",
            strokeOpacity: "50%",
            strokeWidth: 10,
          }}
        />
        <Tooltip
          content={<CustomTooltip />}
          cursor={{
            stroke: "#000000",
            strokeOpacity: "10%",
            strokeWidth: "20%",
            height: "100%",
          }}
        />
      </LineChart>
    </div>
  );
}

export default SessionDuration;
