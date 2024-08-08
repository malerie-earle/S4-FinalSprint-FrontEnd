import ActivityAvailability from "../pages/ActivityAvailability";
import { Link } from "react-router-dom";
import "../styles/activity-details.css"

const ActivityDetails = ({activity, dateToBook}) => {
  console.log(activity);
  return (
    <form className="activity-form">
      <h3 className="activity-name">{activity.name}</h3>
      <div className="activity-image-text">
        <img src={activity.image1} alt="Example Activity" className="activityImage"/>
        <div className="activity-textbox">
            <p id="activityDescription">{activity.description}</p>
            <p id="activityDate">Occurs daily at {activity.time}</p>
            <p>{dateToBook}</p>
            <Link to='/activity-booking' state={{date: dateToBook, activity: activity}}>
              <button type="submit">BOOK NOW</button>
            </Link>
        </div>
      </div>
  
    </form>
    

  );
};

export default ActivityDetails;