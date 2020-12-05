import React from "react";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";

import { DescriptionTab, UserReviewsTab, LocationMapTab } from './RoomInfo.utils'

import "./RoomInfo.modules.scss";

const RoomInfo = () => (
    <div className="container room-info__container">
        <div className="room-info">
            <Tabs defaultTab="one"selectedTabClassName="active-tab" selectedTabPanelClassName="tab-panel-animation" >
                <TabList className="tablist">
                    <Tab className="tablist-menu" tabFor="one" >Description</Tab>
                    <Tab className="tablist-menu" tabFor="two">User Reviews</Tab>
                    <Tab className="tablist-menu" tabFor="three">Map</Tab>
                </TabList>

                <TabPanel tabId="one" className="tab-content">
                    <DescriptionTab />
                </TabPanel>

                <TabPanel tabId="two" className="tab-content">
                    <UserReviewsTab />
                </TabPanel>

                <TabPanel tabId="three" className="tab-content">
                    <LocationMapTab />
                </TabPanel>
            </Tabs>
        </div>
    </div>
);

export default RoomInfo;
