export type UserInfos = {
  firstName: string;
  lastName: string;
  age: number;
};
export type KeyData = {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};
export type User = {
  id: number;
  userInfos: UserInfos;
  todayScore?: number;
  score?: number;
  keyData: KeyData;
};
export interface Session {
  day: string;
  kilogram: number;
  calories: number;
}

export interface UserActivity {
  userId: number;
  sessions: Session[];
}

export interface UserAverageSessions {
  userId: number;
  sessions: [
    {
      day: number;
      sessionLength: number;
    }
  ];
}

export interface UserPerformance {
  userId: number;
  kind: {
    [key: number]: string;
  };
  data: [
    {
      value: number;
      kind: number;
    }
  ];
}
