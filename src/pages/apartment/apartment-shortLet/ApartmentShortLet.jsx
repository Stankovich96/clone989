import React, { useState } from 'react';
import Select, { components } from 'react-select';
import moment, { now } from 'moment';
import { Link, useRouteMatch } from 'react-router-dom';
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import styles from './ApartmentShortLet.module.css';
import DatePicker from 'react-datepicker';
import { FaRegCalendarAlt } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import LogoOnlyHeader from '../../../shared-components/logo-only-header/LogoOnlyHeader';
import ArrowRight from '../../../assets/apartment/PointRight.svg';
import Location from '../../../assets/apartment/Location.svg';
import Guest from '../../../assets/apartment/Guest.svg';
import DropdownArrow from '../../../components/ui-components/dropdown-arrow/DropdownArrow';
import BackButton from '../../../components/ui-components/back-button/BackButton';

import {
	apartmentOptions,
	apartmentTypeOptions,
	GuestOptions,
} from '../../../external-data/location-data';

const TITLE =
	'Need a room for a few nights? Book a room in any of our locations.';
const BACK = 'Back';
const HEADER_TITLE = 'Short Stay';
const CITY_LOCATION = 'Choose City Location';
const CHECK_IN = 'Check-in';
const CHECK_OUT = 'Check-Out';
const GUEST_NO = 'Guests';
const PROPERTY_TYPE = 'Type of property';
const AVAILABILITY = 'Check Availability';
const LOCATION = 'Location';
const NEXT = 'apartment/:id';

const DropdownIndicator = (props) =>
	components.DropdownIndicator && (
		<components.DropdownIndicator {...props}>
			<DropdownArrow />
		</components.DropdownIndicator>
	);

const GroupHeading = (props) => (
	<div className={styles.GroupHeading}>
		<components.GroupHeading {...props} />
	</div>
);

const Option = (props) => <components.Option {...props} />;

const IconOption = (props) => (
	<Option {...props}>
		<img
			src={Location}
			style={{ width: 14, padding: '0px 1px', marginRight: '15px' }}
			alt={LOCATION}
		/>
		{LOCATION}
	</Option>
);

const IconOptions = (props) => (
	<Option {...props}>
		<img
			src={Guest}
			style={{ width: 20, padding: '0px 1px', marginRight: '13px' }}
			alt={GUEST_NO}
		/>
		{GUEST_NO}
	</Option>
);

