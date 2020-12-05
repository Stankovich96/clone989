import React from 'react';
import DatePicker from 'react-datepicker';
import { FaRegCalendarAlt } from 'react-icons/fa';

import '../../../../../node_modules/react-datepicker/dist/react-datepicker.css';
import styles from './DateInput.module.css';

class DatePickerSelector extends React.Component {
	state = {
		startDate: null,
	};

	handleChange = (date) => {
		this.setState({
			startDate: date,
		});
	};

	render() {
		return (
			<label className={styles.datePicker}>
				<FaRegCalendarAlt className={styles.formDateIcon} />
				<DatePicker
					selected={this.state.startDate}
					placeholderText={this.props.placeholderText}
					onChange={this.handleChange}
					className={styles.dateWrapper}
					openToDate={new Date()}
				/>
			</label>
		);
	}
}

export default DatePickerSelector;
