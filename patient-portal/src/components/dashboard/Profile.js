import { useState } from "react";
import { Button } from "@mantine/core";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { Avatar, AvatarImage } from "@/components/ui/Avatar";

export default function Profile() {
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    dob: "1990-01-01",
    gender: "male",
    occupation: "Software Engineer",
    userType: "admin",
    employmentStatus: "employed",
  });

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Profile submitted:", profile);

    // Display alert pop-up
    alert("Profile updated successfully!");
  };

  return (
    <Card className="max-w-4xl mx-auto mt-10 shadow-lg rounded-lg bg-gradient-to-b from-[#A26B61] to-[#6C5846] text-white animate-fade-in">
      <CardHeader className="flex flex-col justify-center items-center">
        <CardTitle className="text-3xl font-bold text-center text-black">
          User Profile
        </CardTitle>
        <CardDescription className="text-center text-black">
          Manage your patient information here.
        </CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex flex-col items-center mb-4">
          <Avatar className="w-24 h-24 shadow-lg border-2 border-[#6C5846]">
            <AvatarImage
              src="https://i.postimg.cc/ZnVLdjVg/Screenshot-2024-10-19-at-5-18-22-AM.png"
              alt={`${profile.firstName} ${profile.lastName}`}
              className="rounded-full"
            />
          </Avatar>
          <p className="text-white mt-2">
            {profile.firstName[0]}
            {profile.lastName[0]}
          </p>
        </div>

        <div className="space-y-2">
          <Label htmlFor="userType" className="text-white">
            User Type
          </Label>
          <select
            id="userType"
            value={profile.userType}
            onChange={(e) => handleChange("userType", e.target.value)}
            className="border p-2 rounded w-full bg-[#d39388] text-[#313131] focus:ring-2 focus:ring-[#6C5846] focus:border-[#6C5846] transition duration-300 ease-in-out"
          >
            <option value="admin">Admin</option>
            <option value="patient">Patient</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender" className="text-white">
            Gender
          </Label>
          <select
            id="gender"
            value={profile.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            className="border p-2 rounded w-full bg-[#d39388] text-[#313131] focus:ring-2 focus:ring-[#6C5846] focus:border-[#6C5846] transition duration-300 ease-in-out"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-white">
            First Name
          </Label>
          <Input
            id="firstName"
            value={profile.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder="First Name"
            className="w-full bg-[#D3E2E4] text-[#313131] border border-[#6C5846] rounded-lg focus:ring-2 focus:ring-[#6C5846] transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-white">
            Last Name
          </Label>
          <Input
            id="lastName"
            value={profile.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            placeholder="Last Name"
            className="w-full bg-[#D3E2E4] text-[#313131] border border-[#6C5846] rounded-lg focus:ring-2 focus:ring-[#6C5846] transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            value={profile.email}
            onChange={(e) => handleChange("email", e.target.value)}
            placeholder="Email Address"
            className="w-full bg-[#D3E2E4] text-[#313131] border border-[#6C5846] rounded-lg focus:ring-2 focus:ring-[#6C5846] transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dob" className="text-white">
            Date of Birth
          </Label>
          <Input
            id="dob"
            type="date"
            value={profile.dob}
            onChange={(e) => handleChange("dob", e.target.value)}
            className="w-full bg-[#D3E2E4] text-[#313131] border border-[#6C5846] rounded-lg focus:ring-2 focus:ring-[#6C5846] transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="occupation" className="text-white">
            Occupation
          </Label>
          <Input
            id="occupation"
            value={profile.occupation}
            onChange={(e) => handleChange("occupation", e.target.value)}
            placeholder="Occupation"
            className="w-full bg-[#D3E2E4] text-[#313131] border border-[#6C5846] rounded-lg focus:ring-2 focus:ring-[#6C5846] transition-all duration-300"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="employmentStatus" className="text-white">
            Employment Status
          </Label>
          <select
            id="employmentStatus"
            value={profile.employmentStatus}
            onChange={(e) => handleChange("employmentStatus", e.target.value)}
            className="border p-2 rounded w-full bg-[#d39388] text-[#313131] focus:ring-2 focus:ring-[#6C5846] focus:border-[#6C5846] transition duration-300 ease-in-out"
          >
            <option value="employed">Employed</option>
            <option value="non-employed">Non-employed</option>
          </select>
        </div>
      </CardContent>

      <div className="flex justify-end p-4">
        <Button
          onClick={handleSubmit}
          className="bg-[#A26B61] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#6C5846] transition-all duration-300 transform hover:scale-105"
        >
          Submit
        </Button>
      </div>
    </Card>
  );
}
