import React, { useState } from 'react';
import styles from './SearchLayout.module.css';
import Select, { components } from 'react-select';
import DropdownArrow from '../../components/ui-components/dropdown-arrow/DropdownArrow';
import {
	lagosOptions,
	groupedOptions,
} from '../../external-data/location-data';
import { Link, useRouteMatch } from 'react-router-dom';

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

const CustOption = (mprops) => (
	<div onClick={mprops.selectProps.selectProps.props.enableSearchBtn}>
		<components.Option {...mprops} />
	</div>
);

const SearchLayout = (props) => {
	const [state, setstate] = useState({
		selectedOption: null,
		values: '',
	});

	const { selectedOption, values } = state;

	const handleInputChange = (selectedOption) => {
		setstate({ selectedOption });
		console.log(selectedOption);
		const LocationValue = selectedOption.value;
		setstate({
			values: LocationValue,
		});
		console.log(LocationValue);
	};
	return (
		<div className={styles.SearchLayout}>
			<div className={styles.HeroContent}>
				<div className={styles.Tab}>
					<p>{props.heading}</p>
				</div>

				<div className={styles.TabContent}>
					<div className={styles.TabContentSub}>
						<p>Find a Location </p>
						<div className={styles.Underline}></div>
						<Select
							components={{
								DropdownIndicator,
								GroupHeading,
								Option: CustOption,
							}}
							className={styles.Select}
							selectProps={{ props }}
							theme={(theme) => ({
								...theme,
								colors: {
									...theme.colors,
									primary25: 'rgba(249, 249, 249, 0.4)',
									primary: '#504B4B',
									neutral0: 'white',
									neutral20: 'white',
								},
							})}
							onChange={handleInputChange}
							value={selectedOption}
							options={groupedOptions}
							placeholder={props.placeholder}
							styles={{
								indicatorSeparator: (base) => ({
									...base,
									display: 'none',
								}),
								groupHeading: (base) => ({
									...base,
									color: '#0F1310',
									fontWeight: 'bold',
									fontSize: '15px',
								}),
								control: (base) => ({
									...base,
									cursor: 'pointer',
								}),
								option: (base) => ({
									...base,
									padding: '15px 10px',
									border: '0.05px solid #E7E9ED',
								}),
							}}
						/>
					</div>
					<Link
						to={{
							pathname: `${useRouteMatch().url}/${props.path}`,
							state: { value: state.values },
						}}
						// `${useRouteMatch().url}/${props.path}`
						onClick={(e) => props.isDisabled && e.preventDefault()}>
						<button
							style={{
								backgroundColor: props.isDisabled && 'rgba(177,180,168,1)',
								cursor: props.isDisabled && 'default',
							}}>
							Search
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SearchLayout;
