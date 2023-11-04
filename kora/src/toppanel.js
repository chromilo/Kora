// Import React and Axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define the top panel component
function TopPanel() {
  // Define some state variables for the form elements and the button
  const [category, setCategory] = useState('mood');
  const [option, setOption] = useState('');
  const [generateDisabled, setGenerateDisabled] = useState(true);

  // Define a function to handle the change event of the radio group
  const handleCategoryChange = (event) => {
    // Get the value of the radio group
    const value = event.target.value;

    // Set the state variable for the category
    setCategory(value);
  };

  // Define a function to handle the change event of the select component
  const handleOptionChange = (event) => {
    // Get the value of the select component
    const value = event.target.value;

    // Set the state variable for the option
    setOption(value);

    // Enable or disable the generate button based on the value
    if (value) {
      setGenerateDisabled(false);
    } else {
      setGenerateDisabled(true);
    }
  };

  // Define a function to handle the submit event of the form
  const handleSubmit = (event) => {
    // Prevent the default behavior of the form
    event.preventDefault();

    // Create an object to store the form data
    const formData = {
      category: category,
      option: option,
    };

    // Make a POST request to your backend server where your ML model is running, and pass the form data as the request body
    // You can use axios to make the request
    axios
      .post('http://localhost:5000/generate', formData)
      .then((response) => {
        // Get the response data, which should be an array of songs that match the form data
        const data = response.data;

        // Perform the logic to display the generated playlist on the main panel
        // For example, you can use the setState method to update the state variable for the playlist
        // For simplicity, I will just console.log the data
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that may occur
        console.error(error);
      });
  };

  // Define an effect hook to run when the category state variable changes
  useEffect(() => {
    // Reset the option state variable to an empty string
    setOption('');

    // Disable the generate button
    setGenerateDisabled(true);
  }, [category]);

  // Return the JSX code for the top panel component
  return (
    <div className="flex flex-col p-4 border-b border-gray-300 shadow-lg">
      {/* Render the form with the radio group, the select component, and the button */}
      <form className="flex items-center" onSubmit={handleSubmit}>
        {/* Render the radio group for choosing the category */}
        <div className="flex mr-4">
          <label className="flex items-center mr-2">
            <input
              className="mr-1"
              type="radio"
              name="category"
              value="mood"
              checked={category === 'mood'}
              onChange={handleCategoryChange}
            />
            Mood
          </label>
          <label className="flex items-center mr-2">
            <input
              className="mr-1"
              type="radio"
              name="category"
              value="genre"
              checked={category === 'genre'}
              onChange={handleCategoryChange}
            />
            Genre
          </label>
          <label className="flex items-center">
            <input
              className="mr-1"
              type="radio"
              name="category"
              value="activity"
              checked={category === 'activity'}
              onChange={handleCategoryChange}
            />
            Activity
          </label>
        </div>

        {/* Render the select component for choosing the option for the category */}
        <select
          className="mr-4 border border-gray-400 rounded-lg outline-none px-4 py-2"
          value={option}
          onChange={handleOptionChange}
          disabled={category === ''}
        >
          {/* Render the options for the mood category */}
          {category === 'mood' && (
            <>
              <option value="">Select a mood</option>
              <option value="happy">Happy</option>
              <option value="sad">Sad</option>
              <option value="angry">Angry</option>
              <option value="relaxed">Relaxed</option>
            </>
          )}

          {/* Render the options for the genre category */}
          {category === 'genre' && (
            <>
              <option value="">Select a genre</option>
              <option value="rock">Rock</option>
              <option value="pop">Pop</option>
              <option value="hip-hop">Hip-hop</option>
              <option value="jazz">Jazz</option>
            </>
          )}

          {/* Render the options for the activity category */}
          {category === 'activity' && (
            <>
              <option value="">Select an activity</option>
              <option value="running">Running</option>
              <option value="dancing">Dancing</option>
              <option value="studying">Studying</option>
              <option value="sleeping">Sleeping</option>
            </>
          )}
        </select>

        {/* Render the button for submitting the form and generating the playlist */}
        <button
          className="bg-blue-500 text-white rounded-lg px-4 py-2"
          type="submit"
          disabled={generateDisabled}
        >
          Generate Playlist
        </button>
      </form>
    </div>
  );
}

export default TopPanel;