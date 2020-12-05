import React from 'react';
import AccountEntry from '../../account-entry/AccountEntry';

import styles from "./AccountVerification.module.css";

const AccountCreationVerification = (props) => (
    <div className={styles.VerificationCard}>
        <div className={styles.VerifyHeader}>Verification Code</div>
        <div className={styles.VerifyMessage}>
            The confirmation code is sent to michael_slyvester@gmail.com. Please enter it below.
        </div>
        <div className={styles.VerifyInputBox}>
            <span className={styles.VerifyBox}><input type="text" name="account-ver" placeholder="0" value="4" maxLength="1"/></span>
            <span className={styles.VerifyBox}><input type="text" name="account-ver" placeholder="0" value="8" maxLength="1"/></span>
            <span className={styles.VerifyBox}><input type="text" name="account-ver" placeholder="0" value="3" maxLength="1"/></span>
            <span className={styles.VerifyBox}><input type="text" name="account-ver" placeholder="0" value="2" maxLength="1"/></span>
            <span className={styles.VerifyBox}><input type="text" name="account-ver" placeholder="0" maxLength="1" /></span>
        </div>
    </div>
);

const AccountVerificaton = () => {
    return (
        <div>
            <AccountEntry>
                {AccountCreationVerification()}
            </AccountEntry>
        </div>
    )
}

export default AccountVerificaton;
