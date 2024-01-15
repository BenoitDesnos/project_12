import { useEffect, useState } from "react";
import Performance from "../../components/dashboard/Performance";
import { UserPerformance } from "../../types/user";
import useFormatPerformance from "../../hooks/usePerformanceFormatted";
import { fetchUserPerformance } from "../../services/requests";
import { checkMockedRoute } from "../../utils";

const PerformanceContainer = ({ id }: { id: number }) => {
  const [userPerformance, setUserPerformance] = useState<
    UserPerformance | undefined
  >(undefined);
  const formattedData = useFormatPerformance(userPerformance);
  const handleFetchUserPerformance = async () => {
    const data = await fetchUserPerformance(id, checkMockedRoute());
    if (data) {
      setUserPerformance(data);
    }
  };

  useEffect(() => {
    handleFetchUserPerformance();
  }, [id]);
  return (
    <>
      <Performance userPerformance={formattedData}></Performance>
    </>
  );
};

export default PerformanceContainer;
