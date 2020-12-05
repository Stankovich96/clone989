import React from 'react';
import styles from './CardLayout.module.css';
import SingleCard from './single-card/SingleCard';
import WorkspaceImage1 from '../../assets/CardImage1.png';
import WorkspaceImage2 from '../../assets/CardImage2.png';
import WorkspaceImage3 from '../../assets/CardImage3.png';

const cardData = [
  {
    officeImg: WorkspaceImage1,
    officeName: "Flexible Private Offices",
    location: "Lagos",
    pricing: 75000,
  },
  {
    officeImg: WorkspaceImage2,
    officeName: "On-demand Workspaces",
    location: "Abuja",
    pricing: 9000,
  },
  {
    officeImg: WorkspaceImage3,
    officeName: "Hot Desk",
    location: "Lagos",
    pricing: 9000,
  },
];

const CardLayout = props => {
 return <div style={{flexDirection: props.flexDirection }} className={styles.CardLayout}>
    {cardData.map(({ officeImg, officeName, location, pricing }, index) => (
      <SingleCard
        key={index}
        officeImg={officeImg}
        title={officeName}
        location={location}
        pricing={pricing}
        url={props.url}
      />
    ))}
    <div className={styles.ExtraPadding}>null</div>
  </div>
};

export default CardLayout;
