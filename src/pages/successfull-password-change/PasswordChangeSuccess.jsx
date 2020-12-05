import React from 'react';
import { Link } from "react-router-dom";

import AccountEntryButton from '../../shared-components/account-entry-button/AccountEntryButton';
import FooterLink from '../../shared-components/footer-only-link/FooterLink';
import LogoOnlyHeader from '../../shared-components/logo-only-header/LogoOnlyHeader';

import styles from "./PasswordChangeSuccess.module.css";

const PasswordChangeSuccess = () => (
    <div className={styles.SuccessfullPasswordChange}>
        <LogoOnlyHeader borderBtm="unset" marginLt="unset" marginTp="29px"/>
        <div className={styles.PasswordSuccess}>
            <div className={styles.PasswordSuccessHeader}>Password changed</div>
            <div className={styles.PasswordSuccessBody}>You've successfully changed your 989workspace password.</div>
            <Link to="/login">
                <AccountEntryButton marginTp="50px" maxWidth="147px" borderRadius="5px">Login</AccountEntryButton>
            </Link>
        </div>
        <FooterLink/>
    </div>
);

export default PasswordChangeSuccess;
