"use client";
import { useState } from "react";
import Profile from "../components/dashboard/Profile";
import Story from "../components/dashboard/Story";
import FAQ from "../components/dashboard/FAQ";
import Resources from "../components/dashboard/Resources";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../components/ui/Tabs";
import Login from '../app/login';
import { MantineProvider } from '@mantine/core';

export default function Component() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');

  const handleLogin = async (email, password) => {
    try {
      const response = await fetch('http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/Account/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password: password }), // Send the email and password in the request body
      });

      if (!response.ok) {
        throw new Error('Login failed!'); // Handle unsuccessful login
      }

      const data = await response.json();

      // Check if the authentication is successful
      if (data.success) {
        setIsLoggedIn(true); // Update login status
        // Optionally, save the token or user information
        localStorage.setItem('token', data.token); // Save token in localStorage (if applicable)
      } else {
        alert(data.message); // Show error message
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again.'); // Show error to the user
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
        <h1 className="text-3xl font-bold text-center mb-6">Patient Dashboard</h1>
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile" onClick={() => setActiveTab('profile')}>Profile</TabsTrigger>
            <TabsTrigger value="story" onClick={() => setActiveTab('story')}>Your Story</TabsTrigger>
            <TabsTrigger value="faq" onClick={() => setActiveTab('faq')}>FAQ</TabsTrigger>
            <TabsTrigger value="resources" onClick={() => setActiveTab('resources')}>Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" activeTab={activeTab}>
            <Profile name={name} email={email} setName={setName} setEmail={setEmail} />
          </TabsContent>

          <TabsContent value="story" activeTab={activeTab}>
            <Story />
          </TabsContent>

          <TabsContent value="faq" activeTab={activeTab}>
            <FAQ />
          </TabsContent>

          <TabsContent value="resources" activeTab={activeTab}>
            <Resources />
          </TabsContent>
        </Tabs>
      </div>
    </MantineProvider>
  );
}
