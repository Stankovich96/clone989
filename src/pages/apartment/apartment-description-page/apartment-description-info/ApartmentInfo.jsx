import React from 'react';
import { Tabs, Tab, TabPanel, TabList } from 'react-tabs';

import {
	DescriptionTab,
	UserReviewsTab,
	LocationMapTab,
} from './ApartmentInfo.utils';

import './ApartmentInfo.modules.scss';

const ApartmentInfo = () => (
	<div className='apartment-container'>
		<div className='apartment-info'>
			<Tabs
				defaultTab='one'
				selectedTabClassName='apartment-active-tab'
				selectedTabPanelClassName='apartment-tab-panel-animation'>
				<TabList className='apartment-tablist'>
					<Tab className='apartment-tablist-menu' tabFor='one'>
						Description
					</Tab>
					<Tab className='apartment-tablist-menu' tabFor='two'>
						User Reviews
					</Tab>
					<Tab className='apartment-tablist-menu' tabFor='three'>
						Map
					</Tab>
				</TabList>

				<TabPanel tabId='one' className='apartment-tab-content'>
					<DescriptionTab />
				</TabPanel>

				<TabPanel tabId='two' className='apartment-tab-content'>
					<UserReviewsTab />
				</TabPanel>

				<TabPanel tabId='three' className='apartment-tab-content'>
					<LocationMapTab />
				</TabPanel>
			</Tabs>
		</div>
	</div>
);

export default ApartmentInfo;
