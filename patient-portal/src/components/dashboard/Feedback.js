'use client';

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Textarea } from "@/components/ui/Textarea";
import { useUser } from "@/context/UserContext";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("5");
  const { userId } = useUser();

  const postFeedbackData = async () => {
    const url = `http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/Feedback/CreateFeedback`;
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: feedback,
        rating: rating,
        accountId: userId
      })
    });
    const response = await request.json();

    if (response.success) {
      alert("Yay, feedback submitted!");
    } else {
      alert("Uh oh, something went wrong!");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postFeedbackData();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#A26B61] to-[#6C5846] mb-20">
      <div className="p-10 bg-white shadow-md rounded-lg max-w-3xl w-full mx-auto transition transform hover:-translate-y-2 hover:shadow-2xl hover:scale-105">
        <h2 className="text-3xl font-semibold mb-8 text-center">Feedback Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="feedback" className="block text-sm font-medium text-gray-700">Feedback</label>
            <Textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Please enter your feedback"
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6C5846] focus:border-[#6C5846]"
              required
              rows={6}
            />
          </div>
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#6C5846] focus:border-[#6C5846]"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num.toString()}>
                  {num} Star{num !== 1 ? 's' : ''}
                </option>
              ))}
            </select>
          </div>
          <Button
            type="submit"
            className="w-full py-3 bg-[#A26B61] hover:bg-[#e8a397] text-white font-bold rounded-lg shadow-md transition-all duration-300"
          >
            Submit Feedback
          </Button>
        </form>
      </div>
    </div>
  );
}
