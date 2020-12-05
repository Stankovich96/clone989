import React from "react";
import styles from "./FAQ.module.css";
import Header from "../../shared-components/header/Header";
import Footer from "../../shared-components/footer/Footer";
import HeroSection from "./hero-section/HeroSection";
import Body from "./body/Body";
import CardView from "./body/card-view/CardView";

class FAQ extends React.Component {
  state = {
    body: [
      {
        "General Question": [
          { "What is 989 Workspace?": "Ask me again", descIsShown: false },
          {
            "How are you able to offer spaces from different locations?":
              "This is simple. We do not have the high cost base of traditional banks. Our operations are lean and we invest your savings in risk free instruments offered by the Nigerian government and a few low-risk investment opportunities such as corporate bond and commercial papers. The cost savings are passed to our savers in form of higher returns on their savings.",
            descIsShown: false,
          },
          {
            "How do I book and pay concurrently without being limited?":
              "Ask me again",
            descIsShown: false,
          },
          {
            "How can I be notified when a new space from a new location is listed ??":
              "Ask me again",
            descIsShown: false,
          },
        ],
      },
      {
        Workspace: [
          { "Who and who is this platform for?": "Ask me again" },
          {
            "What is membership plan ?":
              "This is simple. We do not have the high cost base of traditional banks. Our operations are lean and we invest your savings in risk free instruments offered by the Nigerian government and a few low-risk investment opportunities such as corporate bond and commercial papers. The cost savings are passed to our savers in form of higher returns on their savings.",
            descIsShown: false,
          },
          {
            "How does it work ?": "Ask that fucking question once more",
            descIsShown: false,
          },
          {
            "Why can’t I book Event space like every other booking space ?":
              "Ask again and again and again",
            descIsShown: false,
          },
        ],
      },
      {
        Apartment: [
          {
            "When am I charged for booking?": "Ask again and I will answer",
            descIsShown: false,
          },
          {
            "Can I review my experience with the Apartment I got?":
              "Aren't you tired of asking?",
            descIsShown: false,
          },
          {
            "Can I pay with any currency?": "Please go and have a rest",
            descIsShown: false,
          },
        ],
      },
      {
        "Meeting Room": [
          {
            "What are simple meetings?": "Ask two more times",
            descIsShown: false,
          },
          {
            "Is there provision for concurrent booking?":
              "I love the way you ask",
            descIsShown: false,
          },
          {
            "Do you offer group accommodation reservations?":
              "You really want to know?",
            descIsShown: false,
          },
        ],
      },
    ],
    m: false,
  };

  componentDidMount() {
    window.scroll(0, 0);
  }

  // body = [{},{},{},{}]
  //{} = [{}, {}, {}, {}]
  toggleDescription = (location, propertyName) => {
    const outIndex = location[0];
    const innerIndex = location[1];

    const tempBody = [...this.state.body];
    const tempObj = { ...tempBody[outIndex] };
    const tempPropNames = [...tempObj[propertyName]];
    const tempDesc = tempPropNames.map((obj, i) => {
      return {
        ...obj,
        descIsShown: i === innerIndex ? !obj.descIsShown : false,
      };
    });
    tempBody[outIndex][propertyName] = tempDesc;

    this.setState({ body: tempBody });
  };

  render() {
    const objPropAsString = (c) => Object.keys(c)[0];
    const { body } = this.state;

    return (
      <div className={styles.FAQ}>
        <Header backgroundColor="white" menuFontColor="#1A202C" isWhiteBg />
        <HeroSection />
        {body.map((property, outerIndex) => (
          <Body>
            <div className={styles.QuestionContainer}>
              <div key={outerIndex} className={styles.QuestionSection}>
                <p className={styles.SectionTitle}>
                  {(this.property = objPropAsString(property))}
                </p>
                <div className={styles.CardContainer}>
                  {property[this.property].map((value, innerIndex) => (
                    <CardView
                      key={innerIndex}
                      propertyName={this.property}
                      location={[outerIndex, innerIndex]}
                      descIsShown={value.descIsShown}
                      toggleDescription={this.toggleDescription}
                      value={objPropAsString(value)}
                      desc={value[objPropAsString(value)]}
                    />
                  ))}
                  <p className={styles.SeeMore}>See more</p>
                </div>
              </div>
            </div>

            {outerIndex !== body.length - 1 && (
              <div className={styles.Divider}></div>
            )}
          </Body>
        ))}

        <Footer />
      </div>
    );
  }
}

export default FAQ;
