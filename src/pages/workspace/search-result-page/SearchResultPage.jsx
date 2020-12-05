import React, { Component } from "react";
import Header from "../../../shared-components/header/Header";
import styles from "./SearchResultPage.module.css";
import mapboxgl from "mapbox-gl";
import classes from "./SearchResultPage.module.css";
import ZoomIn from "../../../assets/zoomIn.svg";
import ZoomOut from "../../../assets/zoomOut.svg";
import WorksapceCardLayout from "../../../components/ui-components/workspace-cardlayout/WorkspaceCardLayout";
import Footer from "../../../shared-components/footer/Footer";
import WorkspaceSearchContainer from "../../../components/ui-components/workspace-search-container/WorkspaceSearchContainer";
import Filters from "./filters/Filters";
import { GrMap } from "react-icons/gr";
import Work from "../../../assets/meetingroom/Abuja-1.jpg";
import geoJson from "../../../external-data/989workspace";

import LayoutImg from "../../../assets/workspace/workspaceImg2.png";
import LayoutImg1 from "../../../assets/workspace/workspaceImg1.png";
import LayoutImg2 from "../../../assets/workspace/workspaceImg3.png";

import ReactDOMServer from "react-dom/server";
import "./globalMapboxStyle.css";

import {
  popupLayout,
  popImg,
  popBtm,
  popName,
  popLocation,
  popPrice,
  popBtmLeft
} from "./popupStyle";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamVsbzRrdWwiLCJhIjoiY2tmMjk4bm5uMDBkODJyazIxOGRlZ3RrayJ9.LKQegEARI1dgTPedFE_mGg";

const E = (props) => (
  <div style={popupLayout}>
    <img src={Work} alt="Jelo" style={popImg} />
    <div style={popBtm}>
      <div style={popBtmLeft}>
        <p style={popName}>Tower House</p>
        <p style={popLocation}>Ikeja, Lagos</p>
      </div>
      <p style={popPrice}>N16, 000</p>
    </div>
  </div>
);

const popUpS = (props) => {
  const c = ReactDOMServer.renderToStaticMarkup(E());
  console.log(E());
  return c;
};

const workspaceData = [
  {
    name: "Tower House",
    location: "Ikeja",
    rating: 4.4,
    pricing: "10,000",
    capacity: "3-10",
    teamSize: "small team",
    layoutImg: LayoutImg,
    amenities: ['Wellness Room', 'Event Space', 'Wifi', 'Outdoor Space'],
    id: "ID_1",
  },
  {
    name: "Three-Storey Duplex",
    location: "Surulere",
    rating: 2.1,
    pricing: "5,000",
    capacity: "10-100",
    teamSize: "large team",
    layoutImg: LayoutImg1,
    amenities: ['Wifi', 'Onsite Staff', 'Outdoor Space', 'Parking', 'Parking', 'Outdoor Space'],
    id: "ID_2",
  },
  
  {
    name: "Linda's Home",
    location: "Ikeja",
    rating: 3.5,
    pricing: "25,000",
    capacity: "1-20",
    teamSize: "small team",
    layoutImg: LayoutImg2,
    amenities: ['Charging Station', 'Event Space', 'Outdoor Space'],
    id: "ID_3",
  },
  {
    name: "Tower House",
    location: "Ikeja",
    rating: 4.4,
    pricing: "10,000",
    capacity: "3-10",
    teamSize: "small team",
    layoutImg: LayoutImg,
    amenities: ['Wellness Room', 'Event Space', 'Wifi', 'Outdoor Space'],
    id: "ID_4",
  },
  
];

class SearchResultPage extends Component {
  state = {
    lng: 3.33,
    lat: 6.5833,
    zoom: [11],
    teammateNum: 0,
    workspaceData: workspaceData,
    lHeight: 0
  };

  leftRef = React.createRef();

