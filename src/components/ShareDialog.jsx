/* eslint-disable react/prop-types */
import {
    // Importing components for Alert Dialog from the UI library
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"; // Custom alert dialog components
  import toast from "react-hot-toast"; // Importing toast for success notifications
  import { FaRegShareFromSquare } from "react-icons/fa6"; // Importing share icon
  
  const ShareDialog = ({ postId }) => {
    return (
      <AlertDialog>
        {/* Trigger for opening the alert dialog */}
        <AlertDialogTrigger asChild>
          {/* Share button, styled with hover effect */}
          <button className="flex items-center text-gray-500 hover:text-blue-500">
            <FaRegShareFromSquare /> {/* Share icon */}
          </button>
        </AlertDialogTrigger>
  
        {/* The content inside the dialog */}
        <AlertDialogContent>
          <AlertDialogHeader>
            {/* Dialog Title */}
            <AlertDialogTitle>Share this post</AlertDialogTitle>
            {/* Dialog Description */}
            <AlertDialogDescription>
              Are you sure you want to share this post?
            </AlertDialogDescription>
          </AlertDialogHeader>
  
          {/* Footer with action buttons */}
          <AlertDialogFooter>
            {/* Cancel button that closes the dialog */}
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            {/* Share button that triggers the sharing action */}
            <AlertDialogAction
              className="text-blue-500 hover:underline bg-white hover:bg-blue-500 hover:text-white"
              onClick={() => {
                // Show a success toast notification
                toast.success(`Post: ${postId} shared!`);
                console.log("Hello"); // You can add the logic for sharing the post here
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
  