import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import { IoIosArrowDown } from "react-icons/io";

const attendeesLists = [
    {
      id: 1,
      value: '01 - 05 person',
    },
    {
      id: 2,
      value: '06 - 10 person',
    },
    {
      id: 3,
      value: '11 - 30 person',
    },
    {
        id: 4,
        value: '31 - 50 person',
    },
    {
        id: 5,
        value: '51 - 100 person',
      
    },
    {
        id: 6,
        value: '100+ person',
    },
    {
        id: 7,
        value: 'I\'m flexible',
    },

];

class AttendeesFilter extends Component {
    constructor(){
        super();
        this.state = {
            open: false,
            selection: [],
        }
    }

    componentDidMount(){
        this.props.passFilterState(this.state.open, 'attendees');  
    }
    
    componentDidUpdate(){
        this.props.passFilterState(this.state.open, 'attendees');
    }

    toggleDropdown = () => {
        this.setState({
            open: !this.state.open
        });
    }

    selectOnClick = (item) => {
        if(!this.state.selection.some(current => current.id === item.id)){
            this.setState({
                selection: [item]
            });
        } else {
            let removeSelected = this.state.selection;
            removeSelected = removeSelected.filter(current => current.id !== item.id);   
            this.setState({
                selection: [...removeSelected]
            });
        }
    }

    isItemInSelection = (item) => {
        if(this.state.selection.some(current => current.id === item.id)){
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
            <div className="AttendeesFilter">
             <div className={`search-input__attendees ${((open) || !(selection.length == 0)) && 'bg-colorLight'}`} tabIndex={0} role="button" onKeyPress={() => this.toggleDropdown(!open)} onClick={() => this.toggleDropdown(!open)}>
                 Attendees <IoIosArrowDown className="dropdown-icon"/>
             </div> 
              {open && (
                  <ul className="list-body filter-card">
                      {attendeesLists.map(item =>(
                          <li key={item.id} className={`${(!this.isItemInSelection(item)) ? 'list-item': 'list-item list-item-selected'}`} onClick={() => this.selectOnClick(item)}>
                              <button type="button">
                                <span>{item.value}</span>
                              </button>
                          </li>
                      ))}
                      <div className="list-footer">
                          <span className="list-cancel" onClick={() => this.cancelAndClose()}>Cancel</span>
                          <span className="list-ok" onClick={() => this.toggleDropdown(!open)}>OK</span>
                      </div>
                  </ul>
              )}
            </div>
        )
    }
}

export default onClickOutside(AttendeesFilter);
