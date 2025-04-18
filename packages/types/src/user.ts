// shared/src/user.ts
export interface UserInfoItf {
  id: number;
  login_type: "basic" | "business" | "kakao" | "naver";
  user_id?: string;
  user_hp: string;
  user_name: string;
  user_nickname: string;
  user_email: string;
  user_gender: "M" | "G";
  user_birthday: string;
  pw_salt?: string;
  user_pw?: string;
}
