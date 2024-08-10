import "../styles/activity-availability.css";
import Nav from "../components/Nav";
import ActivityDetails from "../components/ActivityDetails";
import ActivitySearchBar from "../components/ActivitySearchBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import config from '../config';

const ActivityAvailability = ({
  allActivityData,
  activityDate,
  setActivityDate,
  activityName,
  setActivityName,
}) => {
  const { activityDate: paramDate, activityName: paramName } = useParams();
  const [filteredActivities, setFilteredActivities] = useState([]);
  const [filteredActivity, setFilteredActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      setError(null); 

      try {
        const date = paramDate || activityDate;
        const name = paramName || activityName;

        let url = `${config.backendBaseURL}/api/activities`;
            // Fetch filtered activities based on name
            if (paramName && paramName !== "Please select your activity") {
                url = `${config.backendBaseURL}/api/activities/availability?date=${date}&name=${encodeURIComponent(name)}`;
                const response = await fetch(url);
                const result = await response.json();
                setFilteredActivity(result);
                setFilteredActivities([]); 
                console.log(result);
            } else if (paramName === "Please select your activity" || !paramName) {
                url = `${config.backendBaseURL}/api/activities/availability/all?date=${date}`;
                const response = await fetch(url);
                const result = await response.json();
                setFilteredActivities(result);
                setFilteredActivity(null); 
                console.log(result);
            } else {
                
                const response = await fetch(url);
                const result = await response.json();
                setFilteredActivities(result);
                setFilteredActivity(null);
                console.log(result);
            }
          } catch (err) {
            setError(err);
          } finally {
            setLoading(false);
          }
        };
    
        fetchActivities();
      }, [paramDate, paramName, activityDate, activityName]);

  return (
    <div>
      <ActivitySearchBar
        activityDate={activityDate}
        setActivityDate={setActivityDate}
        activityName={activityName}
        setActivityName={setActivityName}
        allActivityData={allActivityData}
      />
      <div className="activityData">
        {filteredActivities.length > 0 ? (
          filteredActivities.map((activity) => (
            <ActivityDetails key={activity.activity_id} activity={activity} dateToBook={activityDate} />
          ))
        ) : filteredActivity ? (
          <ActivityDetails activity={filteredActivity} dateToBook={activityDate} />
        ) : (
          <div>No activities found</div>
        )}
      </div>
    </div>
  );
};

export default ActivityAvailability;
