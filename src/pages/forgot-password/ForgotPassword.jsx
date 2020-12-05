import React from 'react';
import { Link } from 'react-router-dom';

import AccountEntryButton from '../../shared-components/account-entry-button/AccountEntryButton';
import FooterLink from '../../shared-components/footer-only-link/FooterLink';
import LogoOnlyHeader from '../../shared-components/logo-only-header/LogoOnlyHeader';

import styles from "./ForgotPassword.module.css";

const ForgotPassword = () => (
    <div className={styles.ForgotPassword}>
        <LogoOnlyHeader borderBtm="unset" marginLt="unset" marginTp="29px"/>
        <div className={styles.ResetPassword}>
            <div className={styles.ResetPasswordHeader}>Reset your password</div>
            <div className={styles.ResetPasswordSubHeader}>
                Enter the email address that you used to register and we’ll send you a link to reset your password.
            </div>
            <form className={styles.ResetPasswordForm}>
                <label htmlFor="reset_email">Email</label>
                <input type="email" name="email" id="reset_email" placeholder="michael_slyvester@gmail.com" required/>
                <Link to="/forgetPassword/mail">
                    <AccountEntryButton marginTp="40px" maxWidth="297px" borderRadius="5px">Send reset password email</AccountEntryButton>
                </Link>
            </form>
        </div>
        <FooterLink/>
    </div>
);

export default ForgotPassword;
