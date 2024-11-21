import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post";
import Loader from "./Loader";
import toast from "react-hot-toast";

const Posts = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(res.data);
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch data, try again!");
      } finally {
        setIsloading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-[90%] lg:w-[60%] mx-auto my-8 bg-post_component_color border border-slate-300 rounded-lg p-6 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
      {isLoading ? <Loader /> : <Post data={data} />}
    </div>
  );
};

export default Posts;
