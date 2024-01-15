import { useEffect, useState } from "react";
import { UserAverageSessions } from "../../types/user";
import { fetchUserAverageSessions } from "../../services/requests";
import { checkMockedRoute } from "../../utils";
import SessionDuration from "../../components/dashboard/SessionDuration";

const SeassionDurationContainer = ({ id }: { id: number }) => {
  const [userAverageSessions, setUserAverageSessions] = useState<
    UserAverageSessions | undefined
  >(undefined);
  const dayLetters = ["L", "M", "M", "J", "V", "S", "D"];
  const handleFetchUserAverageSessions = async () => {
    const data = await fetchUserAverageSessions(id, checkMockedRoute());
    if (data) {
      setUserAverageSessions(data);
    }
  };

  useEffect(() => {
    handleFetchUserAverageSessions();
  }, [id]);
  return (
    <>
      <SessionDuration
        userAverageSessions={userAverageSessions}
        tickFormatter={dayLetters}
      />
    </>
  );
};

export default SeassionDurationContainer;
