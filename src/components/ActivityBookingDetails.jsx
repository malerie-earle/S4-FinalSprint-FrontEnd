import "../styles/activity-details.css"
import parasailing from "../images/parasailing.jpg"

const ActivityDetails = () => {
  return (
    <div>
        <h3 className="detail-header">ACTIVITY NAME HERE</h3>
        <form className="details">
            <img src={parasailing} alt="Example Activity"/>
            <div className="textbox">
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
            
        
        </form>
    </div>

  );
};

export default ActivityDetails;