import React from "react";
import styles from "./Contact.module.css";
import ContactImg from "../../assets/contactImg.png";
import Header from "../../shared-components/header/Header";
import Footer from "../../shared-components/footer/Footer";
import CtForm from "./ct-form/CtForm";
import { ReactComponent as Enquiry } from "../../assets/EnquiryVector.svg";
import CtMap from "./ct-map/CtMap";
import contactGeoJson from "../../external-data/contactGeoJson";
import mapboxgl from "mapbox-gl";
import ReactDOMServer from "react-dom/server";
import { popupLayout, popText } from "./ct-map/CPopupStyle";

class Contact extends React.Component {
  state = {
    lng: 3.35,
    lat: 6.5,
    zoom: [11],
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/light-v10",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    //add navigation control for zooming in and out
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    //adding a custom marker
    contactGeoJson.features.forEach((marker) => {
      // create a HTML element for each feature
      var el = document.createElement("div");
      var node = document.createTextNode(marker.properties.price);
      el.appendChild(node);
      el.style = `padding:5px 10px;
          display:flex;
          justify-content:center;
          align-items:center;
          background-color:white;
          border-radius:20px;
          font-weight:600;
          color:#0F1310;
          cursor:pointer;
          box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.12);`;

      // make a marker for each feature and add to the map
      new mapboxgl.Marker()
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(this.popUpS())
        )
        .addTo(map);
    });
  }

  popUpS = (props) => {
    return ReactDOMServer.renderToStaticMarkup(this.E());
  };

  E = (props) => (
    <div style={popupLayout}>
      <p style={popText}>We are here</p>
    </div>
  );

  render() {
    return (
      <div className={styles.Contact}>
        <Header isWhiteBg backgroundColor="white" menuFontColor="#1A202C" />
        <div className={styles.IntroMsg}>
          <div className={styles.IntroTitle}>Contact Us</div>
          <p className={styles.IntroDesc}>
            We understand you have questions that are not answered in our FAQ
            section. If you cannot find the answer to your question, please feel
            free to contact support
          </p>
        </div>
        <div className={styles.Location}>
          <img
            className={styles.ContactImg}
            src={ContactImg}
            alt="contact location"
          />
          <div className={styles.LocationData}>
            <p className={styles.Ld_HeadOffice}>Our Head Office</p>
            <p className={styles.Ld_State}>Lagos</p>
            <p className={styles.Ld_Number}>+234 807 896 5432</p>
            <p className={styles.Ld_Email}>sales@989coworking.com</p>
            <p className={styles.Ld_FullStreetAddress}>
              Maison Fahrenheit, 80 Adetokunbo Ademola Street, Victoria Island
              101241, Lagos, Nigeria.
            </p>
          </div>
        </div>
        <div className={styles.ContactForm}>
          <CtForm />

          <CtMap myRef={(el) => (this.mapContainer = el)} />
        </div>
        <div className={styles.Enquiry}>
          <p>
            For questions about hiring or enquiries about open opportunities,
            please contact us at careers@989coworking.com
          </p>
          <Enquiry />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
