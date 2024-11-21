import { Toaster } from "react-hot-toast";
import Posts from "./components/Posts";

const App = () => {
  return (
    <div className="min-h-screen bg-main_bg_color text-slate-800 py-2">
      <header className="py-4">
        <h1 className="text-4xl font-bold text-center">Latest Posts</h1>
      </header>
      <Posts />
      <Toaster position="top-right" className="bg-main_bg_color" />
    </div>
  );
};

export default App;
