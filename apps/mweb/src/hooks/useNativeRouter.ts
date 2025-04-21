import { useRouter } from 'next/router';

type PushType = {
    url: string;
    headerName?: string;
};

export const useNativeRouter = () => {
    const router = useRouter();
    const push = (to: string | PushType) => {
        let url: string;
        let headerName: string | undefined;
        if (typeof to === 'string') {
            url = to;
        } else {
            url = to.url;
            headerName = to.headerName;
        }
        if (!window.ReactNativeWebView) {
            if (window.confirm('웹사이트 이동하겠습니까?')) {
                return router.push(url);
            }
            return;
        }
        window.ReactNativeWebView.postMessage(JSON.stringify({ type: 'gotoStack', url, headerName }));
    };

    const back = () => {
        if (router.back() as any) {
            return;
        } else {
            return window.ReactNativeWebView.postMessage('stackBack');
        }
    };
    return { push, back };
};
