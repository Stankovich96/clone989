import React, { Component } from 'react';
import BackButton from '../../../components/ui-components/back-button/BackButton';
import LogoOnlyHeader from '../../../shared-components/logo-only-header/LogoOnlyHeader';
import { Tabs, Tab, TabPanel, TabList } from 'react-tabs';
import './FinalApartmentStageCopy.modules.scss';
import PaymentConfirmation from './payment-confirmation/PaymentConfirmation';
import PersonalDetails from './personal-details/PersonalDetails';
// import PersonalDetails from '../../workspace/final-booking-stage/personal-details/PersonalDetails';

class FinalApartmentStage extends Component {
	state = {
		tabIndex: 0,
	};

	setTabIndex = (index) => {
		this.setState({ tabIndex: index });
	};

	render() {
		const { tabIndex } = this.state;
		return (
			<div className='FinalBookingStage'>
				<LogoOnlyHeader />

				<div className='ApartmentBody'>
					<Tabs
						defaultTab='one'
						selectedTabClassName='active-tab'
						selectedTabPanelClassName='tab-panel-animation'
						selectedIndex={tabIndex}
						onSelect={(index) => this.setTabIndex(index)}>
						<TabList className='tablist'>
							<Tab className='tablist-menu' tabFor='one'>
								Personal
							</Tab>
							<Tab className='tablist-menu' tabFor='two'>
								Payment
							</Tab>
						</TabList>
						<BackButton
							history={this.props.history}
							to='/apartmentDescriptionPage'
						/>
						<TabPanel tabId='one' className='tab-content'>
							<PersonalDetails changeToSecondTab={this.setTabIndex} />
						</TabPanel>

						<TabPanel tabId='two' className='tab-content'>
							<PaymentConfirmation />
						</TabPanel>
					</Tabs>
				</div>
			</div>
		);
	}
}

export default FinalApartmentStage;
