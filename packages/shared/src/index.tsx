export function getParticle(word: string) {
  if (typeof word !== "string" || word.length === 0) {
    throw new Error("단어를 입력하세요.");
  }
  const lastChar = word[word.length - 1];
  const lastCharCode = lastChar.charCodeAt(0);
  if (lastCharCode < 0xac00 || lastCharCode > 0xd7a3) {
    return word + "를";
  }
  const hasFinalConsonant = (lastCharCode - 0xac00) % 28 !== 0;
  return word + (hasFinalConsonant ? "을" : "를");
}
export function numberWithCommas(number: number) {
  if (typeof number !== "number") {
    throw new Error("숫자를 입력하세요.");
  }
  return number.toLocaleString("en-US");
}
/**
 * 만약 JSON이 아닐 경우 받은 문자열 출력
 */
export const parseJson = (str: string) => {
  try {
    const obj = JSON.parse(str);
    if (obj && typeof obj === `object`) {
      return JSON.parse(str);
    }
  } catch (err) {
    return str;
  }
  return str;
};
/**
 * 만약 배열이 아닐경우 빈배열 리턴
 * es6 배열 함수 undefined 에러 방지
 */
export const parseArray = (data: any) => {
  try {
    if (Array.isArray(data)) {
      return data;
    }
    return [] as [];
  } catch (err) {
    return [] as [];
  }
};
/**
 * 데이터가 있으면 true
 * 데이터가 없으면 false
 */
export const isEmpty = (data: any) => {
  if (
    data === "" ||
    !data ||
    data.length < 1 ||
    data === "null" ||
    data === "undefined"
  ) {
    return false;
  }
  return true;
};

export const parseSplit = (value: string, type: string): string[] | string => {
  if (isEmpty(value)) {
    return value.split(type);
  }
  return "";
};

export const timeToMinutes = (time: string): number => {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
};
