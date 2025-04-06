import React from 'react';
import styles from './Spinner.module.scss';
import cx from 'clsx';

function Spinner() {
    return <div className={cx(styles.wrap)} />;
}

export default Spinner;
