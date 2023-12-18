import { useEffect, useState } from "react";
import { User } from "../../types/user";
import { USER_MAIN_DATA_MOCKED } from "../../mocks/mockUserMainData";
import { useParams } from "react-router";
import Welcome from "./components/Welcome";
import DailyActivity from "./components/Activity";

function Dashboard({ useMockedData }: { useMockedData?: boolean }) {
  const [currentUserData, setCurrentUserData] = useState<User | undefined>(
    undefined
  );
  const { id } = useParams();
  console.log(id);

  const fetchUserData = async () => {
    if (useMockedData) {
      const user: User | undefined = USER_MAIN_DATA_MOCKED.find(
        (user) => user.id === parseInt(id || "")
      );
      console.log(user);

      setCurrentUserData(user);
    } else {
      // fake call API
      const response = await fetch(`http://localhost:3000/user/${id}`);
      const { data } = await response.json();
      console.log(data);

      setCurrentUserData(data);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, [useMockedData]);
  return (
    <div className=" h-screen ml-28 mt-16">
      <Welcome currentUserData={currentUserData} />
      <div className=" flex max-xl:flex-col gap-8 mt-20">
        <div className="flex flex-col flex-[1_1_60%] min-w-[835px] xl:flex-auto h-full">
          <DailyActivity id={parseInt(id || "")} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
