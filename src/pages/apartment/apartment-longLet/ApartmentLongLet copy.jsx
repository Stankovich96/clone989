import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Select, { components } from 'react-select';
import ReactModal from 'react-modal';
import styles from './ApartmentLongLet.module.css';
import LogoOnlyHeader from '../../../shared-components/logo-only-header/LogoOnlyHeader';
import ArrowRight from '../../../assets/apartment/PointRight.svg';
import Confirmed from '../../../assets/apartment/GreenTick.svg';
import DropdownArrow from '../../../components/ui-components/dropdown-arrow/DropdownArrow';
import DropdownArrowWhite from '../../../components/ui-components/dropdown-arrow-white/DropdownArrowWhite';
import {
	apartmentOptions,
	firstTime,
	month,
	apartmentTypeOptions,
} from '../../../external-data/location-data';
import DatePickerSelector from '../date-input/DateInput';
import BackButton from '../../../components/ui-components/back-button/BackButton';

const TITLE =
	'We find the right place for you. Quicker than ever, and free of charge. Our agents do the search and quickly find you a home. ';
const BACK = 'Back';
const FORM_TITLE =
	'Fill in the form below and we Will contact you as soon as possible';
const HEADER_TITLE = 'Long Stay';
const PHONE = 'Phone Number';
const MOVE_IN = 'Move-in date';
const DURATION = 'Duration';
const NAME = 'Jamie victor langstram';
const LOCATION = 'Location';
const EMAIL = 'Email Addres';
const PROPERTY_TYPE = 'Type of property';
const AVAILABILITY = 'Request Information';
const CHECKBOXTEXT = 'I authorize 989 to contact me via email and phone';
const DETAILS = 'Details of Stay';
const REQUEST = 'Request Submitted';
const CONTENT = 'We will get in touch with you soon';
const FIRST = 'First Time with us?';
const MONTH = 'Month';

const DropdownIndicator = (props) =>
	components.DropdownIndicator && (
		<components.DropdownIndicator {...props}>
			<DropdownArrow />
		</components.DropdownIndicator>
	);
const DropdownIndicators = (props) =>
	components.DropdownIndicator && (
		<components.DropdownIndicator {...props}>
			<DropdownArrowWhite />
		</components.DropdownIndicator>
	);

const GroupHeading = (props) => (
	<div className={styles.GroupHeading}>
		<components.GroupHeading {...props} />
	</div>
);
const IndicatorSeparator = ({ innerProps }) => {
	return <span {...innerProps} />;
};

const Option = (props) => <components.Option {...props} />;

