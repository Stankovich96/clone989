import React from "react";
import SearchLayout from "../../../../shared-components/search-layout/SearchLayout";
import styles from "./HeroSection.module.css";
import WorkspaceImage1 from "../../../../assets/workspace/workspaceImg1.png";
import WorkspaceImg from "../../../../assets/WorkspaceImg.png";
import WorkspaceImg1 from "../../../../assets/meetingroom/Abuja-2.jpg";
import WorkspaceImg3 from "../../../../assets/meetingroom/Abuja-3.jpg";

import { ReactComponent as ArrowRight } from "../../../../assets/backArrow.svg";

const desc =
  "We make booking workspaces as easy as possible. Workspaces have never felt like home. Start booking now.";

const HeroSection = (props) => (
  <div className={styles.HeroSection}>
    <section className={styles.Left}>
      <div>
        <p className={styles.Title}>989, the best place to book a workspace</p>
        <p className={styles.Description}>{desc}</p>
      </div>
      <div className={styles.SearchLayout}>
        <SearchLayout
          heading="Find a Workspace"
          placeholder="Search for a workplace"
          path="teammateAmount"
          isDisabled={props.isDisabled}
          enableSearchBtn={props.enableSearchBtn}
        />
      </div>
    </section>
    <section className={styles.Right} >
      <div className={styles.Container} ref={props.imageLayoutRef}>
        <div ref={props.imageRef} className={styles.ImgHolder}>
          <img src={WorkspaceImg} alt="Workspace Image1" />
        </div>
        <div className={styles.ImgHolder}>
          <img src={WorkspaceImg} alt="Workspace Image2" />
        </div>
        <div className={styles.ImgHolder}>
          <img src={WorkspaceImg} alt="Workspace Image3" />
        </div>
        <div className={styles.Dummy}></div>
        <button className={styles.MoveRight} onClick={props.moveRight}>
          <ArrowRight />
        </button>
      </div>
    </section>
  </div>
);

export default HeroSection;
