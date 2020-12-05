import React from 'react';

import LogoOnlyHeader from '../../shared-components/logo-only-header/LogoOnlyHeader';
import AccountEntryCarousel from "./AccountEntry.utils";
import styles from "./AccountEntry.module.css";

const AccountEntry = (props) => {
    return (
        <div className={styles.Wrapbox}>
            <div className={styles.WrapboxLeft}>
                <LogoOnlyHeader borderBtm="unset" marginLt="unset" />
                {props.children}
                <span className={styles.TermsAndCondition}>By continuing you agree with our <span className={styles.BrownRed}> Terms and Condition</span></span>
            </div>
            <div className={styles.WrapboxRight}>
                <AccountEntryCarousel />
            </div>
        </div>
    )
}

export default AccountEntry;
