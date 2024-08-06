import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
// import useFetch from '../hooks/useFetch'; // Import your useFetch hook implementation
import '../styles/activity-room-search-bars.css';

const ActivitySearchBar = ({
    activityDate,
    setActivityDate,
    activityName,
    setActivityName,
    allActivityData
}) => {
  const [dateError, setDateError] = useState('');
  const navigate = useNavigate();
   
  const handleInputChange = (e) => {
    // Update state based on input changes
    if (e.target.name === 'activity-name') {
      setActivityName(e.target.value);
    } else if (e.target.name === 'activity-date') {
      setActivityDate(e.target.value);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();

    // Clear previous date error
    setDateError('');

    if (!activityDate) {
      setDateError('Please select the activity date you wish to search.');
      return;
    }

    // Construct URL based on the selected filters
    let url = `/activity-availability/${activityDate}/`;
    if (activityName && activityName !== "") {
        url += `${activityName}`;
    }

    // Navigate to the search results page with selected parameters
    navigate(url);
  };

  return (
    <>
      <div className="search-header">
        <h1>YOUR ADVENTURE AWAITS</h1>
        <h3>Search. Find. Explore.</h3>
      </div>

      <form className="search-info" onSubmit={handleSearch}>
        <div className="activity-date">
          <div className="date-name-boxes">
            <label htmlFor="activity-date">DATE: </label>
            <input
              type="date"
              name="activity-date"
              id="activity-date"
              value={activityDate}
              onChange={handleInputChange}
            />
          </div>

          <div className="date-name-boxes">
            <label htmlFor="activity-name">ACTIVITY NAME: </label>
            <select
              name="activity-name"
              className="select-activity-name"
              onChange={handleInputChange}
              value={activityName}
            >
              <option value="Please select your activity">Please select your activity</option>
              {allActivityData &&
                allActivityData.map(activity => (
                  <option
                    key={activity.activity_id}
                  >
                    {activity.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        {dateError && <p style={{ color: 'red' }}>{dateError}</p>}

        <button type="submit">SEARCH</button>
      </form>
    </>
  );
};

export default ActivitySearchBar;



// import { useState, useEffect } from "react";
// import "../styles/activity-room-search-bars.css"
// import { useParams, useNavigate} from "react-router-dom";
// import useFetch from "../hooks/useFetch"
// import { getNow } from "@aws-amplify/datastore/dist/esm/util";

// const ActivitySearchBar = ({ setActivityDate, allActivityData, setActivityAvailability, setActivityName, activityAvailabilityByDateAndName, setSearchClicked}) => {
//     const [dateError, setDateError] = useState("");
//     const { activityName: paramActivityName, activityDate: paramActivityDate } = useParams();
//     const navigate = useNavigate();
//     const [activityName, setLocalActivityName] = useState(paramActivityName || "");
//     const [activityDate, setLocalActivityDate] = useState(getToday());
//     // const {data: activityAvailabilityByDate, loading: activityAvailabilityByDateLoading, error: activityAvailabilitByDateError} = useFetch(`http:localhost:8080/api/activities/availability/all?${activityDate}`);
//     // console.log(activityAvailabilityByDate);

//     // Function to get today's date in 'yyyy-MM-dd' format
//     function getToday() {
//         const today = new Date();
//         const year = today.getFullYear();
//         let month = today.getMonth() + 1;
//         let day = today.getDate();

//         // Ensure month and day are formatted with leading zeros if needed
//         month = month < 10 ? `0${month}` : month;
//         day = day < 10 ? `0${day}` : day;

//         return `${year}-${month}-${day}`;
//     }

//     useEffect(() => {
//         const FetchData = async () => {
//           try {
//             const { data: activityAvailabilityByDate , loading: activityAvailabilityByDateLoading, error: activityAvailabilitByDateError} = await useFetch(`http://localhost:8080/api/activities/availability/all?date=${activityDate}`);
//             setActivityAvailability(activityAvailabilityByDate); // Assuming data contains the fetched availability
//           } catch (error) {
//             console.error('Error fetching activity availability:', error);
//             // Handle error state or logging
//           }
//         };
    
//         if (activityDate) {
//           FetchData();
//         }
//       }, [activityDate, setActivityAvailability]); // Run effect whenever activityDate or setActivityAvailability changes


//     // const handleActivityDateChange = (event) => {
//     //     setActivityDate(event.target.value)
//     // }
//     // const handleActivityNameChange = (event) =>{
//     //     setActivityName(event.target.value)
//     // }

//     const handleInputChange = (e) => {
//         // Update state based on input changes
//         if (e.target.name === 'activity-name') {
//           setLocalActivityName(e.target.value);
//         } else if (e.target.name === 'activity-date') {
//           setLocalActivityDate(e.target.value);
//         }
//       };

//     const handleSearch = (event) => {
//         event.preventDefault();

//         if (!activityDate){
//             setDateError("Please select the activity date you wish to search.")
//             return;
//         }
        
//         if(activityDate){
//             setActivityDate(paramActivityDate)
//             // setActivityAvailability(activityAvailabilityByDate)
//             navigate(`/api/activities/availability/all?date=${activityDate}`)
//         }
//         if(activityDate && activityName){
//             setActivityDate(activityDate)
//             setActivityName(activityName)

//         }
        
//         setSearchClicked(true);

//         // navigate(`/activity-availability/${activityDate}/${activityName}`);
        
       

//     }

//     return (
//         <>
//             <div className="search-header">
//                 <h1>YOUR ADVENTURE AWAITS</h1>
//                 <h3>Search. Find. Explore.</h3>
//             </div>

//             <form className="search-info" onSubmit={handleSearch}>

//                 <div className="activity-date">
//                     <div className="date-name-boxes">
//                         <label htmlFor="activity-date">DATE: </label>
//                         <input 
//                         type="date" 
//                         name="activity-date"
//                         id="activity-date" 
//                         value={activityDate}
//                         onChange={handleInputChange}
//                         />
//                     </div>

//                     <div className="date-name-boxes">
//                         <label htmlFor="activity-name">ACTIVITY NAME: </label>
//                         <select name="activity-name" className="select-activity-name" onChange={handleInputChange}>
//                             <option>Please select your activity</option>
//                             {allActivityData && allActivityData.map(activity => (
//                                 <option value={activity.activity_id} key={activity.activity_id}>{activity.name}</option>
//                             ))}
//                         </select>
//                     </div>
                    
//                 </div>

//                 {dateError && <p style={{ color: 'red' }}>{dateError}</p>}

//                 <button type="submit">SEARCH</button>

//             </form>

//         </>
//     )
// };

// export default ActivitySearchBar;