import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useClientSideCheck } from '@src/hooks/useClientSideCheck';
import ClassCreate from '@src/components/class/classCreate/ClassCreate';
import { useClassCreateState } from '@src/hooks/state/useClassCreateState';
const DateCalendar = dynamic(() => import('@src/components/class/dateCalendar/DateCalendar'), { ssr: false });

function Index() {
    const router = useRouter();
    const { step = '1' } = router.query;
    const isClient = useClientSideCheck();
    const { 선택날짜 } = useClassCreateState();
    useEffect(() => {
        if (step === '2' && 선택날짜.length === 0) {
            router.back();
        }
    }, [router, step, 선택날짜.length]);
    if (!isClient || !router.isReady) return null;
    return (
        <div>
            {step === '1' && <DateCalendar />}
            {step === '2' && <ClassCreate />}
        </div>
    );
}

export default Index;
