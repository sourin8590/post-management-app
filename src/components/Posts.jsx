import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./Post"; // Import the Post component to render individual posts
import Loader from "./Loader"; // Import the Loader component for displaying the loading state
import toast from "react-hot-toast"; // Import the toast library for error notifications

const Posts = () => {
  // State to store fetched data
  const [data, setData] = useState([]);
  
  // State to manage the loading state
  const [isLoading, setIsloading] = useState(false);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true); // Set loading state to true when the fetch starts

      try {
        // Axios request to fetch data from the API
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        
        // Update state with the fetched data
        setData(res.data);
      } catch (error) {
        // Log any errors to the console and show an error toast
        console.error(error);
        toast.error("Failed to fetch data, try again!"); // Error handling using toast notification
      } finally {
        // Set loading state to false after the fetch completes (whether successful or not)
        setIsloading(false);
      }
    };

    fetchData(); // Call the fetchData function to initiate the API request
  }, []); // Empty dependency array means this effect will run only once when the component mounts

  return (
    <div className="w-[90%] lg:w-[60%] mx-auto my-8 bg-post_component_color border border-slate-300 rounded-lg p-6 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
      {/* Conditional rendering: If data is loading, show the Loader component, otherwise show the Post component with data */}
      {isLoading ? <Loader /> : <Post data={data} />}
    </div>
  );
};

export default Posts;
