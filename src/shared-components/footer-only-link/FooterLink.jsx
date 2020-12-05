import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./FooterLink.module.css";

const FooterLink = () =>(
    <div className={styles.FooterOnlyLink}>
        <div>&copy; 989Workspace</div>
        <div className={styles.FooterLink}><Link to="/forgetPassword">Terms & Conditions</Link></div>
        <div className={styles.FooterLink} ><Link to="/forgetPassword">Privacy Policy</Link></div>
    </div>
);

export default FooterLink;
