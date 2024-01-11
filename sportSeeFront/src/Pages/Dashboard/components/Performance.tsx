import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchUserPerformance } from "../../../services/requests";
import { checkMockedRoute } from "../../../utils";
import useFormatPerformance from "../../../hooks/usePerformanceFormatted";
import { UserPerformance } from "../../../types/user";

function Performance() {
  const [userPerformance, setUserPerformance] = useState<
    UserPerformance | undefined
  >(undefined);
  const { id } = useParams();
  const formattedData = useFormatPerformance(userPerformance);
  const handleFetchUserPerformance = async () => {
    const data = await fetchUserPerformance(
      parseInt(id || ""),
      checkMockedRoute()
    );
    if (data) {
      setUserPerformance(data);
    }
  };

  useEffect(() => {
    handleFetchUserPerformance();
  }, [id]);

  return (
    <div className="bg-[#282D30] rounded-md relative">
      <RadarChart
        data={formattedData}
        outerRadius="70%"
        height={263}
        width={275}
      >
        <PolarAngleAxis
          dataKey="kind"
          tickLine={false}
          tick={{ fontSize: "12px", fontWeight: "500" }}
          stroke="#FFFFFF"
        />
        <PolarGrid radialLines={false} stroke="#FFFFFF" gridType="polygon" />
        <Radar dataKey="value" fill="#FF0101" fillOpacity="70%" />
      </RadarChart>
    </div>
  );
}

export default Performance;
