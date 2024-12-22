import React from 'react';
import styles from './UserSearchInput.module.scss';
import cx from 'clsx';
import OblongInput from '@superfit/design/OblongInput';
function UserSearchInput() {
     return (
          <div className={cx(styles.wrap)}>
               <OblongInput placeholder={{ text: "회원명, 휴대폰 번호로 검색", color: "#414141", fontSize: "1.3rem", fontWeight: '400' }} fontSize='1.3rem' height='4rem' name='searchInput' isSearch />
          </div>
     );
}

export default UserSearchInput;