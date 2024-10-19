'use client'
import { useState } from 'react';
import Profile from '../components/dashboard/Profile';
import Story from '../components/dashboard/Story';
import FAQ from '../components/dashboard/FAQ';
import Resources from '../components/dashboard/Resources';
import Feedback from '../components/dashboard/Feedback';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';

export default function Component() {
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');

  return (
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-6">Patient Dashboard</h1>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="flex w-full justify-center space-x-8">
          <TabsTrigger value="profile" onClick={() => setActiveTab('profile')}>Profile</TabsTrigger>
          <TabsTrigger value="story" onClick={() => setActiveTab('story')}>Your Story</TabsTrigger>
          <TabsTrigger value="resources" onClick={() => setActiveTab('resources')}>Resources</TabsTrigger>
          <TabsTrigger value="feedback" onClick={() => setActiveTab('feedback')}>Feedback</TabsTrigger>
          <TabsTrigger value="faq" onClick={() => setActiveTab('faq')}>FAQ</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" activeTab={activeTab}>
          <Profile name={name} email={email} setName={setName} setEmail={setEmail} />
        </TabsContent>

        <TabsContent value="story" activeTab={activeTab}>
          <Story />
        </TabsContent>

        <TabsContent value="resources" activeTab={activeTab}>
          <Resources />
        </TabsContent>

        <TabsContent value="feedback" activeTab={activeTab}>
          <Feedback />
        </TabsContent>

        <TabsContent value="faq" activeTab={activeTab}>
          <FAQ />
        </TabsContent>
      </Tabs>
    </div>
  );
};
