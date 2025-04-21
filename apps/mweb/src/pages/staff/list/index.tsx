import React from 'react';
import cx from 'clsx';
import styles from '@src/styles/staff/List.module.scss';
import Svgs from '@superfit/design/Svgs';
import { Button } from '@superfit/design/button';
import Wrap from '@superfit/design/wrap';
import Divide from '@superfit/design/Divide';
import Card from '@superfit/design/Card';
import { useNativeRouter } from '@src/hooks/useNativeRouter';
import EmptyBox from '@superfit/design/EmptyBox';
function Index() {
    const nRouter = useNativeRouter();
    return (
        <div className={cx(styles.wrap)}>
            <h3 className={cx(styles.tit)}>직원 관리</h3>
            <Wrap padding='0 20px' direction='row' justify='space-between' align='flex-end'>
                <p className={cx(styles.desc)}>
                    - 이름 뒤에 강사, 트레이너등 같이 붙여주세요
                    <br />
                    - 강사의 정보카드를 클릭하여 수정을 할 수 있어요
                </p>
                <Button
                    type='button'
                    width='50px'
                    fontSize='1.2rem'
                    size={50}
                    onClick={() => nRouter.push('/form/staffcreate')}
                >
                    직원추가
                </Button>
            </Wrap>
            <Divide value={10} margin='30px 0 0' />
            <Wrap margin='20px 0 0' padding='0 20px' gap='15px'>
                <EmptyBox>현재 등록된 직원이 존재하지 않습니다<br />간단하게 직원을 추가해보세요</EmptyBox>
                <Card onClick={() => nRouter.push("/form/staffmodify/123")}>
                    <span className={cx(styles.tit_box)}>
                        <span className={cx(styles.img)}>
                            <Svgs name='avatarMan' size={50} />
                        </span>
                        <span className={cx(styles.name_box)}>
                            <em className={cx(styles.name)}>이상민 강사</em>
                            <span className={cx(styles.tag_box)}>
                                <em className={cx(styles.tag)}>PT전문</em>
                                <em className={cx(styles.tag)}>스피닝</em>
                            </span>
                        </span>
                    </span>
                    <span
                        className={cx(styles.self_ppt)}
                    >{`<수상경력>\n\n- 인하대학교 스포츠과학과 졸업\n- 생활 스포츠지도사2급 보디빌딩\n- 프로보디빌딩 챔피언\n\n\n<자격증명>\n\n- 인하대학교 스포츠과학과 졸업\n- 생활 스포츠지도사2급 보디빌딩\n- 프로보디빌딩 챔피언`}</span>
                </Card>
                <Card onClick={() => nRouter.push("/form/staffmodify/123")}>
                    <span className={cx(styles.tit_box)}>
                        <span className={cx(styles.img)}>
                            <Svgs name='avatarMan' size={50} />
                        </span>
                        <span className={cx(styles.name_box)}>
                            <em className={cx(styles.name)}>이다슬 강사</em>
                            <span className={cx(styles.tag_box)}>
                                <em className={cx(styles.tag)}>PT전문</em>
                                <em className={cx(styles.tag)}>스피닝</em>
                            </span>
                        </span>
                    </span>
                    <span
                        className={cx(styles.self_ppt)}
                    >{`<수상경력>\n\n- 인하대학교 스포츠과학과 졸업\n- 생활 스포츠지도사2급 보디빌딩\n- 프로보디빌딩 챔피언\n\n\n<자격증명>\n\n- 인하대학교 스포츠과학과 졸업\n- 생활 스포츠지도사2급 보디빌딩\n- 프로보디빌딩 챔피언`}</span>
                </Card>
            </Wrap>
        </div>
    );
}

export default Index;
