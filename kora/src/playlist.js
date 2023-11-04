// Import React and Axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Import the card component that you created in the previous step
import Card from './Card';

// Define the main middle page panel component
function MainPanel() {
  // Define some state variables for the search query and the playlists
  const [query, setQuery] = useState('');
  const [playlists, setPlaylists] = useState([]);

  // Define an effect hook to fetch the featured playlists from your backend server or your database
  // and store them in a state variable
  useEffect(() => {
    // Fetch the featured playlists here
    // For example, you can use Axios to make a GET request to your backend server or your database
    // and get the playlist data as the response data
    // For simplicity, I will use some mock data
    const mockData = [
      {
        id: 1,
        title: 'Rock On',
        image: 'https://source.unsplash.com/random/300x300?rock',
        description: 'A playlist for rock lovers',
        creator: 'user1',
      },
      {
        id: 2,
        title: 'Happy Vibes',
        image: 'https://source.unsplash.com/random/300x300?happy',
        description: 'A playlist for happy moments',
        creator: 'user2',
      },
      {
        id: 3,
        title: 'Running Beats',
        image: 'https://source.unsplash.com/random/300x300?running',
        description: 'A playlist for running enthusiasts',
        creator: 'generated by our engine/bot',
      },
    ];

    // Set the playlist data state to the mock data
    setPlaylists(mockData);
  }, []);

  // Define an effect hook to run when the query state variable changes
  useEffect(() => {
    // Check if the query is not empty
    if (query) {
      // Search for the playlists that match the query here
      // For example, you can use Axios to make a GET request to your backend server
      // and pass the query as a query parameter
      // You can then use the response data to display the search results on the panel
      // For simplicity, I will use some mock data
      const mockData = [
        {
          id: 4,
          title: 'Sad Songs',
          image: 'https://source.unsplash.com/random/300x300?sad',
          description: 'A playlist for sad times',
          creator: 'user3',
        },
        {
          id: 5,
          title: 'Jazz Classics',
          image: 'https://source.unsplash.com/random/300x300?jazz',
          description: 'A playlist for jazz lovers',
          creator: 'user4',
        },
        {
          id: 6,
          title: 'Dancing Tunes',
          image: 'https://source.unsplash.com/random/300x300?dancing',
          description: 'A playlist for dancing fun',
          creator: 'generated by our engine/bot',
        },
      ];

      // Set the playlist data state to the mock data
      setPlaylists(mockData);
    }
  }, [query]);

  // Return the JSX code for the main middle page panel component
  return (
    <div className="flex flex-col p-4">
      {/* Render the playlists as thumbnails using the card component */}
      <div className="grid grid-cols-3 gap-4">
        {playlists.map((playlist) => (
          <Card
            key={playlist.id}
            title={playlist.title}
            image={playlist.image}
            description={playlist.description}
            creator={playlist.creator}
          />
        ))}
      </div>
    </div>
  );
}

export default MainPanel;