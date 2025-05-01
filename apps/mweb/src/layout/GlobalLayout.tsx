import { useNativeRouter } from '@src/hooks/useNativeRouter';
import React from 'react';
type Props = {
    children: React.ReactNode;
};

function GlobalLayout({ children }: Props) {
    const nRouter = useNativeRouter();
    return (
        <div style={{ paddingBottom: typeof window !== 'undefined' && window.ReactNativeWebView ? 0 : 80 }}>
            {children}
            {!(typeof window !== 'undefined' && window.ReactNativeWebView) && (
                <div
                    style={{
                        position: 'fixed',
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        height: 80,
                        backgroundColor: '#fff',
                        width: '100%',
                    }}
                >
                    <button type='button' style={{ padding: 15 }} onClick={() => nRouter.push('/home/partner')}>
                        홈
                    </button>
                    <button type='button' style={{ padding: 15 }} onClick={() => nRouter.push('/schedule')}>
                        일정
                    </button>
                    <button type='button' style={{ padding: 15 }} onClick={() => nRouter.push('/create')}>
                        생성
                    </button>
                    <button type='button' style={{ padding: 15 }} onClick={() => nRouter.push('/profile')}>
                        내정보
                    </button>
                </div>
            )}
        </div>
    );
}

export default GlobalLayout;
