import React from 'react';
import styles from './FormPeriodChooser.module.css';
import DateIcon from '../../../../assets/DateIcon.svg';
import DownArrow from '../../../../assets/downArrow.svg';

const FormPeriodChooser = (props) => (
	<div className={styles.PeriodChooser}>
		<p>Select a period</p>
		<div className={styles.PeriodRadioButtons}>
			<div>
				<input type='radio' id='daily' name='period' value='daily' />
				<label for='daily'>Daily</label>
			</div>
			<div>
				<input type='radio' id='weekly' name='period' value='weekly' />
				<label for='weekly'>Weekly</label>
			</div>
			<div>
				<input type='radio' id='monthly' name='period' value='monthly' />
				<label for='monthly'>Monthly</label>
			</div>
		</div>
		<div className={styles.WeeklyPeriod}>
			<div>
				<input
					type='checkbox'
					id='Monday'
					name='weekly-choice'
					value='Monday'
				/>
				<label for='Monday'>Monday</label>
			</div>
			<div>
				<input
					type='checkbox'
					id='Tuesday'
					name='weekly-choice'
					value='Tuesday'
				/>
				<label for='Tuesday'>Tuesday</label>
			</div>
			<div>
				<input
					type='checkbox'
					id='Wednesday'
					name='weekly-choice'
					value='Wednesday'
				/>
				<label for='Wednesday'>Wednesday</label>
			</div>
			<div>
				<input
					type='checkbox'
					id='Thursday'
					name='weekly-choice'
					value='Thursday'
				/>
				<label for='Thursday'>Thursday</label>
			</div>
			<div>
				<input
					type='checkbox'
					id='Friday'
					name='weekly-choice'
					value='Friday'
				/>
				<label for='Friday'>Friday</label>
			</div>
			<div>
				<input
					type='checkbox'
					id='Saturday'
					name='weekly-choice'
					value='Saturday'
				/>
				<label for='Saturday'>Saturday</label>
			</div>
			<div>
				<input
					type='checkbox'
					id='Sunday'
					name='weekly-choice'
					value='Sunday'
				/>
				<label for='Sunday'>Sunday</label>
			</div>
		</div>
		<div className={styles.MonthlyPeriod}>
			<div className={styles.SelectLayout}>
				<p>Select Days</p>
				<div className={styles.SelectContainer}>
					<div className={styles.ImgHolder}>
						<img src={DateIcon} alt='Date' />
					</div>
					<div className={styles.Range}>
						<p>From</p>
						<img src={DownArrow} alt='down arrow' />
					</div>
					<div className={styles.Range}>
						<p>To</p>
						<img src={DownArrow} alt='down arrow' />
					</div>
				</div>
			</div>
			<div className={styles.SelectLayout}>
				<p>Select Month</p>
				<div className={styles.SelectContainer}>
					<div className={styles.Range}>
						<p>August</p>
						<img src={DownArrow} alt='down arrow' />
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default FormPeriodChooser;
