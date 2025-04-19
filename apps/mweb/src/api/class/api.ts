import { execFetcher } from '@src/common/fetcher/fetcher';
import { ClassCreateItf } from '@superfit/types/class';

export const postClassCreate = async ({ className }: ClassCreateItf) => {
    const result = await execFetcher(`/class/create`, {
        method: 'POST',
        data: { className },
    });
    return result;
};
