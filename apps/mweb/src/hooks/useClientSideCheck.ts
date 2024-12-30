import { useEffect, useState } from 'react';

export const useClientSideCheck = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    return isClient;
};
