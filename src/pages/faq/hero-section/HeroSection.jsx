import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = props => (
    <div className={styles.HeroSection}>
        <p className={styles.Title}>FAQ</p>
        <p className={styles.Description}>Have some questions bothering you, Let’s get you started.</p>
    </div>
);

export default HeroSection;