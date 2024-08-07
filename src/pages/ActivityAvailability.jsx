import "../styles/activity-availability.css";
import Nav from "../components/Nav";
import ActivityDetails from "../components/ActivityDetails";
import ActivitySearchBar from "../components/ActivitySearchBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
      setError(null); // Reset error state on new fetch

      try {
        const date = paramDate || activityDate;
        const name = paramName || activityName;

        let url = 'http://localhost:8080/api/activities';

        // Determine the URL based on name and date
        if (name && name !== "Please select your activity") {
          url = `http://localhost:8080/api/activities/availability?date=${date}&name=${encodeURIComponent(name)}`;
          const response = await fetch(url);
          const result = await response.json();
          setFilteredActivity(result.length > 0 ? result[0] : null); // Assuming result is an array
          setFilteredActivities([]);
        } else {
          url = `http://localhost:8080/api/activities/availability/all?date=${date}`;
          const response = await fetch(url);
          const result = await response.json();
          setFilteredActivities(result);
          setFilteredActivity(null);
        }
      } catch (err) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchActivities();
  }, [paramDate, paramName, activityDate, activityName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Nav />
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
            <ActivityDetails key={activity.activity_id} activity={activity} />
          ))
        ) : filteredActivity ? (
          <ActivityDetails activity={filteredActivity} />
        ) : (
          <div>No activities found</div>
        )}
      </div>
    </div>
  );
};

export default ActivityAvailability;
