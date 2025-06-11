export type LoginUser = {
  id: string;
  email: string;
  name: string;
  phoneNum: string;
  address: string;
  createAt: string; // ISO 날짜 문자열
  salt: string;
  password: string; // 해시된 비밀번호
};
