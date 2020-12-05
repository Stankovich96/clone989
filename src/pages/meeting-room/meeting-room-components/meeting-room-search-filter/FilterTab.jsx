import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import { IoIosArrowDown } from "react-icons/io";

const filterByVenueList = [
    {
        id: '#1',
        venue: 'Sport Venue'
    },
    {
        id: '#2',
        venue: 'Event Location'
    },
    {
        id: '#3',
        venue: 'Co-working Space'
    },
    {
        id: '#4',
        venue: 'Conference Venue'
    },
    {
        id: '#5',
        venue: 'Academic Venue'
    },
    {
        id: '#6',
        venue: 'Business Centre'
    },
    {
        id: '#7',
        venue: 'Other'
    }
];

const filterByAmentiesList = [
    {
        id: 'Amenities#1',
        amenity: 'Catering'
    },
    {
        id: 'Amenities#2',
        amenity: 'Whiteboard & makers'
    },
    {
        id: 'Amenities#3',
        amenity: 'LCD Projector'
    },
    {
        id: 'Amenities#4',
        amenity: 'Secreterial Services'
    },
    {
        id: 'Amenities#5',
        amenity: 'Projector Screen'
    },
    {
        id: 'Amenities#6',
        amenity: 'Video Conferencing'
    },
    {
        id: 'Amenities#7',
        amenity: 'Telephone Service'
    },
    {
        id: 'Amenities#8',
        amenity: 'Multimedia Services'
    }
];


class FilterTab extends Component {
    constructor(){
        super();
        this.state = {
            open: false,
            selection: [],
        }
    }

    componentDidMount(){
        this.props.passFilterState(this.state.open, 'filter');  
    }
    
    componentDidUpdate(){
        this.props.passFilterState(this.state.open, 'filter');
    }

    toggleDropdown = () => {
        this.setState({
            open: !this.state.open
        });
    }

    selectOnClick = (item) => {
        if(!this.state.selection.some(current => current.id === item.id)){
            this.setState({
                selection: [...this.state.selection, item]
            });
        } else {
            let removeSelected = this.state.selection;
            removeSelected = removeSelected.filter(current => current.id !== item.id);   
            this.setState({
                selection: [...removeSelected]
            });
        }
    }

    selectAllAmenities= () => {
        if (!filterByAmentiesList.every(eachAmenity => this.state.selection.includes(eachAmenity))) {
            this.setState({
                selection: [...filterByAmentiesList]
            }) 
        } else {
            let removeSelected = this.state.selection;
            removeSelected = removeSelected.filter(current => !filterByAmentiesList.find(amenity => current.id === amenity.id));
            this.setState({ selection: [...removeSelected]})
        }
    }

    selectAllVenues = () => {
        if (!filterByVenueList.every(venue =>this.state.selection.includes(venue))) {
            this.setState({
                selection: [...filterByVenueList]
            }) 
        } else {
            let removeSelected = this.state.selection;
            removeSelected = removeSelected.filter(current => !filterByVenueList.find(venue => current.id === venue.id)); 
            this.setState({ selection: [...removeSelected]})
        }
    }

    isAllVenuesSelected = () => (filterByVenueList.every(venue =>this.state.selection.includes(venue))) ? true : false ;
    
    isAllAmenitiesSelected = () => (filterByAmentiesList.every(eachAmenity => this.state.selection.includes(eachAmenity))) ? true : false;

    isItemInSelection = (item) => {
        if(this.state.selection.find(current => current.id === item.id)){
            return true;
        }
        return false;
    }

    cancelAndClose = () => {
        this.setState({ selection: [] });
        this.toggleDropdown();
    }

    handleClickOutside = () => {
        this.setState({ open: false });
    }


    render(){
        const { open, selection } = this.state;

        return (
            <div className="FilterTab">
             <div className={`search-input__filter ${((open) || !(selection.length == 0)) && 'bg-colorLight'}`} tabIndex={0} role="button" onKeyPress={() => this.toggleDropdown(!open)} onClick={() => this.toggleDropdown(!open)}>
                 Filter <IoIosArrowDown className="dropdown-icon"/>
             </div> 
              {open && (
                  <div className="filter-card">
                      <div className="filterBy">
                          <div className="filterBy-venue">
                             <div className="header">
                                <div className="filterBy-title">Filter by Venue type</div>
                                <div className="filterBy-select-all">
                                    <input type="checkbox" id="filterByVenue" onChange={()=> this.selectAllVenues()} checked={this.isAllVenuesSelected()}/>
                                    <label htmlFor="filterByVenue">Select all</label>
                                </div>
                             </div>
                             <div className="body">
                                {filterByVenueList.map(venueItem =>  (
                                    <div className="venue-item" key={venueItem.id}>
                                        <input type="checkbox" id={venueItem.id}  onChange={() => this.selectOnClick(venueItem)} checked={this.isItemInSelection(venueItem)}/>
                                        <label htmlFor={venueItem.id}>{venueItem.venue}</label>
                                    </div>
                                ))}
                             </div>
                          </div>
                          <div className="filterBy-amenities">
                             <div className="header">
                                <div className="filterBy-title">Filter by Amenities</div>
                                <div className="filterBy-select-all">
                                    <input type="checkbox" id="filterByAmenities" onChange={()=> this.selectAllAmenities()} checked={this.isAllAmenitiesSelected()} />
                                    <label htmlFor="filterByAmenities">Select all</label>
                                </div>
                             </div>
                             <div className="body">
                                {filterByAmentiesList.map(amenitiesList =>  (
                                    <div className="amenities-item" key={amenitiesList.id}>
                                        <input type="checkbox" id={amenitiesList.id} onChange={() => this.selectOnClick(amenitiesList)} checked={this.isItemInSelection(amenitiesList)}/>
                                        <label htmlFor={amenitiesList.id}>{amenitiesList.amenity}</label>
                                    </div>
                                ))}
                             </div>
                          </div>
                      </div>
                      <div className="list-footer">
                          <span className="list-cancel" onClick={() => this.cancelAndClose()}>Cancel</span>
                          <span className="list-ok" onClick={() => this.toggleDropdown(!open)}>OK</span>
                      </div>
                  </div>
              )}
            </div>
        )
    }
}

export default onClickOutside(FilterTab);
