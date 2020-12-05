import React from 'react';
import PropTypes from "prop-types";

import styles from "./AccountEntryButton.module.css";

const AccountEntryButton = (props) => (
    <button type="submit" className={styles.EntryButtonStyle} onClick={()=>props.buttonFn} style={{marginTop: props.marginTp, marginBottom: props.marginBtm, maxWidth: props.maxWidth, borderRadius: props.borderRadius }}>
        {props.children}
    </button>
);

AccountEntryButton.propTypes = {
    marginTp: PropTypes.string,
    marginBtm: PropTypes.string,
    maxWidth: PropTypes.string,
    buttonFn: PropTypes.func,
    borderRadius: PropTypes.string
}

export default AccountEntryButton;
