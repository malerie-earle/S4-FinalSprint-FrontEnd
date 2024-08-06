import "../styles/activity-availability.css"
import Nav from "../components/Nav"
import ActivityDetails from "../components/ActivityDetails";
import ActivitySearchBar from "../components/ActivitySearchBar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ActivityAvailability = ({allActivityData, activityDate, setActivityDate, activityName, setActivityName, dataToRender, activity}) => {
  
    const { activityDate: paramDate, activityName: paramName } = useParams();
    const [filteredActivities, setFilteredActivities] = useState([]);
    const [filteredActivity, setFilteredActivity] = useState('Please select your activity');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchActivities = async () => {
          setLoading(true);
          try {
            const date = paramDate || activityDate;
            const name = paramName || activityName;

            let url = 'http://localhost:8080/api/activities';

            // Fetch filtered activities based on name
            if (name && name !== "Please select your activity") {
                url = `http://localhost:8080/api/activities/availability?date=${date}&name=${encodeURIComponent(name)}`;
                const response = await fetch(url);
                const result = await response.json();
                setFilteredActivity(result);
                setFilteredActivities([]); // Clear other results if filtering
                console.log(result);
            } else if (name === "Please select your activity" || !name) {
                url = `http://localhost:8080/api/activities/availability/all?date=${date}`;
                const response = await fetch(url);
                const result = await response.json();
                setFilteredActivities(result);
                setFilteredActivity(null); // Clear specific activity if fetching all
                console.log(result);
            } else {
                // Fallback case: fetch all activities if name is not set
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
      }, [paramDate, paramName]);

    return (

    <div>

        <Nav/>

        <ActivitySearchBar activityDate={activityDate} setActivityDate={setActivityDate} activityName={activityName} setActivityName={setActivityName} allActivityData={allActivityData}/>


        <div className="activityData">
            {filteredActivities.length > 1? (
            filteredActivities.map((activity) => (
                <ActivityDetails key={activity.activity_id} activity={activity} />
            ))
            ) : (
                <ActivityDetails activity={filteredActivity} />
            )}
        </div>

    </div>

  );
};

export default ActivityAvailability;