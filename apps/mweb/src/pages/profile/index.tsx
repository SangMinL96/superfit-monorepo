import BottomSheet from '@superfit/design/BottomSheet';
import { Button } from '@superfit/design/button';
import Input from '@superfit/design/Input';
import React, { useState } from 'react';

function ProfileIndex() {
  const [open, setOpen] = useState(true);
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
      <BottomSheet title='' open={open} onClose={() => setOpen(false)}>
        <div>test</div>
      </BottomSheet>
    </div>
  );
}

export default ProfileIndex;
