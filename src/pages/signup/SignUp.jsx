import React from 'react';
import { Link  } from "react-router-dom";

import AccountEntryButton from '../../shared-components/account-entry-button/AccountEntryButton';
import AccountEntry from "../../components/account-entry/AccountEntry";

import { ReactComponent as GoogleLogo } from '../../assets/meetingroom/google-logo.svg';
import { ReactComponent as FacebookLogo } from '../../assets/meetingroom/facebook-logo.svg';
import { ReactComponent as AppleLogo } from '../../assets/meetingroom/apple-logo.svg';

import styles from "./SignUp.module.css";

const SignUpForm = (props) =>( 
    <div className={styles.SignUpWrapper}>
        <div className={styles.SignUpHeader}>Create your account</div>
        <div className={styles.SignUpText}>Create an account to easily use 989workspace services.</div>
        <span className={styles.CreateAccountQuery}>Already have an account? <span><Link to="/login" className={styles.CreateAccountLink}>Sign in</Link></span></span>
         <form >
            <label htmlFor="email">
                <span>Email</span> 
                <input type="email" name="email" id="email" placeholder="michael_slyvester@gmail.com" required/>
            </label>

            <Link to="/accountverification"><AccountEntryButton marginTp="40px">Get Started</AccountEntryButton></Link>
        </form>
        <span className={styles.SignUpWith}>or signup with one click</span>
        <div className={styles.SignUpLogos}>
            <span className={styles.googleLogo}><GoogleLogo /></span>
            <span className={styles.googleLogo}><FacebookLogo /></span>
            <span className={styles.googleLogo}><AppleLogo /></span>
        </div>
    </div>
);

const SignUp = () => {
    return (
        <div>
            <AccountEntry>
                {SignUpForm()}
            </AccountEntry>
        </div>
    )
}

export default SignUp;
