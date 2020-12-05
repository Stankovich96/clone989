import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';

import { IoIosArrowDown } from "react-icons/io";

class DurationAndDateStamp extends Component{
    constructor(){
        super();
        this.state = {
            open: false,
            duration: "",
            dateStamp: "",
            startTime: "",
            endTime: ""
        }
    }

    componentDidMount(){
        this.props.passFilterState(this.state.open, 'when');  
    }
    
    componentDidUpdate(){
        this.props.passFilterState(this.state.open, 'when');
    }

    toggleDropdown = () => {
        this.setState({
            open: !this.state.open
        });
    }

    cancelAndClose = () => {
        // this.setState({ duration: "" });
        this.toggleDropdown();
    }

    handleClickOutside = () => {
        this.setState({ open: false });
    }

    render(){
        const { open } = this.state;

        return (
            <div className="WhenFilter">
                <div className={`search-input__when ${(open) && 'bg-colorLight'}`} tabIndex={0} role="button" onKeyPress={() => this.toggleDropdown(!open)} onClick={() => this.toggleDropdown(!open)}>
                    when <IoIosArrowDown className="dropdown-icon"/>
                </div>
                {open && (
                <div className="filter-card when-dropdown">
                    <div className="duration">
                        <span>Duration</span>
                        <span className="duration-icon"><IoIosArrowDown className="dropdown-icon"/></span>
                    </div>
                    <div className="choose-date"> Choose date </div>
                    <div className="timestamp">
                        <span className="timestamp-start">Start time</span>
                        <span className="timestamp-end">End time</span>
                    </div>
                    <div className="when-dropdown__footer">
                        <span className="list-cancel" onClick={() => this.cancelAndClose()}>Cancel</span>
                        <span className="list-ok" onClick={() => this.toggleDropdown(!open)}>OK</span>
                    </div>
                </div>
              )}
            </div>
        )
    }
}

export default onClickOutside(DurationAndDateStamp);
