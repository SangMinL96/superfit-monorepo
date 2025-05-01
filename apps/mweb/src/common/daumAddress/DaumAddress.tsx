import useScript from '@src/hooks/useScript';
import React, { useEffect, useRef } from 'react';
interface AddressWebviewProps {
    onConfirm: (address: any) => void;
}

const DaumAddress = ({ onConfirm }: AddressWebviewProps) => {
    const wrapRef = useRef<HTMLDivElement>(null);
    const daumAddressStatus = useScript('https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js');
    useEffect(() => {
        const wrapEl = wrapRef.current;
        if (!wrapEl || !daumAddressStatus) return;
        wrapEl.style.minHeight = '250px';
        wrapEl.style.maxHeight = '500px';
        const currentScroll = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        new window.daum.Postcode({
            submitMode: false,
            oncomplete: function (data: any) {
                // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

                // 각 주소의 노출 규칙에 따라 주소를 조합한다.
                // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
                let addr = ''; // 주소 변수
                let extraAddr = ''; // 참고항목 변수

                //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
                if (data.userSelectedType === 'R') {
                    // 사용자가 도로명 주소를 선택했을 경우
                    addr = data.roadAddress;
                } else {
                    // 사용자가 지번 주소를 선택했을 경우(J)
                    addr = data.jibunAddress;
                }

                // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
                if (data.userSelectedType === 'R') {
                    // 법정동명이 있을 경우 추가한다. (법정리는 제외)
                    // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
                    if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
                        extraAddr += data.bname;
                    }
                    // 건물명이 있고, 공동주택일 경우 추가한다.
                    if (data.buildingName !== '' && data.apartment === 'Y') {
                        extraAddr += extraAddr !== '' ? ', ' + data.buildingName : data.buildingName;
                    }
                    // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
                    if (extraAddr !== '') {
                        extraAddr = ' (' + extraAddr + ')';
                    }
                }
                wrapEl.style.display = 'none';
                document.body.scrollTop = currentScroll;
                onConfirm(addr);
            },
            // 우편번호 찾기 화면 크기가 조정되었을때 실행할 코드를 작성하는 부분. iframe을 넣은 element의 높이값을 조정한다.
            onresize: function (size: any) {
                wrapEl.style.height = size.height + 'px';
            },
            width: '100%',
            height: '100%',
        }).embed(wrapEl);

        // iframe을 넣은 element를 보이게 한다.
        wrapEl.style.display = 'block';
    }, [daumAddressStatus, wrapRef, onConfirm]);

    return <div ref={wrapRef} style={{ display: 'none', position: 'relative' }} />;
};

export default React.memo(DaumAddress);
