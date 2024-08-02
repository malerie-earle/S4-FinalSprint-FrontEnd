import "../styles/activity-details.css"
import parasailing from "../images/parasailing.jpg"

const ActivityDetails = () => {
  return (
    <form className="activity-form">
      <h3 className="activity-name">Activity Name Here</h3>
      <div className="activity-image-text">
        <img src={parasailing} alt="Example Activity" className="activityImage"/>
        <div className="activity-textbox">
            <p id="activityDescription">Activity description here.</p>
            <p id="activityDate">DATE: </p>
            <p id="activityTimes">Please choose your activity time:</p>
            <div className="activityTimes">
              <div className="times">
                <label htmlFor="time1">- Time 1</label>
                <input type="radio" name="time" id="time1" />
              </div>
              <div className="times">
                <label htmlFor="time2">- Time 2</label>
                <input type="radio" name="time" id="time2" />
              </div>
              <div className="times">
                <label htmlFor="time3">- Time 3</label>
                <input type="radio" name="time" id="time3" />
              </div>
              
            </div>
            <button type="submit">BOOK NOW</button>
        </div>
      </div>
  
    </form>
    

  );
};

export default ActivityDetails;