import React from 'react';
import styles from './MeetingRoomSection.module.css';
import CardLayout from '../../../shared-components/card-layout/CardLayout';
import TransparentButton from '../../../components/ui-components/transparent-button-landing/TransparentButton';
import { Link } from 'react-router-dom';

const meetingRoomDescription =
	"No more wasting time hunting for conference rooms or lurking outside waiting for a meeting to end. Whether it's for a quick discussion with colleagues or a weekly team meeting, let employees book conference rooms from the convenience of our app.";

const MeetingRoomSection = (props) => {
	return (
		<div className={styles.MeetingRoomSection}>
			<div className={styles.Left}>
				<CardLayout flexDirection='row-reverse' />
			</div>
			<div className={styles.Right}>
				<p className={styles.MeetingRoomTitle}>Meeting Room</p>
				<p className={styles.MeetingRoomDesc}>{meetingRoomDescription}</p>
				<Link to='/meetingRoom'>
					<TransparentButton
						text='View More'
						style={{
							marginTop: '7%',
						}}
						className={styles.Transparentbutton}
					/>
				</Link>
			</div>
		</div>
	);
};

export default MeetingRoomSection;
