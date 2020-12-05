import React, { Component, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { ResultCard } from "./ResultSearch.utils";

import "./ResultSearch.modules.scss";
import AbujaIntlMap from "../../../../assets/meetingroom/Abuja-intl-conf.png";
import Pagination from "../mr-pagination/Pagination";

class ResultSearch extends Component {
    constructor() {
        super();
        
        this.state = {
            rooms: Array(15).fill(<ResultCard cardViewStyle="card-landsc" />),
            currentPage: 1,
            roomPerPage: 8,  
        };
    }

    render(){
        const { rooms, currentPage, roomPerPage }  = this.state;
        const { isMapOpen, isOverlayShown } = this.props;

        // Get current rooms
        const indexOfLastRoomResult = currentPage * roomPerPage;
        const indexOfFirstRoomResult = indexOfLastRoomResult - roomPerPage;
        const currentRooms = rooms.slice(indexOfFirstRoomResult, indexOfLastRoomResult);

        // Change page
        const paginate = (pageNumber) => {
            this.setState({ currentPage: pageNumber });
        }        

        return(   
            <div className={`result ${isMapOpen ? 'resultWMap': ''} ${isOverlayShown ? 'resultOverlay': ''}`} >
                <div className={`result-body ${isMapOpen ? 'resultFieldWmap': ''}`}>
                    <div className={`result-body__query-found ${isMapOpen ? 'result-query-field': ''}`}>19 Meeting Rooms in Abuja</div>
                    <div className={`result-body__cards ${isMapOpen ? 'grid-landscape-1 resultField': 'grid-landscape-2'}`}>
                        { (isMapOpen) ?
                            rooms.map((Card, index) =><Fragment key={index}>{<Link to="/MeetingRoomDescription">{Card}</Link>}</Fragment>):
                            currentRooms.map((Card, index) =><Fragment key={index}>{<Link to="/MeetingRoomDescription">{Card}</Link>}</Fragment>)
                        }
                    </div>
                    <div className={`${isMapOpen ? 'paginationFieldWmap': 'pagination-field'}`}>
                        {(!isMapOpen) ? <Pagination paginate={paginate} roomPerPage={roomPerPage} totalRooms={rooms.length} /> : '' }
                    </div>
                </div>
                <div className={`result-map ${isMapOpen ? 'mapFieldWmap': ''}`}>
                    <div className="close-map-button">&#10005;</div>
                    <img src={AbujaIntlMap} alt="Abuja Int'l conference room"/>
                </div>
            </div>
        );
    }
};

export default ResultSearch;