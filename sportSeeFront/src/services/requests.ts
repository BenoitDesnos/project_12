import { USER_ACTIVITY } from "../mocks/mockUserActivity";
import { User } from "../types/user";
import { USER_MAIN_DATA_MOCKED } from "../mocks/mockUserMainData";
import { USER_AVERAGE_SESSIONS_MOCKED } from "../mocks/mockAverageSessions";
import { USER_PERFORMANCE_MOCKED } from "../mocks/mockUserPerformance";
import { NavigateFunction } from "react-router";
const DOMAIN = "http://localhost:3000";
export const fetchUserActivity = async (id: number, useMock: boolean) => {
  try {
    if (!id) {
      return null;
    }

    if (useMock) {
      const data = USER_ACTIVITY.find((activity) => activity.userId === id);
      return data;
    } else {
      const response = await fetch(`${DOMAIN}/user/${id}/activity`);
      const serializedResponse = await response.json();

      const data = serializedResponse.data;
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
export const fetchUserAverageSessions = async (
  id: number,
  useMock: boolean
) => {
  try {
    if (!id) {
      return null;
    }

    if (useMock) {
      const data = USER_AVERAGE_SESSIONS_MOCKED.find(
        (averageSessions) => averageSessions.userId === id
      );
      return data;
    } else {
      const response = await fetch(`${DOMAIN}/user/${id}/average-sessions`);
      const serializedResponse = await response.json();
      const data = serializedResponse.data;
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
export const fetchUserPerformance = async (id: number, useMock: boolean) => {
  try {
    if (!id) {
      return null;
    }

    if (useMock) {
      const data = USER_PERFORMANCE_MOCKED.find(
        (performance) => performance.userId === id
      );
      return data;
    } else {
      const response = await fetch(`${DOMAIN}/user/${id}/performance`);
      const serializedResponse = await response.json();
      const data = serializedResponse.data;
      return data;
    }
  } catch (error) {
    console.error(error);
  }
};
export const fetchUserData = async (
  id: string,
  navigate: NavigateFunction,
  useMockedData?: boolean
) => {
  if (useMockedData) {
    const user: User | undefined = USER_MAIN_DATA_MOCKED.find(
      (user) => user.id === parseInt(id || "")
    );
    return user;
  } else {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      if (response.status === 404) {
        navigate("/not-found", { replace: true });
      }
      const { data } = await response.json();
      return data;
    } catch (error) {
      navigate("/server-error", { replace: true });
      console.error(error);
    }
  }
};