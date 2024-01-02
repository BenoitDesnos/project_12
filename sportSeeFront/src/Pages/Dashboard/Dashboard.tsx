import { useEffect, useState } from "react";
import { User } from "../../types/user";
import { useParams } from "react-router";
import Welcome from "./components/Welcome";
import DailyActivity from "./components/Activity";
import { fetchUserData } from "../../services/requests";
import SessionDuration from "./components/SessionDuration";

function Dashboard({ useMock }: { useMock?: boolean }) {
  const [currentUserData, setCurrentUserData] = useState<User | undefined>(
    undefined
  );
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const asyncFetch = async () => {
      const user = await fetchUserData(id, useMock);
      setCurrentUserData(user);
    };
    asyncFetch();
  }, [useMock]);
  return (
    <div className=" h-screen ml-28 mt-16">
      <Welcome currentUserData={currentUserData} />
      <div className=" flex max-xl:flex-col gap-8 mt-20">
        <div className="flex flex-col flex-[1_1_60%] min-w-[835px] xl:flex-auto h-full">
          <DailyActivity id={parseInt(id || "")} />
          <div className="flex max-xl:flex-col justify-between mt-8 gap-8">
            <SessionDuration />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
