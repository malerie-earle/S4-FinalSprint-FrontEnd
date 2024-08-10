import { useState } from 'react';

const usePost = (url) => {
  const [data, setData] = useState(null);  
  const [loading, setLoading] = useState(false);  
  const [error, setError] = useState(null);  

  const postData = async (requestData) => {
    setLoading(true); 
    setError(null);  
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);  
      }

      const json = await response.json(); 
      setData(json);  
    } catch (error) {
      setError(error);  
    } finally {
      setLoading(false);  
    }
    
    
  };

  return { data, loading, error, postData };  
};

export default usePost;