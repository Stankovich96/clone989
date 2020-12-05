import React from 'react';
import styles from './ApartmentSearchContainer.module.css';
import Select, { components } from 'react-select';
import DropdownArrow from '../../../components/ui-components/dropdown-arrow/DropdownArrow';
import DatePickerSelector from './date-input/DateInput';

import {
	apartmentOptions,
	apartmentTypeOptions,
	GuestOptions,
} from '../../../external-data/location-data';

const GUEST_NO = 'No of Guests';
const PROPERTY_TYPE = 'Type of property';
const MOVE_IN = 'Move-in/out date';

const DropdownIndicator = (props) =>
	components.DropdownIndicator && (
		<components.DropdownIndicator {...props}>
			<DropdownArrow />
		</components.DropdownIndicator>
	);

const IndicatorSeparator = ({ innerProps }) => {
	return <span {...innerProps} />;
};

const GroupHeading = (props) => (
	<div className={styles.GroupHeading}>
		<components.GroupHeading {...props} />
	</div>
);

const Option = (props) => <components.Option {...props} />;

const ApartmentSearchContainer = (props) => {
	return (
		<div className={styles.SearchContainer}>
			<div className={styles.Container}>
				<Select
					className={styles.Selectstyle}
					components={{
						DropdownIndicator,
						GroupHeading,
						Option,
						IndicatorSeparator,
					}}
					theme={(theme) => ({
						...theme,
						borderRadius: 7,
						outline: 'none',
						// border: '1px solid #9FA09F',
						colors: {
							...theme.colors,
							primary25: 'rgb(255,255,255)',
							primary: '#CFCFCF',
							neutral0: '#ffffff',
						},
					})}
					defaultValue={apartmentOptions[0]}
					options={apartmentOptions}
					styles={{
						groupHeading: (base) => ({
							// ...base,
							color: '#0F1310',
							fontWeight: 'bold',
							fontSize: '15px',
						}),
						indicatorSeparator: (base) => ({
							backgroundColor: '#ffffff',
						}),
						option: (base) => ({
							// ...base,
							padding: '15px 10px',
							// border: '0.05px solid #7c7979',
						}),
						placeholder: (styles) => ({
							...styles,
							marginLeft: '20px',
						}),
						singleValue: (styles) => ({
							...styles,
							marginLeft: '20px',
						}),
					}}
				/>
				<div className={styles.formRowInnerDate}>
					<DatePickerSelector placeholderText={MOVE_IN} />
				</div>
				<Select
					className={styles.Selectstyle}
					components={{ DropdownIndicator, GroupHeading, Option }}
					theme={(theme) => ({
						...theme,
						borderRadius: 7,
						outline: 'none',
						// border: '1px solid #9FA09F',
						colors: {
							...theme.colors,
							primary25: 'rgb(255,255,255)',
							primary: '#CFCFCF',
							neutral0: '#ffffff',
						},
					})}
					placeholder={PROPERTY_TYPE}
					options={apartmentTypeOptions}
					styles={{
						groupHeading: (base) => ({
							...base,
							color: '#0F1310',
							fontWeight: 'bold',
							fontSize: '15px',
						}),
						indicatorSeparator: (base) => ({
							backgroundColor: '#ffffff',
						}),
						option: (base) => ({
							...base,
							padding: '15px 10px',
							// border: '0.05px solid #7c7979',
						}),
						placeholder: (styles) => ({
							...styles,
							marginLeft: '20px',
						}),
						singleValue: (styles) => ({
							...styles,
							marginLeft: '20px',
						}),
					}}
				/>
				<Select
					className={styles.Selectstyle}
					components={{ DropdownIndicator, GroupHeading, Option }}
					theme={(theme) => ({
						...theme,
						borderRadius: 7,
						outline: 'none',
						// border: '1px solid #9FA09F',
						colors: {
							...theme.colors,
							primary25: 'rgb(255,255,255)',
							primary: '#CFCFCF',
							neutral0: '#ffffff',
						},
					})}
					placeholder={GUEST_NO}
					options={GuestOptions}
					styles={{
						groupHeading: (base) => ({
							...base,
							color: '#0F1310',
							fontWeight: 'bold',
							fontSize: '15px',
						}),
						indicatorSeparator: (base) => ({
							backgroundColor: '#ffffff',
						}),
						option: (base) => ({
							...base,
							padding: '15px 10px',
							// border: '0.05px solid #7c7979',
						}),
						placeholder: (styles) => ({
							...styles,
							marginLeft: '20px',
						}),
						singleValue: (styles) => ({
							...styles,
							marginLeft: '20px',
						}),
					}}
				/>
				<button className={styles.SearchButton}>Search</button>
			</div>
		</div>
	);
};

export default ApartmentSearchContainer;
