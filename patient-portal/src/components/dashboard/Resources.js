import { Card, CardHeader, CardContent } from '../ui/Card';

export default function Resources() {
  return (
    <Card>
      <CardHeader title="Patient Resources" />
      <CardContent>
        <ul>
          <li><a href="#">Patient Education Materials</a></li>
          {/* Add more resources */}
        </ul>
      </CardContent>
    </Card>
  );
}
