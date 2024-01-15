import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { FormattedPerformanceType } from "../../hooks/usePerformanceFormatted";

function Performance({
  userPerformance,
}: {
  userPerformance: FormattedPerformanceType[] | undefined;
}) {
  return (
    <div className="bg-[#282D30] rounded-md relative">
      <RadarChart
        data={userPerformance}
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
