import { useState, useEffect } from "react";
import { Card, CardHeader, CardContent } from "../ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/Accordion";

export default function FAQ() {
  const fetchFAQData = async () => {
    const url =
      "http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/FAQPost/GetAll";
    try {
      const request = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!request.ok) {
        throw new Error(`Failed to fetch FAQs. Status: ${request.status}`);
      }

      const data = await request.json();
      setFaqs(data);
    } catch (error) {
      console.error("Error fetching FAQ data:", error);
    }
  };

  const postFAQData = async () => {
    const url =
      "http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/FAQPost/Add";
    try {
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

      if (!request.ok) {
        throw new Error(`Failed to submit question. Status: ${request.status}`);
      }

      const data = await request.json();
      alert("Question submitted successfully!");
      await fetchFAQData();
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };

  const postAnswerData = async (faqId, newAnswer) => {
    const url = `http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/FAQPost/AnswerFAQ/${faqId}`;
    try {
      const request = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          answer: newAnswer,
        }),
      });

      if (!request.ok) {
        throw new Error(`Failed to submit answer. Status: ${request.status}`);
      }

      const data = await request.json();
      alert("Answer saved successfully!");
      fetchFAQData();
    } catch (error) {
      console.error("Error submitting answer:", error);
    }
  };

  const deleteFAQData = async (faqId) => {
    const url = `http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/FAQPost/Delete/${faqId}`;
    try {
      const request = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!request.ok) {
        throw new Error(`Failed to delete question. Status: ${request.status}`);
      }

      const data = await request.json();
      alert("Question deleted successfully!");
      await fetchFAQData();
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  useEffect(() => {
    fetchFAQData();
  }, []);

  const [faqs, setFaqs] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState({}); // Store answers for each question dynamically

  // Function to handle adding a new question
  const handleAddQuestion = async (e) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      await postFAQData();
      setNewQuestion("");
    }
  };

  // Function to handle submitting an answer
  const handleAnswerSubmit = async (faqId) => {
    const answer = newAnswer[faqId] || "";
    if (answer.trim()) {
      await postAnswerData(faqId, answer);
    } else {
      alert("Answer cannot be empty!");
    }
  };

  // Function to handle deleting a question
  const handleDeleteQuestion = async (faqId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this question?"
    );
    if (confirmDelete) {
      await deleteFAQData(faqId);
    }
  };

  return (
    <Card>
      <CardHeader title="Frequently Asked Questions" />
      <CardContent>
        {/* Form to add a new question */}
        <form onSubmit={handleAddQuestion} className="mb-4">
          <input
            type="text"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Type your question here..."
            className="border p-2 w-full mb-2"
          />
          <Button
            type="submit"
            className="w-full py-3 bg-[#A26B61] hover:bg-[#e8a397] text-white font-bold rounded-lg shadow-md transition-all duration-300"
          >
            Submit Feedback
          </Button>
        </form>

        {/* Accordion to display FAQs */}
        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p>
                  {faq.answer?.length > 0
                    ? "Submitted Answer: "
                    : "No answers yet."}
                </p>

                {/* Display all submitted answers */}
                <div>
                  {faq.answer}
                </div>

                {/* Input to answer the question */}
                <input
                  type="text"
                  value={newAnswer[faq.id] || ""}
                  onChange={(e) =>
                    setNewAnswer({ ...newAnswer, [faq.id]: e.target.value })
                  }
                  placeholder="Type your answer here..."
                  className="border p-2 w-full mt-2"
                />
                <button
                  onClick={() => handleAnswerSubmit(faq.id)}
                  className="bg-green-500 text-white p-2 rounded mt-2"
                >
                  Submit Answer
                </button>

                {/* Delete Question Button */}
                <button
                  onClick={() => handleDeleteQuestion(faq.id)}
                  className="bg-red-500 text-white p-2 rounded mt-2 ml-2"
                >
                  Delete Question
                </button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
