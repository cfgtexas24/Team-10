"use client";

import { useState } from "react";
import "./form.css";

const FormPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState(null);
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
    // Add form submission logic here
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume(null);
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };
'use client'
import { useState } from 'react';
import Profile from '../components/dashboard/Profile';
import Story from '../components/dashboard/Story';
import FAQ from '../components/dashboard/FAQ';
import Resources from '../components/dashboard/Resources';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';

export default function Component() {
  const [activeTab, setActiveTab] = useState('profile');
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />
          <label htmlFor="contact">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Contact Number"
            required
          />
          <label htmlFor="gender">Gender*</label>
          <input
            type="radio"
            name="gender"
            value="male"
            id="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            id="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            checked={gender === "other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
          <label>Your best Subject</label>
          <input
            type="checkbox"
            name="subject"
            id="english"
            checked={subjects.english}
            onChange={() => handleSubjectChange("english")}
          />
          English
          <input
            type="checkbox"
            name="subject"
            id="maths"
            checked={subjects.maths}
            onChange={() => handleSubjectChange("maths")}
          />
          Maths
          <input
            type="checkbox"
            name="subject"
            id="physics"
            checked={subjects.physics}
            onChange={() => handleSubjectChange("physics")}
          />
          Physics
          <label htmlFor="resume">Upload Resume*</label>
          <input
            type="file"
            name="resume"
            id="resume"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
          <label htmlFor="url">Portfolio URL*</label>
          <input
            type="url"
            name="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your portfolio URL"
            required
          />
          <label>Select Your Level</label>
          <select
            name="level"
            id="level"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            required
          >
            <option value="" disabled>
              Select your level
            </option>
            <optgroup label="Beginners">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advanced">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="7">MongoDB</option>
            </optgroup>
          </select>
          <label htmlFor="about">About You*</label>
          <textarea
            name="about"
            id="about"
            cols="30"
            rows="5"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="Tell us about yourself"
            required
          ></textarea>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">Submit</button>
        </form>
      </fieldset>
    <div className="container mx-auto p-4 space-y-8">
      <h1 className="text-3xl font-bold text-center mb-6">Patient Dashboard</h1>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile" onClick={setActiveTab}>Profile</TabsTrigger>
          <TabsTrigger value="story" onClick={setActiveTab}>Your Story</TabsTrigger>
          <TabsTrigger value="faq" onClick={setActiveTab}>FAQ</TabsTrigger>
          <TabsTrigger value="resources" onClick={setActiveTab}>Resources</TabsTrigger>
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
  );
};
