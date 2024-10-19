'use client'

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"
import { Textarea } from "@/components/ui/Textarea"
import { useUser } from "@/context/UserContext"

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
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postFeedbackData();
  }

  return (
    <Card className="w-full max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold flex justify-center items-center mb-6">Feedback Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="feedback" className="block text-sm font-medium">Feedback</label>
          <Textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Please enter your feedback"
            required
          />
        </div>
        <div>
          <label htmlFor="rating" className="block text-sm font-medium">Rating</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            className="w-full p-2 border rounded"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num.toString()}>
                {num} Star{num !== 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>
        <Button type="submit" className="w-full">
          Submit Feedback
        </Button>
      </form>
    </Card>
  )
}
