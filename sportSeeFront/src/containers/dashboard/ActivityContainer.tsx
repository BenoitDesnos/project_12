import { useEffect, useState } from "react";
import { UserActivity } from "../../types/user";
import { fetchUserActivity } from "../../services/requests";
import { checkMockedRoute } from "../../utils";
import DailyActivity from "../../components/dashboard/Activity";

const ActivityContainer = ({ id }: { id: number }) => {
  const [userActivity, setUserActivity] = useState<UserActivity | undefined>(
    undefined
  );
  const handleFetchUserActivity = async () => {
    const data = await fetchUserActivity(id, checkMockedRoute());
    if (!data) {
      console.error(data.error);
      return;
    } else {
      setUserActivity(data);
    }
  };

  useEffect(() => {
    handleFetchUserActivity();
  }, [id]);
  return (
    <>
      <DailyActivity userActivity={userActivity} />
    </>
  );
};

export default ActivityContainer;
