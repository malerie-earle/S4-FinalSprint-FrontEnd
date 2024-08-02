import { useState } from 'react';

const usePost = (url) => {
  const [data, setData] = useState(null);  // Holds the response data
  const [loading, setLoading] = useState(false);  // Tracks if the request is in progress
  const [error, setError] = useState(null);  // Holds any errors that occur during the request

  // Function to perform the POST request
  const postData = async (requestData) => {
    setLoading(true);  // Set loading to true when starting the request
    setError(null);  // Clear any previous errors
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);  // Throw error if response is not ok
      }

      const json = await response.json();  // Parse the JSON response
      setData(json);  // Update the data state with the response
    } catch (error) {
      setError(error);  // Set error state if there is an exception
    } finally {
      setLoading(false);  // Set loading to false when request is complete
    }
    
    
  };

  return { data, loading, error, postData };  // Return state and function for use in components
};

export default usePost;