  componentDidMount() {
    window.scrollTo(0, 0);
    //console.log(geoJson);

    this.setState({lHeight: this.leftRef.current.clientHeight})

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/light-v10",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });

    //map.addLayer()
    map.on("load", () => {
      // add the data source for new a feature collection with no features
      map.addSource("989workspaces", {
        type: "geojson",
        data: geoJson,
      });
      // now add the layer, and reference the data source above by name
      map.addLayer({
        id: "989workspaces-layer",
        source: "989workspaces",
        type: "symbol",
        layout: {
          // full list of icons here: https://labs.mapbox.com/maki-icons
          "icon-image": "bakery-15", // this will put little croissants on our map
          "icon-padding": 25,
          "icon-allow-overlap": true,
        },
      });
    });

    map.on("move", (e) => {
      let features = map.queryRenderedFeatures({
        layers: ["989workspaces-layer"],
      });
      console.log(features);
      this.getDataToRender(features);
      //zoom: map.getZoom().toFixed(2),

      //lng: map.getCenter().lng.toFixed(4),
      //lat: map.getCenter().lng.toFixed(4),
    });

    map.on("click", "989workspaces-layer", (e) => {
      console.log(e.features);
      if (!e.features.length) {
        return;
      }
      const feature = e.features[0];
      console.log(feature);

      const img = require(`../../../assets/workspace/${feature.properties.image}`);
      const popup = new mapboxgl.Popup({ offset: [0, 15] })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(popUpS())
        .addTo(map);
    });
    //add navigation control for zooming in and out
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // change cursor to pointer when user hovers over a clickable feature
    map.on("mouseenter", "989workspaces-layer", (e) => {
      if (e.features.length) {
        map.getCanvas().style.cursor = "pointer";
      }
    });

    // reset cursor to default when user is no longer hovering over a clickable feature
    map.on("mouseleave", "989workspaces-layer", () => {
      map.getCanvas().style.cursor = "";
    });

    //adding a custom marker
    geoJson.features.forEach((marker) => {
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
      new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
    });
  }

  getDataToRender = (features) => {
    const newM = features.map(({ properties }) => properties.id);
    console.log(newM);

    const visibleMapData = workspaceData.filter(
      ({ id }) => newM.indexOf(id) >= 0
    );
    this.setState({ workspaceData: visibleMapData });
  };

  modifyTeammate = (isAdd) => {
    this.setState({
      teammateNum: isAdd
        ? this.state.teammateNum + 1
        : this.state.teammateNum > 1
        ? this.state.teammateNum - 1
        : 1,
    });
  };

  render() {
    return (
      <div className={styles.SearchResultPage}>
        <Header isWhiteBg backgroundColor="white" menuFontColor="#1A202C" />
        <WorkspaceSearchContainer
          modifyTeammate={this.modifyTeammate}
          teammateNum={this.state.teammateNum}
        />
        <div className={styles.SearchResults} style={{height: `${this.state.lHeight}px`}}>
          <div className={styles.Left} ref={this.leftRef}>
            <p className={styles.WorkspaceCount}>
              <span>30&nbsp;</span> <span> Private workspaces&nbsp;</span> in
              Ikeja
              <div className={styles.MapIcon}>
                <GrMap />
              </div>
            </p>
            <div className={styles.Filters}>
              <Filters />
            </div>
            <div className={styles.workspaceDataContainer}>
              {this.state.workspaceData.map(
                (
                  {
                    name,
                    location,
                    rating,
                    pricing,
                    capacity,
                    teamSize,
                    layoutImg,
                    amenities
                  },
                  index
                ) => (
                  <WorksapceCardLayout
                    key={index}
                    name={name}
                    location={location}
                    rating={rating}
                    pricing={pricing}
                    capacity={capacity}
                    teamSize={teamSize}
                    layoutImg={layoutImg}
                    amenities={amenities}
                    count={0}
                  />
                )
              )}
            </div>
          </div>
          <div className={classes.MapLayout}>
            <div
              className={styles.MapData}
              ref={(el) => (this.mapContainer = el)}
            ></div>
            {/* <div className={styles.ZoomToggle}>
              <button>
                <img src={ZoomIn} alt="zoom in" />
              </button>
              <div className={styles.Separator}></div>
              <button>
                <img src={ZoomOut} alt="zoom out" />
              </button>
                </div>*/}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default SearchResultPage;
