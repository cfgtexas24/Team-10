import { Card, CardHeader, CardContent } from '../ui/Card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/Accordion';

export default function FAQ() {
  return (
    <Card>
      <CardHeader title="Frequently Asked Questions" />
      <CardContent>
        <Accordion>
          <AccordionItem>
            <AccordionTrigger>How do I schedule an appointment?</AccordionTrigger>
            <AccordionContent>Call our office or use the online system.</AccordionContent>
          </AccordionItem>
          {/* Add more FAQs */}
        </Accordion>
      </CardContent>
    </Card>
  );
}
