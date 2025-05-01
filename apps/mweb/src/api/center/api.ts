import { execFetcher } from '@src/common/fetcher/fetcher';
import { CenterCreateItf } from '@superfit/types/center';

export const centerCreateApi = async (data: CenterCreateItf) => {
    const result = await execFetcher(`/center/create`, {
        method: 'POST',
        data,
    });
    return result;
};
