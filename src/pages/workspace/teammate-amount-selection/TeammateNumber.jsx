import React, { Component } from "react";
import LogoOnlyHeader from "../../../shared-components/logo-only-header/LogoOnlyHeader";
import styles from "./TeammateNumber.module.css";
import AddSubtractButton from "../../../components/ui-components/add-subtract-button/AddSubtractButton";
import BackButton from "../../../components/ui-components/back-button/BackButton";
import { Link, withRouter } from "react-router-dom";

class TeammateNumber extends Component {

  state = {
    inputValue: 1,
  }

  changeHandler = (e) => {
    this.setState({ inputValue: e.target.value })
  };

  incrementHandler = () => {
    this.setState({ inputValue: this.state.inputValue + 1 });
  };

  decrementHandler = () => {
    if( this.state.inputValue > 1)
      this.setState({ inputValue: this.state.inputValue - 1 });
  };

  render() {
    return (
      <div className={styles.TeammateNumber}>
        <LogoOnlyHeader marginBtm="37px" />
        <BackButton history={this.props.history} to="/workspace" />
        <div className={styles.MainContent}>
          <p>How many teammates do you want to reserve a space for?</p>
          <div className={styles.CardLayout}>
            <p className={styles.NoOfTeammateLabel}>Number of teammates</p>
            <div className={styles.InputContainer}>
              <input value={this.state.inputValue} onChange={this.changeHandler} />
              <AddSubtractButton isSubtract click={this.decrementHandler} />
              <AddSubtractButton isSubtract={false} click={this.incrementHandler} />
            </div>
            <div className={styles.Divider}></div>

            <Link to="/workspace/searchResultPage">
              <button>Find Workspace </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TeammateNumber;
