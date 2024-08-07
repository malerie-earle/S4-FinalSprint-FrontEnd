import "../styles/activity-details.css";

const ActivityDetails = ({ activity }) => {
  if (!activity) {
    return <div>Loading activity details...</div>; // Provide feedback if activity is not available
  }

  return (
    <form className="activity-form">
      <h3 className="activity-name">{activity.name}</h3>
      <div className="activity-image-text">
        {activity.image1 ? (
          <img src={activity.image1} alt="Activity" className="activityImage" />
        ) : (
          <div>No image available</div> // Handle missing image case
        )}
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
