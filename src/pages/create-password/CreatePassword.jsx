import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import AccountEntry from '../../components/account-entry/AccountEntry';
import AccountEntryButton from '../../shared-components/account-entry-button/AccountEntryButton';
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';

import styles from "./CreatePassword.module.css";

const CreatePassword = () => {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    const onSubmit = data => { console.log(data); };

    const passwordCreation = () => {
        return(
            <div className={styles.CreatePassword}>
                <div className={styles.PasswordHeader}>Create your account password</div>
                <div className={styles.PasswordSubHeader}>
                    Lorem ipsum non sollicitudin lobortis quis quis vel, sem nisl turpis. Arcu libero volutpat amet, elementum. 
                </div>
                <label htmlFor="createPassword">Password</label>
                <div className={styles.PasswordGroup} >
                    <input type={passwordShown ? "text" : "password"} name="createPassword" id="createPassword" placeholder="************"/>
                    <span className={styles.PasswordIcon} onClick={togglePasswordVisiblity}>{passwordShown ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</span>
                </div>
                <Link to="/">
                    <AccountEntryButton marginTp="40px" /* buttonFn={onSubmit("hello")} */>
                        Create password
                    </AccountEntryButton>
                </Link>
            </div>
        )
    };

    return(
        <AccountEntry>{passwordCreation()}</AccountEntry>
    )
};

export default CreatePassword;
