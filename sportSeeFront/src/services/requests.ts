import { USER_ACTIVITY } from "../mocks/mockUserActivity";
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
      console.log(serializedResponse);

      const data = serializedResponse.data;
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