const ApartmentLongLet = (props) => {
	const [state, setstate] = useState({
		showModal: false,
		selectedOption: null,
	});

	const { selectedOption } = state;

	const handleInputChange = (selectedOption) => {
		if (selectedOption.label === apartmentOptions.label) {
			setstate({
				...state,
				selectedOption,
			});
			const LocationValue = selectedOption.value;
			console.log(LocationValue);
		} else if (selectedOption.label === apartmentTypeOptions.label) {
			setstate({
				...state,
				selectedOption,
			});
			const ApartmentValue = selectedOption.value;
			console.log(ApartmentValue);
		} else if (selectedOption.label === month.label) {
			setstate({
				...state,
				selectedOption,
			});
			const MonthValue = selectedOption.value;
			console.log(MonthValue);
		} else {
			setstate({
				...state,
				selectedOption,
			});
			const FirstTimeValue = selectedOption.value;
			console.log(FirstTimeValue);
		}
	};

	const handleOpenModal = () => {
		setstate({ showModal: true });
	};

	const handleCloseModal = () => {
		setstate({ showModal: false });
	};
	return (
		<>
			<LogoOnlyHeader />
			<section className={styles.headerSection}>
				<p className={styles.headerTitle}>{HEADER_TITLE}</p>
				<hr className={styles.bottomLine} />
			</section>
			<section className={styles.ApartmentShortLet}>
				<p>
					<BackButton history={props.history} to='/apartment/apartmentType' />
				</p>
				<p className={styles.Title}>{TITLE}</p>
			</section>
			<section className={styles.all}>
				<section className={styles.formSection}>
					<p className={styles.formTitle}>{FORM_TITLE}</p>
					<form className={styles.formStyle}>
						<div className={styles.formRow}>
							<div className={styles.formRowInner}>
								<Select
									components={{
										DropdownIndicator,
										GroupHeading,
										Option,
										IndicatorSeparator,
									}}
									className={styles.Selectstyle}
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
									placeholder={LOCATION}
									options={apartmentOptions}
									onChange={handleInputChange}
									value={selectedOption}
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
											border: '0.05px solid #7c7979',
										}),
										indicatorSeparator: (base) => ({
											backgroundColor: '#ffffff',
										}),
										placeholder: (styles) => ({
											...styles,
											marginLeft: '9px',
										}),
										singleValue: (styles) => ({
											...styles,
											marginLeft: '9px',
										}),
									}}
								/>
							</div>
							<div className={styles.formRowInner}>
								<Select
									components={{ DropdownIndicator, GroupHeading, Option }}
									className={styles.Selectstyle}
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
									placeholder={PROPERTY_TYPE}
									options={apartmentTypeOptions}
									onChange={handleInputChange}
									value={selectedOption}
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
											border: '0.05px solid #7c7979',
										}),
										indicatorSeparator: (base) => ({
											backgroundColor: '#ffffff',
										}),
										placeholder: (styles) => ({
											...styles,
											marginLeft: '9px',
										}),
										singleValue: (styles) => ({
											...styles,
											marginLeft: '9px',
										}),
									}}
								/>
							</div>
						</div>

						<div className={styles.formRow}>
							<div className={styles.formRowInnerDate}>
								<DatePickerSelector placeholderText={MOVE_IN} />
							</div>
							<div className={styles.formRowInnerDuration}>
								<input
									type='number'
									name=''
									id=''
									className={styles.dateFieldDuration}
									placeholder={DURATION}
								/>
								<Select
									components={{ DropdownIndicator, GroupHeading, Option }}
									className={styles.SelectstyleDuration}
									theme={(theme) => ({
										...theme,
										outline: 'none',
										border: 'none',
										borderStyle: 'none',
										backgroundColor: '#575957',
										colors: {
											...theme.colors,
											primary25: '#575957',
											primary: '#ffffff',
											neutral0: '#575957',
										},
									})}
									placeholder={MONTH}
									options={month}
									onChange={handleInputChange}
									value={selectedOption}
									styles={{
										dropdownIndicator: (props) => ({
											...props,
											color: '#ffffff',
										}),
										groupHeading: (base) => ({
											...base,
											color: '#ffffff',
											fontWeight: 'bold',
											fontSize: '15px',
										}),
										option: (base) => ({
											...base,
											border: '0.05px solid #ffffff',
										}),
										indicatorSeparator: (base) => ({
											backgroundColor: '#ffffff',
										}),
										valueContainer: (base) => ({
											paddingLeft: 1,
											border: 'none',
											borderStyle: 'none',
										}),
										placeholder: (styles) => ({
											...styles,
											marginLeft: '9px',
											color: '#ffffff',
										}),
										singleValue: (styles) => ({
											...styles,
											marginLeft: '9px',
											color: '#ffffff',
										}),
										border: 'none',
										borderStyles: 'none',
									}}
								/>
							</div>
						</div>

						<div className={styles.formRow}>
							<div className={styles.formRowInner}>
								<input
									type='text'
									name=''
									id=''
									className={styles.dateField}
									placeholder={NAME}
								/>
							</div>
							<div className={styles.formRowInner}>
								<input
									type='tel'
									name=''
									id=''
									className={styles.dateField}
									placeholder={PHONE}
								/>
							</div>
						</div>

						<div className={styles.formRow}>
							<div className={styles.formRowInner}>
								<input
									type='email'
									name=''
									id=''
									className={styles.dateField}
									placeholder={EMAIL}
								/>
							</div>
							<div className={styles.formRowInner}>
								<Select
									components={{ DropdownIndicator, GroupHeading, Option }}
									className={styles.Selectstyle}
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
									placeholder={FIRST}
									options={firstTime}
									onChange={handleInputChange}
									value={selectedOption}
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
											border: '0.05px solid #7c7979',
										}),
										indicatorSeparator: (base) => ({
											backgroundColor: '#ffffff',
										}),
										placeholder: (styles) => ({
											...styles,
											marginLeft: '9px',
										}),
										singleValue: (styles) => ({
											...styles,
											marginLeft: '9px',
										}),
									}}
								/>
							</div>
						</div>
						<textarea
							name=''
							id=''
							cols='10'
							rows='7'
							placeholder={DETAILS}></textarea>
						<div className={styles.checkboxSection}>
							<input
								type='checkbox'
								name='checkbox'
								id='checkbox'
								className={styles.radioBtn}
							/>
							<label For='checkbox' className={styles.radioBtnLabel}>
								{CHECKBOXTEXT}
							</label>
						</div>
					</form>
					<button
						type='submit'
						className={styles.apartmentButton}
						onClick={handleOpenModal}>
						{AVAILABILITY}
						<img src={ArrowRight} alt='' className={styles.Inputimage} />
					</button>
				</section>
			</section>
			<ReactModal
				style={{
					overlay: {
						position: 'fixed',
						top: 80,
						left: 400,
						right: 0,
						bottom: 0,
						zIndex: 10,
						backgroundColor: 'rgba(255, 255, 255, 0.2)',
						height: 500,
						width: 700,
						padding: 0,
						scrollbarWidth: 'none',
					},
					content: {
						// position: 'absolute',
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-start',
						padding: 5,
						alignItems: 'center',
						border: '0px solid #ccc',
						background: '#fff',
						overflow: 'auto',
						borderRadius: '4px',
						outline: 'none',
						height: 500,
						width: 573,
					},
				}}
				className={styles.modal}
				isOpen={state.showModal}
				contentLabel='Minimal Modal Example'>
				<p className={styles.modalTitle}>{REQUEST}</p>
				<p>{CONTENT}</p>
				<img src={Confirmed} alt='' className={styles.modalImage} />
				<button onClick={handleCloseModal} className={styles.modalButton}>
					{BACK}
				</button>
			</ReactModal>
		</>
	);
};

export default ApartmentLongLet;
