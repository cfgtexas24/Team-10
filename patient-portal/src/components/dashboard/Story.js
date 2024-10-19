import { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/Card";

export default function SpotlightGrid() {
  const [selectedTab, setSelectedTab] = useState(null); // Track which tab is open
  const [newComment, setNewComment] = useState(""); // Track the new comment input
  const [articles, setArticles] = useState([]);
  const [commentsByStoryId, setCommentsByStoryId] = useState({}); // Track loaded comments per story

  // Handle adding a new comment
  const postComment = async (storyId) => {
    const url = `http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/StoryReply/Create`;
    const request = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        content: newComment,
        storyId: storyId
      })
    });

    const response = await request.json();
    if (response.success) {
      await fetchComments(storyId); // Fetch updated comments after posting
    } else {
      alert("Posting comment failed!");
    }
  };

  const fetchComments = async (storyId) => {
    const url = `http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/StoryReply/GetStoryReplies/${storyId}`;
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    const response = await request.json();
    const comments = response.flatMap(x => x.content);

    // Update comments for the specific story
    setCommentsByStoryId((prevComments) => ({
      ...prevComments,
      [storyId]: comments
    }));
  };

  const fetchStories = async () => {
    const url = `http://ec2-3-83-143-244.compute-1.amazonaws.com:5000/Story/GetAll`;
    const request = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    const response = await request.json();
    setArticles(response);
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleTabClick = (storyId, index) => {
    setSelectedTab(selectedTab === index ? null : index);
    
    // Load comments if this story is selected and comments haven't been loaded yet
    if (!commentsByStoryId[storyId]) {
      fetchComments(storyId);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {articles.map((article, index) => (
        <Card key={article.id} className="w-full p-4 bg-white rounded-lg shadow-md">
          <CardContent>
            <h2
              className="text-xl font-semibold text-black cursor-pointer hover:text-gray-700 transition duration-300"
              onClick={() => handleTabClick(article.id, index)} // Toggle and fetch comments
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
                  {commentsByStoryId[article.id] ? (
                    commentsByStoryId[article.id].map((comment, i) => (
                      <li key={i} className="mt-2">
                        {comment}
                      </li>
                    ))
                  ) : (
                    <li>Loading comments...</li>
                  )}
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
                    onClick={() => postComment(article.id)}
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
