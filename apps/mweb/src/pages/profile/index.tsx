import { Button } from '@mee-monorepo/design/button';
import Input from '@mee-monorepo/design/Input';
import React from 'react';

function ProfileIndex() {
  return (
    <div style={{ padding: 100 }}>
      <Button />
      <div style={{ padding: 100 }}>
        <Input
          type='text'
          label='이름'
          name='id'
          fontSize='1.8rem'
          color='var(--block300)'
          placeholder={{ text: '아이디를 입력하세요.' }}
        />
      </div>
    </div>
  );
}

export default ProfileIndex;
