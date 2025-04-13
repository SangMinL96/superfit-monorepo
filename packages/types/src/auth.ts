export interface signupParamsItf {
  userName: string;
  userBirthday: string;
  userGender: "M" | "G";
  userId: string;
  userPw: string;
  userNickname: string;
  userHp: string;
  loginType: "basic" | "business";
  userEmail: string;
  businessNum?: string;
  centerName?: string;
}

export interface oAuthSignupParamsItf {
  userName: string;
  userNickname: string;
  userGender: string;
  userHp: string;
  userBirthday: string;
  userEmail: string;
  snsId?: string;
  loginType: "kakao" | "naver" | "apple";
}

export interface naverOauthInfoItf {
  id: string;
  gender: string;
  email: string;
  mobile: string;
  mobile_e164: string;
  name: string;
  birthyear: string;
}
