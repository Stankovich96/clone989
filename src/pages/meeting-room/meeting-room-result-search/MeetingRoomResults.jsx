import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import Header  from "../../../shared-components/header/Header";
import SearchFilter from "../meeting-room-components/meeting-room-search-filter/SearchFilter";
import ResultSearch from '../meeting-room-components/mr-result-search/ResultSearch';
import Footer from "../../../shared-components/footer/Footer";

class MeetingRoomResults extends Component {
    constructor() {
        super();

        this.state = {
            isOverlayShown: false,
            isMapShown: false,
            isFilterOneOpen: false,
            isFilterTwoOpen: false,
            isFilterThreeOpen: false,
            isFilterFourOpen: false,
            defaultView: true,
        }
    }

    handleMapOpenning = () => {  
        this.setState({
            isMapShown: !this.state.isMapShown
        });   
    }

    getFilterState = (filterState, filterName) => {
        if(filterName === 'location'){
            if(this.state.isFilterOneOpen !== filterState){
                this.setState({ isFilterOneOpen: filterState});
            }
        } else if (filterName === 'when'){
            if(this.state.isFilterTwoOpen !== filterState){
                this.setState({ isFilterTwoOpen: filterState});
                this.setState({ isOverlayShown: !this.state.isOverlayShown });
            }
        } else if (filterName === 'attendees'){
            if(this.state.isFilterThreeOpen !== filterState){
                this.setState({ isFilterThreeOpen: filterState});
                this.setState({ isOverlayShown: !this.state.isOverlayShown });
            }
        } else if (filterName === 'filter'){
            if(this.state.isFilterFourOpen !== filterState){
                this.setState({ isFilterFourOpen: filterState});
                this.setState({ isOverlayShown: !this.state.isOverlayShown });
            }
        }
    }

    render(){
        const { isMapShown, isOverlayShown } = this.state;

        return(
            <Fragment>
                <Header
                isWhiteBg={true}
                backgroundColor="#fff"
                menuFontColor="#1A202c"
                />
                <SearchFilter isMapOpen={isMapShown} handleMapOpen={this.handleMapOpenning} passFilterState={this.getFilterState} />
                <ResultSearch isMapOpen={isMapShown} isOverlayShown={isOverlayShown} />
                <Footer />
            </Fragment>
        );
    }
}

export default MeetingRoomResults;