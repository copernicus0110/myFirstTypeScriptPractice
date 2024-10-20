const firstName = "石田";

const age = 24;

let isHuman = true;
isHuman = false;

let birthDay = new Date("1999-01-01");

// Union型
let color: "red" | "yellow" | "green" = "red";
let rank: "S" | "A" | "B" | "C" = "S";

// Any型 基本使わない
let anyData: any = "文字列";
anyData = 1;
anyData = true;
anyData = new Date("1999-09-09");

// void型　関数
let fncLog = () => {
  console.log("ログを出力しました");
};

let fncSum = (a: number, b: number) => {
  return a + b;
};
fncSum(1, 3);

// オブジェクト
let object = {
  name: "ishida",
  age: 24,
  isHuman: true,
  birthDay: new Date("1999-09-09"),
};

// エイリアス
type User = {
  name: string;
  age: number;
  isHuman: boolean;
  birthDay: Date;
  phoneNumber?: string;
};

let user2: User = {
  name: "ishida",
  age: 24,
  isHuman: true,
  birthDay: new Date("1888-09-09"),
};

// 配列
let array: number[] = [1, 2, 3, 4, 5];

// タブル
let tuple: [number, string, boolean] = [24, "ishida", true];

// 連想配列
let userArray: User[] = [
  {
    name: "ishida",
    age: 24,
    isHuman: true,
    birthDay: new Date("1888-09-09"),
  },
  {
    name: "ishida",
    age: 24,
    isHuman: true,
    birthDay: new Date("1888-09-09"),
  },
];

type UserDetail = {
  prefecture: string;
  sex: string;
};

type UserDetailInfo = User & UserDetail;

let user3: UserDetailInfo = {
  name: "ishida",
  age: 24,
  isHuman: true,
  birthDay: new Date("1888-09-09"),
  prefecture: "東京",
  sex: "man",
};

type UserDetailInfo2 = {
  user: User;
  userDetail: UserDetail;
};

let user4: UserDetailInfo2 = {
  user: {
    name: "ishida",
    age: 24,
    isHuman: true,
    birthDay: new Date("1888-09-09"),
  },
  userDetail: {
    prefecture: "東京",
    sex: "man",
  },
};
