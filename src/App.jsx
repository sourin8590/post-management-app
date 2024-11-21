import { Toaster } from "react-hot-toast"; // Importing Toaster for displaying toast notifications globally
import Posts from "./components/Posts"; // Importing the Posts component to display posts

const App = () => {
  return (
    // Main wrapper for the app with background color and padding
    <div className="min-h-screen bg-main_bg_color text-slate-800 py-2">
      <header className="py-4">
        {/* Header section with title */}
        <h1 className="text-4xl font-bold text-center">Latest Posts</h1>
      </header>
      
      {/* Posts component, responsible for fetching and displaying the list of posts */}
      <Posts />
      
      {/* Toaster component to display toast notifications */}
      {/* Positioning the toaster in the top-right corner and styling the background */}
      <Toaster position="top-right"/>
    </div>
  );
};

export default App;
