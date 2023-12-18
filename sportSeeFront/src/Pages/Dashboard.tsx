import { useEffect, useState } from "react";
import { User } from "../types/user";
import { USER_MAIN_DATA_MOCKED } from "../mocks/mockUserMainData";
import { useParams } from "react-router";
import Welcome from "../components/Welcome";

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
    }
  };
  useEffect(() => {
    fetchUserData();
  }, [useMockedData]);
  return (
    <div className="w-screen h-screen ml-28 mt-16">
      <Welcome currentUserData={currentUserData} />
      <p>Mocked data : {useMockedData ? "yes" : "no"}</p>
    </div>
  );
}

export default Dashboard;
