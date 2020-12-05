import React from 'react';
import CRBottom from './c-right-bottom/CRBottom';
import CRTop from './c-right-top/CRTop';
import styles from './CRight.module.css';

const CRight = props => (
    <div className={styles.CRight}>
            {props.crTop}
            <CRBottom />
    </div>
);

export default CRight;