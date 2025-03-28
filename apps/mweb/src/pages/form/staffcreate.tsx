import styles from '@src/styles/form/StaffCreate.module.scss';
import Input from '@superfit/design/Input';
import Wrap from '@superfit/design/wrap';
import cx from 'clsx';
import { useRef, useState } from 'react';
import OblongInput from '@superfit/design/OblongInput';
import Svgs from '@superfit/design/Svgs';
import TextArea from '@superfit/design/TextArea';
import { Button } from '@superfit/design/button';

function Index() {
    const firstTag = useRef(false);
    const [tagValue, setTabValue] = useState('');
    const [tags, setTags] = useState<string[]>(['예) PT전문']);
    const onInsertTag = () => {
        if (!firstTag.current && tags[0].includes('예)')) {
            setTags([tagValue]);
            setTabValue('');
            return;
        }
        setTags(prev => prev.concat(tagValue));
        setTabValue('');
    };
    const onTagsRemove = (id: string) => {
        setTags(prev => prev.filter(f => f !== id));
    };
    return (
        <form className={cx(styles.wrap)}>
            <Input
                margin='0 0 30px'
                name='name'
                height='40px'
                type='text'
                placeholder={{ text: '예) 김아무개 트레이너' }}
                label='직원이름'
                required
            />
            <Wrap margin='15px 0 0'>
                <p className={cx(styles.sub_tit)}>특징태그</p>
                <Wrap margin='10px 0 0'>
                    <div className={cx(styles.box)}>
                        {tags.map(item => (
                            <>
                                <span key={item} className={cx(styles.tag)}>
                                    {item}
                                    <button type='button' onClick={() => onTagsRemove(item)}>
                                        <Svgs size={15} name='circleClose' />
                                    </button>
                                </span>
                            </>
                        ))}
                    </div>
                </Wrap>
            </Wrap>
            <Wrap margin='20px 0 0'>
                <OblongInput
                    value={tagValue}
                    onChange={e => setTabValue(e.target.value)}
                    inputClass={cx(styles.oblong_input)}
                    placeholder={{ text: '트레이너의 특징을 입력. 예)PT전문' }}
                />
                <button type='button' className={cx(styles.icon_box)} onClick={onInsertTag}>
                    <Svgs name='directUp' />
                </button>
            </Wrap>
            <Wrap margin='20px 0 0'>
                <p className={cx(styles.sub_tit)}>강사소개</p>
                <TextArea
                    wrapStyle={{ marginTop: 16 }}
                    placeholder={{
                        text: '예)\n<자격사항>\n- 1인 앱 개발자\n- 현직 업계1위 앱 개발자\n- 많은 사용 바랍니다',
                    }}
                />
            </Wrap>
            <Button margin='20px 0 0' type='submit'>생성하기</Button>
        </form>
    );
}

export default Index;
