/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Importing UI components for structured card layout
import { useState } from "react"; // useState hook to manage local component state
import { AiFillLike } from "react-icons/ai"; // Importing the like icon from react-icons
import ShareDialog from "./ShareDialog"; // Import the ShareDialog component for sharing functionality

const Post = ({ data }) => {
  // State to manage the liked posts. `likedPostIds` holds the IDs of the posts that have been liked.
  const [likedPostIds, setLikedPostIds] = useState([]);

  // Function to toggle the "like" status of a post based on its ID
  const toggleLike = (postId) => {
    setLikedPostIds((prev) =>
      // If the post is already liked, remove it from the liked posts list
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : // Otherwise, add it to the liked posts list
          [...prev, postId]
    );
  };

  return (
    <div className="space-y-6">
      {/* Mapping through the 'data' array to display each post */}
      {data.map((post) => (
        <Card
          key={post.id} // Unique key for each post in the list
          className="border bg-red-400 shadow-2xl rounded-md bg-gradient-to-br from-slate-50 to-slate-100"
        >
          {/* Card Header: Contains the title and description of the post */}
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-slate-800">
              {post.title} {/* Display the title of the post */}
            </CardTitle>
            <CardDescription className="text-slate-600">
              User name: {post.userId} {/* Display the user ID of the post */}
            </CardDescription>
          </CardHeader>

          {/* Card Content: Displays the body content of the post */}
          <CardContent>
            <p className="text-slate-700">{post.body}</p> {/* Display the post's body */}
          </CardContent>

          {/* Card Footer: Contains buttons like "like" and "share" */}
          <CardFooter>
            <div className="w-full flex justify-between text-2xl">
              {/* Like button */}
              <button
                onClick={() => toggleLike(post.id)} // Trigger the toggleLike function on click
                className={`p-2 rounded-full transition-transform duration-300 ${
                  // Dynamically changing the button's style based on whether the post is liked
                  likedPostIds.includes(post.id)
                    ? "text-blue-500 scale-125 bg-slate-200" // If liked, change the color and scale the button
                    : "text-slate-500 scale-100 bg-slate-100" // If not liked, use default colors
                }`}
              >
                <AiFillLike /> {/* Render the like icon */}
              </button>

              {/* ShareDialog component to allow sharing of the post */}
              <ShareDialog postId={post.id} />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Post;
