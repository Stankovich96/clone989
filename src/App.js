import React from 'react';
import LandingPage from './pages/landing-page/Landingpage';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import ApartmentSearchResultPage from './pages/apartment/apartment-search-page/SearchResultPage';
import ApartmentShortLet from './pages/apartment/apartment-shortLet/ApartmentShortLet';
import ApartmentLongLet from './pages/apartment/apartment-longLet/ApartmentLongLet';
import TeammateNumber from './pages/workspace/teammate-amount-selection/TeammateNumber';
import SearchResultPage from './pages/workspace/search-result-page/SearchResultPage';
import  { ApartmentTypes } from './pages/apartment/apartment-types/ApartmentTypes';
import WorkspaceLeadPage from './pages/workspace/workspace-leadpage/WorkspaceLeadPage';
import SelectedWorkspaceDescription from './pages/workspace/selected-workspace-description/SelectedWorkspaceDescription';
import VirtualTour from './pages/workspace/virtual-tour/VirtualTour';
import ApartmentLeadPage from './pages/apartment/apartment-lead-page/ApartmentLeadPage';
import ApartmentDescriptionPage from './pages/apartment/apartment-description-page/ApartmentDescriptionPage';
// import Booking from './pages/workspace/booking/Booking';
import Booking from './pages/workspace/booking/Booking';
import FinalBookingStage from './pages/workspace/final-booking-stage/FinalBookingStage';
import FinalApartmentStage from './pages/apartment/final-apartment-stage/FinalApartmentStage';
import MeetingRoom from "./pages/meeting-room/MeetingRoom";
import MeetingRoomResults from "./pages/meeting-room/meeting-room-result-search/MeetingRoomResults";
import MeetingRoomDescription from './pages/meeting-room/meeting-room-description/MeetingRoomDescription';
import MeetingRoomPayment from './pages/meeting-room/meeting-room-payment/MeetingRoomPayment';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import AccountVerificaton from './components/ui-components/account-verification/AccountVerificaton';
import AccountVerificationSuccess from './components/ui-components/account-verification-success/AccountVerificationSuccess';
import CreatePassword from './pages/create-password/CreatePassword';
import FAQ from './pages/faq/FAQ';
import ForgotPassword from './pages/forgot-password/ForgotPassword';
import ForgotPasswordMail from './pages/forgot-password-mail/ForgotPasswordMail';
import CreateNewPassword from './pages/create-new-account-password/CreateNewPassword';
import PasswordChangeSuccess from './pages/successfull-password-change/PasswordChangeSuccess';
import Contact from './pages/contact/Contact';
import Dashboard from './pages/dashboard/Dashboard';
import ReservationSelection from './pages/dashboard/reservation-selection/ReservationSelection';
import SelectedTransaction from './pages/dashboard/selected-transaction/SelectedTransaction';
import UpdateReservation from './pages/dashboard/update-reservation/UpdateReservation';
import ConfirmPay from './pages/dashboard/confirm-pay/ConfirmPay';
import TeammateUpdate from './pages/dashboard/update-teammates/TeammateUpdate';
import DbTransactions from './pages/dashboard/transactions/DbTransactions';
import Profile from './pages/dashboard/profile/Profile';
import Cards from './pages/dashboard/cards/home/Cards';
import AddCard from './pages/dashboard/cards/add-card/AddCard';
import Notifications from './pages/dashboard/notifications/Notifications';


function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path={`/workspace/searchResultPage`} component={SearchResultPage} />
         <Route path={`/workspace/teammateAmount`} component={TeammateNumber} />
        <Route path="/workspace/selectedWorkspaceDescription" component={SelectedWorkspaceDescription} />
        <Route path="/workspace/virtualTour" component={VirtualTour} />
        <Route path="/workspace/booking" component={Booking} />
        <Route path="/workspace/finalBookingStage" component={FinalBookingStage} />
        <Route path="/workspace" component={WorkspaceLeadPage} />
        <Route exact path="/apartment" component={ApartmentLeadPage} />
        <Route exact path="/meetingRoom" component={MeetingRoom} />
        <Route exact path="/MeetingRoomResults" component={MeetingRoomResults} />
        <Route exact path="/MeetingRoomDescription" component={MeetingRoomDescription} />
        <Route exact path={`/apartment/apartmentType`} component={ApartmentTypes} />
        <Route exact path="/MeetingRoomPayment" component={MeetingRoomPayment} />
        <Route exact path="/apartmentLongLet" component={ApartmentLongLet} />
        <Route exact path="/apartmentShortLet" component={ApartmentShortLet} />
        <Route exact path={`/apartment/:id`} component={ApartmentSearchResultPage} />
        <Route exact path="/apartmentDescriptionPage" component={ApartmentDescriptionPage} />
        <Route exact path="/apartmentSearchResultPage" component={ApartmentSearchResultPage} />
        <Route exact path="/finalApartmentStage" component={FinalApartmentStage} /> 
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/accountverification" component={AccountVerificaton} />
        <Route exact path="/verificationSuccess" component={AccountVerificationSuccess} />
        <Route exact path="/createPassword" component={CreatePassword} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/forgetPassword" component={ForgotPassword} />
        <Route exact path="/forgetPassword/mail" component={ForgotPasswordMail} />
        <Route exact path="/user/reset/createPassword" component={CreateNewPassword} />
        <Route exact path="/user/reset/passwordSuccessful" component={PasswordChangeSuccess} />
        <Route exact path="/contactUs" component={Contact} />
        <Route exact path="/dashboard/reservationSelection" component={ReservationSelection} />
        <Route exact path="/dashboard/selectedTransaction/updatePlan/pay" component={ConfirmPay} />
        <Route exact path="/dashboard/selectedTransaction/updatePlan" component={UpdateReservation} />
        <Route exact path="/dashboard/selectedTransaction/updateTeammates" component={TeammateUpdate} />
        <Route exact path="/dashboard/selectedTransaction" component={SelectedTransaction} />
        <Route exact path="/dashboard/transactions" component={DbTransactions} />
        <Route exact path="/dashboard/profile" component={Profile} />
        <Route exact path="/dashboard/cards/addCard" component={AddCard} />
        <Route exact path="/dashboard/cards" component={Cards} />
        <Route exact path="/dashboard/notifications" component={Notifications} />
        <Route exact path="/dashboard/home" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
