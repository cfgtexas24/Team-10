'use client';
import { useState } from 'react';
import Profile from '../components/dashboard/Profile';
import Story from '../components/dashboard/Story';
import FAQ from '../components/dashboard/FAQ';
import Resources from '../components/dashboard/Resources';
import Feedback from '../components/dashboard/Feedback';
import AppointmentBooking from '../components/dashboard/AppointmentBooking'; // Import the correct component
import Login from '../app/login';
import { useRouter } from 'next/navigation';
import { MantineProvider } from '@mantine/core';

export default function Component() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [activeTab, setActiveTab] = useState('profile'); // Track which tab is active
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [isAdmin, setIsAdmin] = useState(false); // Track if the user is an admin
  const router = useRouter();

  const handleLogin = async (email, password, isAdminStatus) => {
    try {
      const response = await fetch(
        "http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/Account/Login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: email, password: password }), // Send the email and password in the request body
        }
      );

      if (!response.ok) {
        throw new Error("Login failed!"); // Handle unsuccessful login
      }

      const data = await response.json();

      // Check if the authentication is successful
      if (data.success) {
        setIsLoggedIn(true); // Update login status
        // Optionally, save the token or user information
        localStorage.setItem("token", data.token); // Save token in localStorage (if applicable)
      } else {
        alert(data.message); // Show error message
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login. Please try again."); // Show error to the user
    }
  };

  // If not logged in, show login page
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />; // Pass the handleLogin function to the Login component
  }

  // Show dashboard after login
  return (
    <MantineProvider>
      <div className="container mx-auto p-4 space-y-8">
        <h1 className="text-3xl font-bold text-center mb-6">
          Patient Dashboard
        </h1>

        {isAdmin && (
          <div className="absolute top-4 right-4">
            <button
              className="btn-primary"
              onClick={() => router.push("/dashboard")}
            >
              Go to Dashboard
            </button>
          </div>
        )}

        {/* Tabs (Original Style with Manual onClick) */}
        <div className="flex w-full justify-center space-x-4 mb-6 border-b-2 border-gray-200">
          <button
            className={`px-4 py-2 ${activeTab === 'profile' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'story' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('story')}
          >
            Your Story
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'resources' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('resources')}
          >
            Resources
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'feedback' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('feedback')}
          >
            Feedback
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'faq' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('faq')}
          >
            FAQ
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'appointment' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('appointment')}
          >
            Appointment
          </button>
        </div>

        {/* Render Content based on Active Tab */}
        <div className="tab-content">
          {activeTab === 'profile' && (
            <Profile name={name} email={email} setName={setName} setEmail={setEmail} />
          )}

          {activeTab === 'story' && <Story />}

          {activeTab === 'resources' && <Resources />}

          {activeTab === 'feedback' && <Feedback />}

          {activeTab === 'faq' && <FAQ />}

          {activeTab === 'appointment' && <AppointmentBooking />}
        </div>
      </div>
    </MantineProvider>
  );
}
