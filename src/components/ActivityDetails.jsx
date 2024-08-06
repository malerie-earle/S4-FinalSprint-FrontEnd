import ActivityAvailability from "../pages/ActivityAvailability";
import "../styles/activity-details.css"

const ActivityDetails = ({activity}) => {

  return (
    <form className="activity-form">
      <h3 className="activity-name">{activity.name}</h3>
      <div className="activity-image-text">
        <img src={activity.image1} alt="Example Activity" className="activityImage"/>
        <div className="activity-textbox">
            <p id="activityDescription">{activity.description}</p>
            <p id="activityDate">Occurs daily at {activity.time}</p>
            <button type="submit">BOOK NOW</button>
        </div>
      </div>
  
    </form>
    

  );
};

export default ActivityDetails;