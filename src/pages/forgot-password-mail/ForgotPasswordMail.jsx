import React from 'react';
import { Link } from "react-router-dom";

import LogoOnlyHeader from "../../shared-components/logo-only-header/LogoOnlyHeader";
import FooterLink from "../../shared-components/footer-only-link/FooterLink";
import AccountEntryButton from "../../shared-components/account-entry-button/AccountEntryButton";

import styles from "./ForgotPasswordMail.module.css";

const ForgotPasswordMail = () => (
    <div className={styles.ForgotPasswordMail}>
        <LogoOnlyHeader borderBtm="unset" marginLt="unset" marginTp="29px"/>
        <div className={styles.CheckMail}>
            <div className={styles.CheckMailHeader}>Check your email</div>
            <div className={styles.CheckMailMessage}>
                An email with password resent link is on its way to <span>micheal_slyvester25@gmail.com.</span> If you don’t see the 
                email in your inbox, remember to try your spam folder too. Follow the instructions to reset your password.
            </div>
            <Link to="/login">
                <AccountEntryButton maxWidth="205px" borderRadius="5px">Return to login</AccountEntryButton>
            </Link>
            <div className={styles.GetEmail}>
                <div>Didn't get the mail?</div>
                <Link to="/forgetPassword" className={styles.ResendEmail}>Resend email with password resent link</Link>
            </div>
            <div className={styles.Support}>
                If you aren’t getting the email, don’t hesitate to <span>contact support.</span>
            </div>
        </div>
        <FooterLink />
    </div>
);

export default ForgotPasswordMail;
