import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as SuccessIcon } from '../../../assets/meetingroom/success-icon.svg';
import AccountEntryButton from '../../../shared-components/account-entry-button/AccountEntryButton';
import AccountEntry from '../../account-entry/AccountEntry';

import styles from "./VerificationSuccess.module.css";

const VerificationSuccess = () => (
    <div className={styles.VerificationSuccess}>
        <div className={styles.SuccessIcon}><SuccessIcon /></div>
        <div className={styles.MessageHead}>Email address verified</div>
        <div className={styles.MessageBody}>
            All account data is linked to an email. To change it, you need to go to your profile in your dashboard
        </div>
        <Link to="/createPassword"><AccountEntryButton marginTp="30px" maxWidth="155px">OK</AccountEntryButton></Link>
    </div>
);

const AccountVerificationSuccess = () => (
    <AccountEntry>
        {VerificationSuccess()}
    </AccountEntry>
);

export default AccountVerificationSuccess;
