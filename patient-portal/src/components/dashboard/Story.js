import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

export default function Story() {
  return (
    <Card>
      <CardHeader title="Share Your Story" description="Your experience can inspire and help others." />
      <CardContent>
        <Label htmlFor="story-title">Story Title</Label>
        <Input id="story-title" placeholder="Give your story a title" />
        <Label htmlFor="story-content">Your Story</Label>
        <Textarea id="story-content" placeholder="Share your journey here..." />
      </CardContent>
      <CardFooter>
        <Button>Submit Story</Button>
      </CardFooter>
    </Card>
  );
}
