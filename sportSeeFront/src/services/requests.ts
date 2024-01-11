import { USER_ACTIVITY } from "../mocks/mockUserActivity";
import { User } from "../types/user";
import { USER_MAIN_DATA_MOCKED } from "../mocks/mockUserMainData";
import { USER_AVERAGE_SESSIONS_MOCKED } from "../mocks/mockAverageSessions";
import { USER_PERFORMANCE_MOCKED } from "../mocks/mockUserPerformance";
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
export const fetchUserData = async (id: string, useMockedData?: boolean) => {
  if (useMockedData) {
    const user: User | undefined = USER_MAIN_DATA_MOCKED.find(
      (user) => user.id === parseInt(id || "")
    );
    return user;
  } else {
    // fake call API
    const response = await fetch(`http://localhost:3000/user/${id}`);
    const { data } = await response.json();
    return data;
  }
};