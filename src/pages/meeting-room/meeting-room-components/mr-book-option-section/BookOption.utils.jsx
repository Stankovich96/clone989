import React, { Fragment } from "react";
import { ReactComponent as LinkIcon } from "../../../../assets/meetingroom/card-link-icon.svg";

export const Card = React.forwardRef((props, ref) =>{
  const {
    cardInfo: { meetingRoomImg, roomType, description },
  } = props;
  return (
    <div className="card" ref={ref}>
      <img src={meetingRoomImg} alt={roomType} />
      <div className="card-body">
        <p className="card-body__title">{roomType}</p>
        <p className="card-body__text">{description}</p>
        <div className="card-body__link">
          <span>Select venue</span>
          <span>
            <LinkIcon className="link-icon" />
          </span>
        </div>
      </div>
    </div>
  );
});


export const BookOptionDesc = () => (
  <Fragment>
    <div className="header">
      <div className="header__text">Meeting convenience re-defined</div>
      <span className="header__line"></span>
    </div>
    <div className="description">
      Use our meeting rooms for presentations, interviews, client pitches or
      training for your company. We also provide a number of meeting spaces as
      conference rooms and boardrooms for rent. Catering, coffee service,
      projection equipment and other services are available to ensure you have
      everything you need for your meeting. Just show up and get started.
    </div>
    <button>Book now</button>
  </Fragment>
);


const easeInOut = (currentTime, start, change, duration) => {
  currentTime /= duration / 2;
  if (currentTime < 1) {
      return change / 2 * currentTime * currentTime + start;
  }
  currentTime -= 1;
  return -change / 2 * (currentTime * (currentTime - 2) - 1) + start;
}


export const scrollTo = (params) => {
  return new Promise((res, rej)=>{    
    const {
      element,
      to,
      duration,
      scrollDirection,
      callback,
      context
    } = params;
    
    var start = element[scrollDirection],
        change = to - start,
        increment = (1000 / 60);

    var animateScroll = function(elapsedTime) {        
        elapsedTime += increment;
        var position = easeInOut(elapsedTime, start, change, duration);                        
        element[scrollDirection] = position; 
        if (elapsedTime < duration) {
            window.requestAnimationFrame(animateScroll.bind(null, elapsedTime));
        } else {
          callback.call(context);
          res();
        }
    };

    // animateScroll(0);
    window.requestAnimationFrame(animateScroll.bind(null, 0))
  })
}