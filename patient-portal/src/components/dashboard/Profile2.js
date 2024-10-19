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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
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
          <Label htmlFor="occupation">Occupation</Label>
          <Input
            id="occupation"
            value={profile.occupation}
            onChange={(e) => handleChange("occupation", e.target.value)}
            placeholder="Occupation"
            className="w-full bg-gray-800 text-white placeholder-gray-400"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={handlePreviousPage}>Previous Page</Button>
        <Button onClick={handleNextPage}>Next Page</Button>{" "}
        {/* For future pages */}
      </CardFooter>
    </Card>
  );
}
