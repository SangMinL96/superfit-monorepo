import { execFetcher } from '@src/common/fetcher/fetcher';

export const postTempCenter = async () => {
    const result = await execFetcher(`user/temp/center`, {
        method: 'POST',
    });
    return result;
};
