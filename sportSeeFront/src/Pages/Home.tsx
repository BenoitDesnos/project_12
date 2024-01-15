import { useNavigate } from "react-router";

import { useState } from "react";
import { USER_MAIN_DATA_MOCKED } from "../mocks/mockUserMainData";

export default function Home() {
  const navigate = useNavigate();
  const [useMockedDate, setUseMockedDate] = useState<boolean>(false);
  const handleNavigationClick = (uri: string) => {
    navigate(uri);
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <h2 className="text-xl mb-5 tracking-widest">Sport See : connexion</h2>

      <input
        type="button"
        className={`${
          useMockedDate ? "bg-slate-900" : "bg-slate-900"
        } p-4 m-2 rounded-md text-white w-56 hover:bg-slate-700 transition-all cursor-pointer`}
        value="Utiliser l'API"
        onClick={() => {
          setUseMockedDate(false);
          handleNavigationClick("/dashboard/18");
        }}
      />
      <div className="flex gap-4">
        {useMockedDate ? (
          USER_MAIN_DATA_MOCKED.map((user, index) => (
            <input
              key={index}
              type="button"
              className="bg-slate-900 p-4 m-2 rounded-md text-white w-fit hover:bg-slate-700 transition-all cursor-pointer"
              value={`Se connecter en tant que ${user.userInfos.firstName} ${user.userInfos.lastName}`}
              onClick={() =>
                handleNavigationClick("/dashboard/mock/" + user.id)
              }
            />
          ))
        ) : (
          <input
            type="button"
            className="bg-slate-900 p-4 m-2 rounded-md text-white w-56 hover:bg-slate-700 transition-all cursor-pointer"
            value="Utiliser Mock"
            onClick={() => setUseMockedDate(true)}
          />
        )}
      </div>
    </div>
  );
}
