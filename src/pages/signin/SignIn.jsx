import React from 'react';
import { Link } from 'react-router-dom';

import AccountEntryButton from '../../shared-components/account-entry-button/AccountEntryButton';
import AccountEntry from "../../components/account-entry/AccountEntry";

import styles from "./SignIn.module.css";

const signInForm = (props) =>( 
    <div className={styles.SignInWrapper}>
        <div className={styles.SignInHeader}>Welcome back</div>
        <div className={styles.SignInText}>Great to see you again! Enter your details below to login to your 989Workspace account.</div>
        <form>
            <label htmlFor="email">
                Email
                <input type="email" name="email" id="email" placeholder="michael_slyvester@gmail.com" required/>
            </label>

            <label htmlFor="password">
                Password
                <input type="password" name="password" id="password" placeholder="*************" required/>
            </label>
            
            <Link to="/forgetPassword"><span className={styles.ForgotPassword}>Forgot password?</span></Link>

            <Link to="/"><AccountEntryButton marginTp="50px">Login</AccountEntryButton></Link>
        </form>
        <span className={styles.CreateAccountQuery}>Don’t have an account? <span ><Link to="/signUp" className={styles.CreateAccountLink} >Create account</Link></span></span>
    </div>
);

const SignIn = () => {
    return (
        <AccountEntry>
            {signInForm()}
        </AccountEntry>
    )
}

export default SignIn;
