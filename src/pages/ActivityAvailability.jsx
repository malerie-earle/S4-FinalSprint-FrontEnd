import "../styles/activity-availability.css"
import Nav from "../components/Nav"
import ActivityDetails from "../components/ActivityDetails";
import { useState } from "react";
import ActivitySearchBar from "../components/ActivitySearchBar";

const ActivityAvailability = ({activityDate, setActivityDate, allActivityData, allActivityLoading, allActivityError}) => {
  
    return (
    <div>

        <Nav/>

        <ActivitySearchBar activityDate={activityDate} setActivityDate={setActivityDate} allActivityData={allActivityData}/>

        <div className="activityData">
            {allActivityLoading && <h3 id="loading">Loading...</h3>}
            {allActivityError && <h3 id="error">Error: {allActivityError.message}</h3>}
            {allActivityData && allActivityData.map(activity => (
                <ActivityDetails key={activity.activity_id} activity={activity}/>
            ))}
        </div>

    </div>

  );
};

export default ActivityAvailability;
