import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
// import { Slider, RangeSlider } from 'rsuite';
import Slider, { Range } from 'rc-slider';
import Tooltip from 'rc-tooltip';
import './index.css';
import Select, { components } from 'react-select';
import DropdownArrow from '../../../components/ui-components/dropdown-arrow-filter/DropdownArrow';
import Header from '../../../shared-components/header/Header';
import styles from './SearchResultPage.module.css';
// import Footer from '../../../shared-components/footer/Footer';
import Footer from '../../../shared-components/footer/Footer';
import SingleCard from '../../../shared-components/card-layout/single-card/SingleCardApartment';
import Result1 from '../../../assets/apartment/Result1.png';
import Result2 from '../../../assets/apartment/Result2.png';
import Result3 from '../../../assets/apartment/Result3.png';
import Result4 from '../../../assets/apartment/Result4.png';
import Result5 from '../../../assets/apartment/Result5.png';
import Result6 from '../../../assets/apartment/Result6.png';
import Result7 from '../../../assets/apartment/Result7.png';
import Result8 from '../../../assets/apartment/Result8.png';
import Result9 from '../../../assets/apartment/Result9.png';
import Filter from '../../../assets/apartment/Filter.svg';
import slider from '../../../assets/slider.svg';
import Facility from '../../../assets/facility.svg';
import Facility1 from '../../../assets/facility2.svg';
import ApartmentSearchContainer from '../../../components/ui-components/apartment-search-container/ApartmentSearchContainer';
import { relevance } from '../../../external-data/location-data';

const apartmentData = [
	{
		title: '1 Bedroom Apartment',
		officeImg: `${Result1}`,
		location: 'Lekki phase II - Lagos',
		pricing: '10,000',
		duration: 'per month',
	},
	{
		title: '1 Bedroom Apartment',
		officeImg: `${Result2}`,
		location: 'Lekki phase II - Lagos',
		pricing: '10,000',
		duration: 'per week',
	},
	{
		title: '1 Bedroom Apartment',
		officeImg: `${Result3}`,
		location: 'Lekki phase II - Lagos',
		pricing: '10,000',
		duration: 'per week',
	},
	{
		title: '1 Bedroom Apartment',
		officeImg: `${Result4}`,
		location: 'Lekki phase II - Lagos',
		pricing: '10,000',
		duration: 'per month',
	},
	{
		title: '1 Bedroom Apartment',
		officeImg: `${Result5}`,
		location: 'Lekki phase II - Lagos',
		pricing: '10,000',
		duration: 'per night',
	},
	{
		title: '1 Bedroom Apartment',
		officeImg: `${Result6}`,
		location: 'Lekki phase II - Lagos',
		pricing: '10,000',
		duration: 'per night',
	},
	{
		title: '1 Bedroom Apartment',
		officeImg: `${Result7}`,
		location: 'Lekki phase II - Lagos',
		pricing: '10,000',
		duration: 'per night',
	},
	{
		title: '1 Bedroom Apartment',
		officeImg: `${Result8}`,
		location: 'Lekki phase II - Lagos',
		pricing: '10,000',
		duration: 'per night',
	},
	{
		title: '1 Bedroom Apartment',
		officeImg: `${Result9}`,
		location: 'Lekki phase II - Lagos',
		pricing: '10,000',
		duration: 'per night',
	},
];

const RELEVANCE = 'Relevance';

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

const SearchResultPage = (props) => {
	const [showText, setShowText] = useState(false);
	const history = useHistory();

	console.log(props.location.state);
	// console.log(`i am in search page with ${props.location.state.value}`);

	const { createSliderWithTooltip } = Slider;
	const Range = createSliderWithTooltip(Slider.Range);
	const { Handle } = Slider;

	const handle = (props) => {
		const { value, dragging, index, ...restProps } = props;
		return (
			<Tooltip
				prefixCls='rc-slider-tooltip'
				overlay={value}
				visible={dragging}
				placement='top'
				key={index}>
				<Handle value={value} {...restProps} />
			</Tooltip>
		);
	};

	return (
		<>
			<div className={styles.SearchResultPage}>
				<Header isWhiteBg backgroundColor='white' menuFontColor='#1A202C' />
				<ApartmentSearchContainer />
				<div className={styles.SearchResults}>
					<div className={styles.Left}>
						<div className={styles.Top}>
							<p className={styles.WorkspaceCount}>
								<span>Ikeja:</span> <span>19 properties found</span>
							</p>
							<div className={styles.Filters}>
								<button
									className={styles.filterBtn}
									onClick={() => setShowText(!showText)}>
									<img src={Filter} alt='' className={styles.filterSvg} />
									Filters
								</button>
							</div>
						</div>

						{showText && (
							<div
								className={styles.filterForm}
								// style={{
								// 	display: 'none',
								// }}
							>
								<div className={styles.facilitiesSection}>
									<div className={styles.filterSlider}>
										<img src={slider} alt='' />
									</div>
									<div className={styles.divider}></div>
									<div className={styles.facilityStyle}>
										<p className={styles.filterName}>Facilities</p>
										<div>
											<img src={Facility} alt='' />
										</div>
									</div>
								</div>
								<div className={styles.priceStyle}>
									<p className={styles.filterName}>Price Range</p>
									<div className={styles.rangeStyle}>
										<Range
											min={0}
											max={500000}
											defaultValue={[75000, 400000]}
											tipFormatter={(value) => `N ${value}`}
											tipProps={{
												placement: 'top',
												visible: true,
											}}
											railStyle={{
												backgroundColor: '#878987',
											}}
											handleStyle={[
												{
													border: '3px solid #3E432F',
												},
											]}
											trackStyle={[
												{
													backgroundColor: '#3E432F',
												},
											]}
										/>
									</div>
								</div>
								<div className={styles.Sortstyle}>
									<p className={styles.filterName}>Sort By</p>
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
											border: '1px solid #ffffff',
											backgroundColor: '#6F716F',
											colors: {
												...theme.colors,
												primary25: 'rgb(255,255,255)',
												primary: '#CFCFCF',
												neutral0: '#6F716F',
											},
										})}
										placeholder={RELEVANCE}
										options={relevance}
										styles={{
											groupHeading: (base) => ({
												...base,
												color: '#0F1310',
												fontWeight: 'bold',
												fontSize: '15px',
												backgroundColor: '#ffffff',
											}),
											indicatorSeparator: (base) => ({
												backgroundColor: '#ffffff',
											}),
											option: (base) => ({
												...base,
												padding: '15px 10px',
												border: '0.05px solid #ffffff',
												backgroundColor: '#ffffff',
											}),
											placeholder: (styles) => ({
												...styles,
												marginLeft: '20px',
												color: '#ffffff',
												fontSize: 15,
											}),
											singleValue: (styles) => ({
												...styles,
												marginLeft: '20px',
												color: '#ffffff',
												fontSize: 10,
											}),
										}}
									/>
								</div>
								<button className={styles.filterFormBtn} onClick>
									Apply
								</button>
							</div>
						)}
						<div className={styles.SearchResultsItems}>
							{apartmentData.map(
								({ title, officeImg, location, pricing, duration }, index) => (
									<div
										className={styles.SingleCardSection}
										onClick={() => history.push('/apartmentDescriptionPage')}>
										<SingleCard
											key={index}
											title={title}
											duration={duration}
											location={location}
											pricing={pricing}
											officeImg={officeImg}
										/>
									</div>
								)
							)}
						</div>
					</div>
				</div>
				<Footer />
			</div>
		</>
	);
};

export default SearchResultPage;
