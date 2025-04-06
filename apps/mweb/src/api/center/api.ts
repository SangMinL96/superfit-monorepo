import { execFetcher } from "@src/common/fetcher/fetcher";

const centerApplyApi = async (center_id: number) => {
  const result = await execFetcher(`/center/joinApply`, {
    method: 'POST',
    body: JSON.stringify({ center_id }),
  });
  return result;
};
const centerApplySuccessApi = async (center_id: number, user_id: number) => {
  const result = await execFetcher(`/center/applySuccess`, {
    method: 'POST',
    body: JSON.stringify({ center_id, user_id }),
  });
  return result;
};

type params3 = {
  type?: 'Y' | 'N';
  user_id: number;
};
const centerUserModaChangeApi = async ({ type, user_id }: params3) => {
  const result = await execFetcher(`/center/userModeChange`, {
    method: 'POST',
    body: JSON.stringify({ user_id, type }),
  });
  return result;
};
type params4 = {
  user_text: string;
  user_id: number;
};
const centerUserTempText = async ({ user_text, user_id }: params4) => {
  const result = await execFetcher(`/center/userTempText`, {
    method: 'POST',
    body: JSON.stringify({ user_id, user_text }),
  });
  return result;
};

export default centerApplyApi;
export { centerApplyApi, centerApplySuccessApi, centerUserModaChangeApi, centerUserTempText };
