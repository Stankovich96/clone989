import React from 'react';
import BackButton from '../../../components/ui-components/back-button/BackButton';
import Navigation from '../navigation/Navigation';
import styles from './TeammateUpdate.module.css';
import AddSubtractButton from '../../../components/ui-components/add-subtract-button/AddSubtractButton';

class TeammateUpdate extends React.Component {
    render() {
        return (
            <div className={styles.TeammateUpdate}>
                <Navigation />
                <BackButton MarginLt='180px' MarginTp='30px'  history={this.props.history} to="/dashboard/selectedTransaction"/>
                <div className={styles.MainContent}>
                    <div className={styles.Left}>
                        <p className={styles.TeammateText}>Current Teammates</p>
                        <p className={styles.TeammateValue}>10</p>
                    </div>
                    <div className={styles.Right}>
                        <p className={styles.HeaderText}>Add more team members</p>
                        <div className={styles.RightMainContent}>
                            <p className={styles.TeammateIncreaseText}>Increase Teammates</p>
                            <div className={styles.InputLayout}>
                                <input type='number' placeholder='Amount'/>
                                <AddSubtractButton isSubtract />
                                <AddSubtractButton />
                            </div>
                            <p className={styles.CostText}>Estimated Cost</p>
                            <p className={styles.CostValue}>N8,000</p>
                            <button>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeammateUpdate;