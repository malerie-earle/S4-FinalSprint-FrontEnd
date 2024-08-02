import "../styles/activity-availability.css"
import Nav from "../components/Nav"
import ActivityDetails from "../components/ActivityDetails";
import { useState } from "react";
import ActivitySearchBar from "../components/ActivitySearchBar";

const ActivityAvailability = ({activityDate, setActivityDate}) => {
  
    return (
    <div>

        <Nav/>

        <ActivitySearchBar activityDate={activityDate} setActivityDate={setActivityDate}/>

        <div className="activityData">
            <ActivityDetails/>
            <ActivityDetails/>
        </div>

    </div>

  );
};

export default ActivityAvailability;
