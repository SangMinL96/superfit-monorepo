import { UserInfoItf } from "@superfit/types/user";

export const setPayload = (data) => {
  return {
    id: data.id,
    login_type: data.login_type,
    user_id: data.user_id,
    user_hp: data.user_hp,
    user_name: data.user_name,
    user_nickname: data.user_nickname,
    user_email: data.user_email,
    user_gender: data.user_gender,
    user_birthday: data.user_birthday,
    center_id: data.center_id,
  } as UserInfoItf;
};

export const randomCode = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";

  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  const allChars = letters + numbers;
  let result = randomNumber;

  for (let i = 0; i < 3; i++) {
    result += allChars[Math.floor(Math.random() * allChars.length)];
  }

  return result
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};
