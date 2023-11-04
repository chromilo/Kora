// Import React and React Router
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

// Import Axios for making HTTP requests
import axios from 'axios';

// Define the left side panel component
function LeftPanel() {
  // Define some state variables for the input fields and the buttons
  const [playlist, setPlaylist] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [loginDisabled, setLoginDisabled] = useState(true);

  // Define some ref variables for the input fields and the buttons
  const playlistRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const searchRef = useRef();
  const loginRef = useRef();

  // Define a function to handle the change of the playlist input field
  const handlePlaylistChange = (event) => {
    // Get the value of the input field
    const value = event.target.value;

    // Set the state variable for the playlist
    setPlaylist(value);

    // Enable or disable the search button based on the value
    if (value) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  };

  // Define a function to handle the change of the email input field
  const handleEmailChange = (event) => {
    // Get the value of the input field
    const value = event.target.value;

    // Set the state variable for the email
    setEmail(value);

    // Enable or disable the login button based on the value and the password
    if (value && password) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  };

  // Define a function to handle the change of the password input field
  const handlePasswordChange = (event) => {
    // Get the value of the input field
    const value = event.target.value;

    // Set the state variable for the password
    setPassword(value);

    // Enable or disable the login button based on the value and the email
    if (value && email) {
      setLoginDisabled(false);
    } else {
      setLoginDisabled(true);
    }
  };

  // Define a function to handle the click of the search button
  const handleSearchClick = () => {
    // Get the value of the playlist input field from the ref variable
    const value = playlistRef.current.value;

    // Check if the value is not empty
    if (value) {
      // Perform the search logic here
      // For example, you can use Axios to make a GET request to your backend server
      // and pass the value as a query parameter
      // You can then use the response data to display the search results on the main panel
      // For simplicity, I will just console.log the value
      console.log('Searching for playlist: ' + value);
    }
  };

  // Define a function to handle the click of the login button
  const handleLoginClick = () => {
    // Get the values of the email and password input fields from the ref variables
    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    // Check if the values are not empty
    if (emailValue && passwordValue) {
      // Perform the login logic here
      // For example, you can use Axios to make a POST request to your backend server
      // and pass the values as the request body
      // You can then use the response data to authenticate the user and redirect them to the dashboard page
      // For simplicity, I will just console.log the values
      console.log('Logging in with email: ' + emailValue + ', password: ' + passwordValue);
    }
  };

  // Return the JSX code for the left side panel component
  return (
    <div className="flex flex-col h-screen border-r border-gray-300 shadow-lg">
      {/* Render the playlist search input field and button */}
      <div className="flex items-center p-4">
        <input
          className="flex-1 mr-4 border border-gray-400 rounded-lg outline-none px-4 py-2"
          type="text"
          placeholder="Search for playlist"
          value={playlist}
          onChange={handlePlaylistChange}
          ref={playlistRef}
        />
        <button
          className="bg-blue-500 text-white rounded-lg px-4 py-2"
          onClick={handleSearchClick}
          disabled={searchDisabled}
          ref={searchRef}
        >
          Search
        </button>
      </div>

      {/* Render a horizontal bar */}
      <div className="border-b border-gray-300"></div>

      {/* Render the email and password input fields and button */}
      <div className="flex flex-col p-4">
        <input
          className="mb-4 border border-gray-400 rounded-lg outline-none px-4 py-2"
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          ref={emailRef}
        />
        <input
          className="mb-4 border border-gray-400 rounded-lg outline-none px-4 py-2"
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          ref={passwordRef}
        />
        <button
          className="bg-green-500 text-white rounded-lg px-4 py-2"
          onClick={handleLoginClick}
          disabled={loginDisabled}
          ref={loginRef}
        >
          Login
        </button>
      </div>

      {/* Render a horizontal bar */}
      <div className="border-b border-gray-300"></div>

      {/* Render the links to GitHub and about page */}
      <div className="flex flex-col p-4">
        <Link
          className="mb-4 text-blue-500 hover:underline"
          to="https://github.com/your-repo"
        >
          GitHub
        </Link>
        <Link className="text-blue-500 hover:underline" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default LeftPanel;