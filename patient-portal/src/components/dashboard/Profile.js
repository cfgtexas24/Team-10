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
import { Button } from "@/components/ui/Button";
import { useUser } from "@/context/UserContext";

export default function Profile() {
  const { userId } = useUser();
  const [profile, setProfile] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    dob: "1990-01-01",
    gender: "male",
    occupation: "Software Engineer",
    employmentStatus: "employed",
    race: "", // New field
    ethnicity: "", // New field
    insurance: "", // New field
  });

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const postProfileData = async () => {
    const url = `http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/Patient/Create`;
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName: profile.firstName,
        lastName: profile.lastName,
        emailAddress: profile.email,
        dateOfBirth: profile.dob,
        gender: profile.gender,
        occupation: profile.occupation,
        ethnicity: profile.ethnicity,
        race: profile.race,
        isInsured: profile.insurance === "yes" ? true : false,
        accountId: userId
      })
    });

    const response = await request.json();
    if (response.success) {
      alert("Profile data successsfully submitted");
    } else {
      alert("Profile data upload failed!");
    }
  }

  const handleSubmit = async () => {
    // Here, you would typically save the profile information
    // For now, we'll just log the profile to the console
    await postProfileData();
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

        {/* New Fields: Race, Ethnicity, and Insurance */}
        <div className="space-y-2">
          <Label htmlFor="race">Race</Label>
          <select
            id="race"
            value={profile.race}
            onChange={(e) => handleChange("race", e.target.value)}
            className="border p-2 rounded w-full bg-gray-100 text-black"
          >
            <option value="">Select Race</option>
            <option value="white">White</option>
            <option value="black">Black or African American</option>
            <option value="asian">Asian</option>
=            <option value="native_american">Native American</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="ethnicity">Ethnicity</Label>
          <select
            id="ethnicity"
            value={profile.ethnicity}
            onChange={(e) => handleChange("ethnicity", e.target.value)}
            className="border p-2 rounded w-full bg-gray-100 text-black"
          >
            <option value="">Select Ethnicity</option>
            <option value="hispanic">Hispanic or Latino</option>
            <option value="not_hispanic">Not Hispanic or Latino</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="insurance">Insurance</Label>
          <select
            id="insurance"
            value={profile.insurance}
            onChange={(e) => handleChange("insurance", e.target.value)}
            className="border p-2 rounded w-full bg-gray-100 text-black"
          >
            <option value="">Select Insurance Status</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
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
