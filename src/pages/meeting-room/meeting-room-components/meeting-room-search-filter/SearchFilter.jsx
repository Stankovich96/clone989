import React, { Component } from 'react';

import { SelectDefaultInput } from "../select-input/select-input";
import { cities } from "../../../../external-data/location-data";
import { IoIosArrowDown } from "react-icons/io";
import { ReactComponent as RightArrowIcon } from "../../../../assets/meetingroom/white-right-arrow.svg";
import MapSwitchButton from "../mr-map-toggle/MapToggleButton";
import AttendeesFilter from './Attendees.filter';
import DurationAndDateStamp from './DurationAndDateStamp';
import FilterTab from './FilterTab';

import "./SearchFilter.modules.scss";


class SearchFilter extends Component { 
    constructor(){
        super();
    }

    render(){ 
        const { passFilterState } = this.props;
        
        return(
            <div className="container">
                <div className="search">
                    <div className="search-input">
                        <div className="search-input__location"> 
                            <SelectDefaultInput  width='270px' options={cities} placeholder={"Enter location"} isClearable
                                theme = {theme => ({
                                    ...theme,
                                    colors: {
                                    ...theme.colors,
                                    primary25: '#e7e7e7',
                                    primary: 'black',
                                    }
                                })}
                            /> 
                        </div>
                        <DurationAndDateStamp passFilterState={passFilterState}  />
                        <AttendeesFilter passFilterState={passFilterState} />
                        <FilterTab passFilterState={passFilterState}  />
                        <button className="search-input__search-button" type="button">Search <RightArrowIcon className="nav-right" /> </button>
                    </div>
                    <div className="search-format">
                        <div className="map-switch-button" onClick={this.props.handleMapOpen}>
                            <MapSwitchButton className="map-toggle" defaultActive={this.props.isMapOpen} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default SearchFilter;