import { execFetcher } from '@src/common/fetcher/fetcher';
import { StaffCreateItf } from '@superfit/types/staff';

export const postStaffCreate = async (data: StaffCreateItf) => {
    const result = await execFetcher(`/staff/create`, {
        method: 'POST',
        data,
    });
    return result;
};
