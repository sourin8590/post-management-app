/* eslint-disable react/prop-types */
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import toast from "react-hot-toast";
import { FaRegShareFromSquare } from "react-icons/fa6";

const ShareDialog = ({ postId }) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="flex items-center text-gray-500 hover:text-blue-500">
          <FaRegShareFromSquare />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Share this post</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to share this post?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="text-blue-500 hover:underline bg-white hover:bg-blue-500 hover:text-white"
            onClick={() => {
              toast.success(`Post: ${postId} shared!`);
              console.log("Hello");
            }}
          >
            Share
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ShareDialog;