const ApartmentShortLet = (props) => {
	const history = useHistory();
	const [state, setstate] = useState({
		values: '',
	});

	const formik = useFormik({
		initialValues: {
			checkindate: null,
			checkoutdate: null,
			locationOption: null,
			guestOption: null,
			propertyOption: null,
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
			setstate({
				values,
			});
			history.push({
				pathname: 'apartment/:id',
				state: { values: values },
			});
		},
	});

	return (
		<>
			<LogoOnlyHeader />
			<section className={styles.headerSection}>
				<p className={styles.headerTitle}>{HEADER_TITLE}</p>
				<hr className={styles.bottomLine} />
			</section>
			<section className={styles.ApartmentShortLet}>
				<p>
					<BackButton history={props.history} to='/apartment' />
				</p>
				<p className={styles.Title}>{TITLE}</p>
			</section>
			<section className={styles.all}>
				<section className={styles.formSection}>
					<form className={styles.formStyle} onSubmit={formik.handleSubmit}>
						<p className={styles.InputTitle}>{CITY_LOCATION}</p>
						<Select
							className={styles.Selectstyle}
							components={{
								DropdownIndicator,
								GroupHeading,
								Option,
								Placeholder: IconOption,
							}}
							theme={(theme) => ({
								...theme,
								borderRadius: 7,
								outline: 'none',
								border: '1px solid #9FA09F',
								zIndex: 100,
								colors: {
									...theme.colors,
									primary25: 'rgb(255,255,255)',
									primary: '#CFCFCF',
									neutral0: '#ffffff',
								},
							})}
							name='locationOption'
							id='locationOption'
							placeholder={LOCATION}
							options={apartmentOptions}
							value={
								apartmentOptions
									? apartmentOptions.find(
											(apartmentOption) =>
												apartmentOption.value === formik.values.locationOption
									  )
									: ''
							}
							onChange={(selectedOption) => {
								console.log('values', selectedOption.value);
								formik.handleChange('locationOption')(selectedOption.value);
							}}
							className={styles.menu}
							styles={{
								groupHeading: (base) => ({
									...base,
									color: '#0F1310',
									fontWeight: 'bold',
									fontSize: '15px',
								}),
								option: (base) => ({
									...base,
									padding: '15px 10px',
									opacity: 0.5,
									width: 'unset',
									// border: '0.05px solid #7c7979',
								}),
								indicatorSeparator: (base) => ({
									backgroundColor: '#ffffff',
								}),
								placeholder: (styles) => ({
									...styles,
									marginLeft: '10px',
									opacity: 0.1,
								}),
								singleValue: (styles) => ({
									...styles,
									marginLeft: '40px',
								}),
							}}
						/>
						<div className={styles.formRow}>
							<div className={styles.formRowInnerDate1}>
								<p className={styles.InputTitle}>{CHECK_IN}</p>
								<label className={styles.apartmentDatePicker}>
									<FaRegCalendarAlt className={styles.apartmentFormDateIcon} />
									<DatePicker
										name='checkindate'
										id='checkindate'
										value={formik.values.checkindate}
										placeholderText={CHECK_IN}
										onChange={(checkindate) => {
											let now = moment(checkindate).format('MM/DD/YYYY');
											formik.handleChange('checkindate')(now);
										}}
										className={styles.apartmentDateWrapper}
										// openToDate={new Date()}
									/>
								</label>
							</div>
							<div className={styles.formRowInnerDate2}>
								<p className={styles.InputTitle}>{CHECK_OUT}</p>
								<label className={styles.apartmentDatePicker}>
									<FaRegCalendarAlt className={styles.apartmentFormDateIcon} />
									<DatePicker
										name='checkoutdate'
										id='checkoutdate'
										value={formik.values.checkoutdate}
										placeholderText={CHECK_OUT}
										onChange={(checkoutdate) => {
											let now = moment(checkoutdate).format('MM/DD/YYYY');
											formik.handleChange('checkoutdate')(now);
										}}
										className={styles.apartmentDateWrapper}
										// openToDate={new Date()}
									/>
								</label>
							</div>
						</div>

						<div className={styles.formRow}>
							<div className={styles.formRowInner}>
								<p className={styles.InputTitle}>{GUEST_NO}</p>
								<Select
									components={{
										DropdownIndicator,
										GroupHeading,
										Option,
										Placeholder: IconOptions,
									}}
									className={styles.Selectstyle1}
									theme={(theme) => ({
										...theme,
										borderRadius: 7,
										outline: 'none',
										border: '1px solid #9FA09F',
										zIndex: -1,
										colors: {
											...theme.colors,
											primary25: 'rgb(255,255,255)',
											primary: '#CFCFCF',
											neutral0: '#ffffff',
										},
									})}
									name='guestOption'
									id='guestOption'
									placeholder={GUEST_NO}
									options={GuestOptions}
									value={
										GuestOptions
											? GuestOptions.find(
													(GuestOption) =>
														GuestOption.value === formik.values.guestOption
											  )
											: ''
									}
									onChange={(selectedOption) => {
										console.log('values', selectedOption.value);
										formik.handleChange('guestOption')(selectedOption.value);
									}}
									styles={{
										groupHeading: (base) => ({
											...base,
											color: '#0F1310',
											fontWeight: 'bold',
											fontSize: '15px',
										}),
										option: (base) => ({
											...base,
											padding: '15px 10px',
											opacity: 0.5,
											width: 'unset',
											// border: '0.05px solid #7c7979',
										}),
										indicatorSeparator: (base) => ({
											backgroundColor: '#ffffff',
										}),
										placeholder: (styles) => ({
											...styles,
											marginLeft: '10px',
											opacity: 0.7,
										}),

										singleValue: (styles) => ({
											...styles,
											marginLeft: '40px',
										}),
									}}
								/>
							</div>
							<div className={styles.formRowInner2}>
								<p className={styles.InputTitle}>{PROPERTY_TYPE}</p>
								<Select
									components={{ DropdownIndicator, GroupHeading, Option }}
									className={styles.Selectstyle2}
									theme={(theme) => ({
										...theme,
										borderRadius: 7,
										outline: 'none',
										border: '1px solid #9FA09F',
										colors: {
											...theme.colors,
											primary25: 'rgb(255,255,255)',
											primary: '#CFCFCF',
											neutral0: '#ffffff',
										},
									})}
									name='propertyOption'
									id='propertyOption'
									placeholder={PROPERTY_TYPE}
									options={apartmentTypeOptions}
									value={
										apartmentTypeOptions
											? apartmentTypeOptions.find(
													(apartmentTypeOption) =>
														apartmentTypeOption.value ===
														formik.values.propertyOption
											  )
											: ''
									}
									onChange={(selectedOption) => {
										console.log('values', selectedOption.value);
										formik.handleChange('propertyOption')(selectedOption.value);
									}}
									styles={{
										groupHeading: (base) => ({
											...base,
											color: '#0F1310',
											fontWeight: 'bold',
											fontSize: '15px',
										}),
										option: (base) => ({
											...base,
											padding: '15px 0px',
											// border: '0.05px solid #7c7979',
										}),
										placeholder: (styles) => ({
											...styles,
											marginLeft: '30px',
											opacity: 0.7,
										}),
										singleValue: (styles) => ({
											...styles,
											marginLeft: '30px',
										}),
										indicatorSeparator: (base) => ({
											backgroundColor: '#ffffff',
										}),
									}}
								/>
							</div>
						</div>
					</form>
					<button
						type='submit'
						className={styles.apartmentButton}
						onClick={(e) => {
							e.preventDefault();
							formik.handleSubmit();
							// history.push(NEXT);
							// history.push({
							// 	pathname: 'apartment/:id',
							// 	state: { values: state.values },
							// });
						}}>
						{AVAILABILITY}
						<img src={ArrowRight} alt='' className={styles.Inputimage} />
					</button>
				</section>
			</section>
		</>
	);
};

export default ApartmentShortLet;
