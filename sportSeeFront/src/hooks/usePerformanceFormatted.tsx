import { useState, useEffect } from "react";
import { UserPerformance } from "../types/user";

export type FormattedPerformanceType = {
  kind: string;
  value: number;
};

const useFormatPerformance = (userPerformance: UserPerformance | undefined) => {
  const [formattedPerformance, setFormattedPerformance] = useState<
    FormattedPerformanceType[] | undefined
  >([]);

const kindFirstLetterToUppercase = (key: number) => {
  if (!userPerformance) return;
  const keys = Object.keys(userPerformance.kind).map((key) => parseInt(key));
  const value = Object.values(userPerformance.kind)[keys.indexOf(key)];
  return value.charAt(0).toUpperCase() + value.slice(1);
};
  const formatUserPerformanceData = (
    userPerformance: UserPerformance | undefined
  ) => {
    if (!userPerformance) return;
    const data = userPerformance.data.map((item) => {
      return {
        kind: kindFirstLetterToUppercase(item.kind),
        value: item.value,
      };
    });
    if (!data) return;
    return data as FormattedPerformanceType[];
  };
  useEffect(() => {
    setFormattedPerformance(formatUserPerformanceData(userPerformance));
  }, [userPerformance]);

  return formattedPerformance;
};

export default useFormatPerformance;
