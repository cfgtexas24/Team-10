import { useState } from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/Accordion';

export default function FAQ() {
  const [faqs, setFaqs] = useState([
    { question: 'How do I schedule an appointment?', answer: 'Call our office or use the online system.' },
    { question: 'What are the working hours?', answer: 'We are open from 9 AM to 5 PM, Monday to Friday.' },
  ]);

  // State to handle the new question submission
  const [newQuestion, setNewQuestion] = useState('');

  // Function to handle adding a new question
  const handleAddQuestion = (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    if (newQuestion.trim()) {
      // Add the new question to the faqs array
      setFaqs([...faqs, { question: newQuestion, answer: '' }]);
      setNewQuestion(''); // Reset the input field
    }
  };

  return (
    <Card>
      <CardHeader title="Frequently Asked Questions" />
      <CardContent>
        {/* Form to add new question */}
        <form onSubmit={handleAddQuestion} className="mb-4">
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="border p-2 w-full mb-2"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit Question</button>
        </form>

        {/* Accordion to display FAQs */}
        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                {faq.answer ? faq.answer : 'This question has not been answered yet.'}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
