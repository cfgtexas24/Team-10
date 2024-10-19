import { useState } from "react";
import { Card, CardContent } from "../ui/Card";

export default function SpotlightGrid() {
  const [selectedTab, setSelectedTab] = useState(null); // Track which tab is open
  const [newComment, setNewComment] = useState(""); // Track the new comment input
  const [articles, setArticles] = useState([
    {
      title: "Houston Certified Midwife's Journey to ABIDE",
      story:
        "After working with ABIDE Women, this midwife realized how much the community needed better maternal care. Inspired by their mission, she became certified and now helps provide that care",
      comments: [
        "omg love this journey",
        "So cool I wanna be part of something like this too",
      ],
    },
    {
      title: "How ABIDE Helped Shape My Career in Midwifery",
      story:
        "Attending ABIDE’s classes opened my eyes to the real issues out there. Now, I’m committed to giving back through midwifery",
      comments: [
        "wow this is super inspiring",
        "yesss we need more midwives like this",
      ],
    },
    {
      title: "Joining ABIDE Women’s Fight for Maternal Health",
      story:
        "Seeing the challenges faced by women in South Dallas, I joined ABIDE Women to help make a difference. We work every day to reduce maternal mortality and provide the care that’s needed",
      comments: [
        "Go ABIDE This is what it's all about",
        "love this helping others is everything",
      ],
    },
    {
      title: "How Midwifery Led Me to ABIDE",
      story:
        "I always wanted to be a midwife, but joining ABIDE showed me the power of community care. It’s been an incredible journey",
      comments: ["wow this is deep", "this is giving me so much motivation"],
    },
    {
      title: "My Journey to Midwifery and ABIDE Women",
      story:
        "After a life-changing experience at ABIDE, I knew midwifery was my calling. Now, I’m part of their mission to provide care to everyone, no matter their situation",
      comments: [
        "ABIDE is everything!!! Love this journey",
        "thanks for sharing really hits home",
      ],
    },
    {
      title: "A Midwife’s Path to ABIDE Women",
      story:
        "After a personal health scare, I found ABIDE Women and realized I could help others avoid the same issues. Now, I’m part of their team, providing the care that every woman deserves",
      comments: [
        "so real ABIDE is doing such important work",
        "this journey is so inspiring thanks for sharing",
      ],
    },
  ]);

  // Handle adding a new comment
  const handleAddComment = (index) => {
    if (newComment.trim() !== "") {
      const updatedArticles = [...articles];
      updatedArticles[index].comments.push(newComment); // Add the new comment to the article
      setArticles(updatedArticles);
      setNewComment(""); // Clear the input field
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {articles.map((article, index) => (
        <Card key={index} className="w-full p-4 bg-white rounded-lg shadow-md">
          <CardContent>
            <h2
              className="text-xl font-semibold text-black cursor-pointer hover:text-gray-700 transition duration-300"
              onClick={() =>
                setSelectedTab(selectedTab === index ? null : index)
              } // Toggle tabs
            >
              {article.title}
            </h2>
            {selectedTab === index && (
              <div className="mt-4">
                <p className="text-gray-600">{article.story}</p>
                <h3 className="mt-4 text-lg font-semibold text-black">
                  Comments:
                </h3>
                <ul className="list-disc list-inside text-gray-600">
                  {article.comments.map((comment, i) => (
                    <li key={i} className="mt-2">
                      {comment}
                    </li>
                  ))}
                </ul>
                {/* Input to add a comment */}
                <div className="mt-4">
                  <input
                    type="text"
                    className="w-full p-2 rounded bg-gray-100 text-black placeholder-gray-500"
                    placeholder="Add your comment"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <button
                    className="mt-2 p-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-300"
                    onClick={() => handleAddComment(index)}
                  >
                    Add Comment
                  </button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
