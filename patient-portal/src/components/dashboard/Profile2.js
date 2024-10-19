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
import { Avatar, AvatarImage } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";

export default function Profile2({
  profile,
  handleChange,
  handleNextPage,
  handlePreviousPage,
}) {
  return (
    <Card className="max-w-4xl mx-auto mt-10 shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          User Profile 2
        </CardTitle>
        <CardDescription className="text-center">
          Manage the second user profile here.
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
      </CardContent>

      {/* Move Buttons to Bottom Right */}
      <div className="flex justify-end p-4 space-x-4">
        <Button onClick={handlePreviousPage}>Previous Page</Button>
        <Button onClick={handleNextPage}>Next Page</Button>
      </div>
    </Card>
  );
}
