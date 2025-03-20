import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from '@superfit/design/button';
import Wrap from '@superfit/design/wrap';
import { useRouter } from 'next/router';
import { useClientSideCheck } from '@src/hooks/useClientSideCheck';
import ClassCreate from '@src/components/class/classCreate/ClassCreate';
const DateCalendar = dynamic(() => import("@src/components/class/dateCalendar/DateCalendar"), { ssr: false })

function Index() {
    const router = useRouter();
    const { step = '1' } = router.query;
    const isClient = useClientSideCheck()
    if (!isClient || !router.isReady) return null
    return (
        <div>
            {step === '1' &&
                <>
                    <DateCalendar />
                    <Wrap padding='0 20px' margin='20px 0 0'>
                        <Button name='step2' type='button' onClick={() => router.push({ query: { step: 2 } }, undefined, { shallow: true })} >수업 선택하러가기</Button>
                    </Wrap>
                </>
            }
            {step === '2' && <ClassCreate />}
        </div>
    )
}

export default Index