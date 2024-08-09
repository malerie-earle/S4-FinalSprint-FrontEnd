import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
=======
// import './styles/index.css';
>>>>>>> 3e90e5917d78e83bca15ee7e75ef83254b1d930a
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import { BrowserRouter } from 'react-router-dom'; 
import awsconfig from './aws-exports'; 

Amplify.configure(awsconfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
