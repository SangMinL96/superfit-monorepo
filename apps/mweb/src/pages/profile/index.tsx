import { Button } from '@mee-monorepo/design/button';
import OblongInput from '@mee-monorepo/design/OblongInput';
import React from 'react';

function ProfileIndex() {
  return (
    <div style={{ padding: 100 }}>
      <Button />
      <div style={{ padding: 100 }}>
        <OblongInput
          type='text'
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
