/* eslint-disable react/prop-types */
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import ShareDialog from "./ShareDialog";

const Post = ({ data }) => {
  const [likedPostIds, setLikedPostIds] = useState([]);

  const toggleLike = (postId) => {
    setLikedPostIds((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <div className="space-y-6">
      {data.map((post) => (
        <Card
          key={post.id}
          className="border bg-red-400 shadow-2xl rounded-md bg-gradient-to-br from-slate-50 to-slate-100"
        >
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-slate-800">
              {post.title}
            </CardTitle>
            <CardDescription className="text-slate-600">
              User name: {post.userId}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700">{post.body}</p>
          </CardContent>
          <CardFooter>
            <div className="w-full flex justify-between text-2xl">
              <button
                onClick={() => toggleLike(post.id)}
                className={`p-2 rounded-full transition-transform duration-300 ${
                  likedPostIds.includes(post.id)
                    ? "text-blue-500 scale-125 bg-slate-200"
                    : "text-slate-500 scale-100 bg-slate-100"
                }`}
              >
                <AiFillLike />
              </button>
              <ShareDialog postId={post.id} />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Post;
