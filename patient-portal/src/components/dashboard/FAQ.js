import { useState, useEffect } from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../ui/Accordion';

export default function FAQ() {
  const fetchFAQData = async () => {
    const url = "http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/FAQPost/GetAll";
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const data = await request.json();
    setFaqs(data);
  }

  const postFAQData = async () => {
    const url = "http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/FAQPost/Add";
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: newQuestion,
        answer: null,
      }),
    });

    const data = await request.json();

    if (data.success) {
      alert("Success!");
    } else {
      alert("Failed :c");
    }
  }

  useEffect(() => {
    fetchFAQData();
  }, [])
  const [faqs, setFaqs] = useState([]);

  // State to handle the new question submission
  const [newQuestion, setNewQuestion] = useState('');

  // Function to handle adding a new question
  const handleAddQuestion = async (e) => {
    e.preventDefault(); // Prevent form submission default behavior
    if (newQuestion.trim()) {
      // Add the new question to the faqs array
      await postFAQData();
      await fetchFAQData();
      // setFaqs([...faqs, { question: newQuestion, answer: '' }]);
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
