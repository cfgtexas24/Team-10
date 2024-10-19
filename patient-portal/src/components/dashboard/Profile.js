import { useState } from "react";
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
    race: "", // New field
    ethnicity: "", // New field
    insurance: "", // New field
  });

  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Here, you would typically save the profile information
    // For now, we'll just log the profile to the console
    console.log("Profile submitted:", profile);
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
        <div className="col-span-2 flex flex-col items-center mb-4">
          <Avatar className="w-24 h-24">
            <AvatarImage
              src="https://i.postimg.cc/ZnVLdjVg/Screenshot-2024-10-19-at-5-18-22-AM.png" // Direct link to the image
              alt={`${profile.firstName} ${profile.lastName}`}
            />
          </Avatar>
          <p className="text-black mt-2">
            {profile.firstName[0]}
            {profile.lastName[0]}
          </p>{" "}
          {/* Centered initials */}
        </div>

        <div className="space-y-2">
          <Label htmlFor="userType">User Type</Label>
          <select
            id="userType"
            value={profile.userType}
            onChange={(e) => handleChange("userType", e.target.value)}
            className="border p-2 rounded w-full bg-gray-100 text-black"
          >
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
            className="border p-2 rounded w-full bg-gray-100 text-black"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={profile.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            placeholder="First Name"
            className="w-full bg-gray-100 text-black"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={profile.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            placeholder="Last Name"
            className="w-full bg-gray-100 text-black"
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
            className="w-full bg-gray-100 text-black"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dob">Date of Birth</Label>
          <Input
            id="dob"
            type="date"
            value={profile.dob}
            onChange={(e) => handleChange("dob", e.target.value)}
            className="w-full bg-gray-100 text-black"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="occupation">Occupation</Label>
          <Input
            id="occupation"
            value={profile.occupation}
            onChange={(e) => handleChange("occupation", e.target.value)}
            placeholder="Occupation"
            className="w-full bg-gray-100 text-black"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="employmentStatus">Employment Status</Label>
          <select
            id="employmentStatus"
            value={profile.employmentStatus}
            onChange={(e) => handleChange("employmentStatus", e.target.value)}
            className="border p-2 rounded w-full bg-gray-100 text-black"
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

      {/* Submit Button */}
      <div className="flex justify-end p-4">
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </Card>
  );
}
