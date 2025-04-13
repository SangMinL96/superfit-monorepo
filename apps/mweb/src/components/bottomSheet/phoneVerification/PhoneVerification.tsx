import clsx from 'clsx';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import styles from './PhoneVerification.module.scss';
import OblongInput from '@superfit/design/OblongInput';
import { postAuthCheckApi, postHpAuthNumSend } from '@src/api/auth/api';
type Props = {
    timeover: () => void;
    userHp: string;
    onResult: (result: boolean) => void;
};
const PhoneVerification = ({ timeover, userHp, onResult }: Props) => {
    const [timeLeft, setTimeLeft] = useState(180);
    const timerRef = useRef<any>(null);
    const startTimer = useCallback(async () => {
        setTimeLeft(180);

        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev < 1) {
                    clearInterval(timerRef.current);
                }
                return prev - 1;
            });
        }, 1000);
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            alert('입력시간 초과되었습니다\n다시 요청해주세요');
            if (timeover) {
                timeover();
            }
        }
    }, [timeLeft, timeover]);

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            if (e.target.value.length === 6) {
                const { result } = await postAuthCheckApi(userHp, e.target.value);
                if (result === 'success') {
                    onResult(true);
                } else {
                    onResult(false);
                }
            }
        } catch (e) {
            console.error(e);
        }
    };

    const formatTime = (seconds: number) => {
        const min = String(Math.floor(seconds / 60)).padStart(2, '0');
        const sec = String(seconds % 60).padStart(2, '0');
        return `${min}:${sec}`;
    };

    useEffect(() => {
        (async () => {
            try {
                const { result } = await postHpAuthNumSend(userHp);
                if (result === 'success') {
                    startTimer();
                }
                if (result === 'fail') {
                    alert('인증번호를 보낼 수 없습니다');
                }
            } catch (e) {
                console.error(e);
            }
        })();

        return () => {
            if (timerRef.current) clearInterval(timerRef.current); // 컴포넌트 unmount 시 정리
        };
    }, [startTimer, userHp]);
    return (
        <div className={clsx(styles.wrap)}>
            <p className={clsx(styles.txt)}>남은 시간: {formatTime(timeLeft)}</p>
            <OblongInput placeholder={{ text: '인증번호 입력해주세요' }} onChange={onChange} />
            {/* <div style={{ marginTop: '1rem', fontSize: '1.5rem' }}>
                {isRunning ? (
                    <span>남은 시간: {formatTime(timeLeft)}</span>
                ) : timeLeft === 0 ? (
                    <span style={{ color: 'red' }}>인증시간 만료</span>
                ) : (
                    <span>인증 대기 중</span>
                )}
            </div> */}
        </div>
    );
};

export default PhoneVerification;
