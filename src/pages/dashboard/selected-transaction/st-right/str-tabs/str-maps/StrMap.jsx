import React from 'react';
import styles from './StrMap.module.css';
import MapPlaceholder from '../../../../../../assets/dashboard/dbMapPlaceholder.png';

const StrMap = props => (
 <div className={styles.StrMap}>
     <img src={MapPlaceholder} alt='Map' />
 </div>
);

export default StrMap;