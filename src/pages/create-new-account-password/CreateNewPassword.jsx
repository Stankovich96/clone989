import React from 'react';
import { Link } from 'react-router-dom';

import AccountEntryButton from '../../shared-components/account-entry-button/AccountEntryButton';
import FooterLink from '../../shared-components/footer-only-link/FooterLink';
import LogoOnlyHeader from '../../shared-components/logo-only-header/LogoOnlyHeader';

import styles from "./CreateNewPassword.module.css";

const CreateNewPassword = () => (
    <div className={styles.CreateNewPassword}>
        <LogoOnlyHeader borderBtm="unset" marginLt="unset" marginTp="29px"/>
        <div className={styles.RecreatePassword}>
            <div className={styles.RecreatePasswordHeader}>Reset your password</div>
            <div className={styles.RecreatePasswordSubHeader}>
                Enter a new password to reset the password for your account, <span>michael_slyvester@gmail.com.</span>
            </div>
            <form className={styles.RecreatePasswordForm}>
               <div>
                <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder="************" required/>
               </div>

                <div>
                    <label htmlFor="password">Confirm password</label>
                    <input type="password" name="confirmPassword" id="password" placeholder="************" required/>
                </div>
                <Link to="/user/reset/passwordSuccessful">
                    <AccountEntryButton marginTp="40px" maxWidth="228px" borderRadius="5px">Set new password</AccountEntryButton>
                </Link>
            </form>
        </div>
        <FooterLink />
    </div>
);

export default CreateNewPassword;
