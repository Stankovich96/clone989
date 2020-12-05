import React, { Component, Fragment } from 'react';
import LogoOnlyHeader from "../../../shared-components/logo-only-header/LogoOnlyHeader";
import PaymentCard from "./MeetingRoomPayment.utils";

import "./MeetingRoomPayment.modules.scss";

class MeetingRoomPayment extends Component {
    state = {
        isLoggedIn: false
    }

    render(){
        return (
            <Fragment>
                <LogoOnlyHeader />
                <PaymentCard isLoggedIn={this.state.isLoggedIn} history={this.props.history} />
            </Fragment>
        );
   }
}

export default MeetingRoomPayment;
