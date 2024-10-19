"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Button } from "@/components/ui/Button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

export default function Profile() {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    dob: "1990-01-01",
    gender: "male",
    occupation: "Software Engineer",
    userType: "admin",
    employmentStatus: "employed", // Added employment status
  });

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleNextPage = async () => {
    try {
      // Send the profile data to a C# backend API
      const response = await fetch("/api/saveProfile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Profile saved:", result);
        alert("Profile saved successfully! Moving to the next page...");
      } else {
        console.error("Failed to save profile");
      }
    } catch (error) {
      console.error("Error occurred while saving profile:", error);
    }
  };

  return (
    <Card className="max-w-4xl mx-auto mt-10 shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          User Profile
        </CardTitle>
        <CardDescription className="text-center">
          Manage your patient information here.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex justify-center mb-4">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src="/placeholder.svg"
              alt={`${profile.firstName} ${profile.lastName}`}
            />
            <AvatarFallback>
              {profile.firstName[0]}
              {profile.lastName[0]}
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Left Column */}
        <div className="space-y-2">
          <Label htmlFor="userType">User Type</Label>
          <select
            id="userType"
            value={profile.userType}
            onChange={(e) => handleChange("userType", e.target.value)}
            className="border p-2 rounded w-full bg-gray-800 text-white placeholder-gray-400"
          >
            <option value="">Select user type</option>
            <option value="admin">Admin</option>
            <option value="patient">Patient</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <select
            id="gender"
            value={profile.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            className="border p-2 rounded w-full bg-gray-800 text-white placeholder-gray-400"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Right Column */}
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={profile.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder="First Name"
            className="w-full bg-gray-800 text-white placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={profile.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            placeholder="Last Name"
            className="w-full bg-gray-800 text-white placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            value={profile.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Email Address"
            className="w-full bg-gray-800 text-white placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            id="dob"
            type="date"
            value={profile.dob}
            onChange={(e) => handleChange("dob", e.target.value)}
            className="w-full bg-gray-800 text-white placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="occupation">Designation</Label>
          <Input
            id="occupation"
            value={profile.occupation}
            onChange={(e) => handleChange("occupation", e.target.value)}
            placeholder="Occupation"
            className="w-full bg-gray-800 text-white placeholder-gray-400"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="employmentStatus">Employment Status</Label>
          <select
            id="employmentStatus"
            value={profile.employmentStatus}
            onChange={(e) => handleChange("employmentStatus", e.target.value)}
            className="border p-2 rounded w-full bg-gray-800 text-white placeholder-gray-400"
          >
            <option value="employed">Employed</option>
            <option value="non-employed">Non-employed</option>
          </select>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={handleNextPage}>Next Page</Button>
      </CardFooter>
    </Card>
  );
}
