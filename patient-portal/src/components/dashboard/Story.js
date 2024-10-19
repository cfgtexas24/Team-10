import React, { useState, useEffect } from 'react';

export default function Story() {
  // State variables to manage input values and username
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [username, setUsername] = useState('');

  // useEffect to fetch the username when the component mounts
  useEffect(() => {
    // Replace '/api/getUsername' with your actual endpoint to get the username
    fetch('/api/getUsername')
      .then(response => response.json())
      .then(data => setUsername(data.username))
      .catch(error => console.error('Error fetching username:', error));
  }, []);

  // Function to handle form submission
  const handleSubmit = () => {
    // Prepare the data to be sent in the POST request
    const storyData = {
      title: title,
      content: content,
      username: username,
    };

    // Send the POST request to '/Story/Create'
    fetch('/Story/Create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(storyData),
    })
      .then(response => {
        if (response.ok) {
          // Handle successful response
          console.log('Story submitted successfully');
          // Optionally, reset the form fields
          setTitle('');
          setContent('');
        } else {
          // Handle server errors
          console.error('Error submitting story:', response.statusText);
        }
      })
      .catch(error => console.error('Network error:', error));
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold mb-2">Share Your Story</h2>
        <p className="text-gray-600 mb-4">
          Your experience can inspire and help others.
        </p>
        <div className="mb-4">
          <label htmlFor="story-title" className="block text-gray-700 font-medium mb-1">
            Story Title
          </label>
          <input
            id="story-title"
            type="text"
            placeholder="Give your story a title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="story-content" className="block text-gray-700 font-medium mb-1">
            Your Story
          </label>
          <textarea
            id="story-content"
            placeholder="Share your journey here..."
            value={content}
            onChange={e => setContent(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            rows="6"
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Submit Story
        </button>
      </div>
    </div>
  );
}
