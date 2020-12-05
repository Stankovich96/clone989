import React from 'react';
import DatePicker from 'react-datepicker';
import { FaRegCalendarAlt } from 'react-icons/fa';

import '../../../../../node_modules/react-datepicker/dist/react-datepicker.css';
import './DateInput.modules.scss';

class SelectDatePicker extends React.Component {
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
			<label className='date-picker'>
				<FaRegCalendarAlt className='form-date-icon' />
				<DatePicker
					selected={this.state.startDate}
					placeholderText='Choose a date'
					onChange={this.handleChange}
					className='date-wrapper'
					openToDate={new Date()}
				/>
			</label>
		);
	}
}

export default SelectDatePicker;
