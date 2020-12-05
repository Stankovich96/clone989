import React from 'react';
import styles from './Body.module.css';

const Body = props => (
    <div className={styles.Body}>
        {props.children}
    </div>
);

export default Body;