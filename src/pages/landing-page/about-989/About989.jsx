import React from "react";
import styles from "./About989.module.css";

const ABOUTTEXT =
  "At 989 Workspaces, we understand what it takes to get a business off the ground. Our mission is to create affordable shared spaces in a quiet and collaborative environment. Our slogan is “Find your Focus” and because we understand how noisy most shared spaces can be, we bring together people who live and breathe that mindset. From furniture to high-speed internet - we’ve thought about everything you might need to get you started on your next big project..";

const About989 = (props) => {
  return (
    <div className={styles.About989}>
      <section className={styles.Left}>
        <img src={props.activeImg} alt="About 989" />
      </section>
      <section className={styles.Right}>
        <div className={styles.Navigator}>
          <span
            style={{
              backgroundColor: props.isAboutTab1Activated
                ? "#575957"
                : "#D2D1D1",
            }}
            onClick={() => props.toggleImg(true, false, false, 0)}
          />
          <span
            style={{
              backgroundColor: props.isAboutTab2Activated
                ? "#575957"
                : "#D2D1D1",
            }}
            onClick={() => props.toggleImg(false, true, false, 1)}
          />
          <span
            style={{
              backgroundColor: props.isAboutTab3Activated
                ? "#575957"
                : "#D2D1D1",
            }}
            onClick={() => props.toggleImg(false, false, true, 2)}
          />
        </div>
        <p className={styles.Title}>
          About <b>989</b> Workspace
        </p>
        <p className={styles.Description}>{ABOUTTEXT}</p>
      </section>
    </div>
  );
};

export default About989;
