import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"; // Importing UI components for structured card layout

const Loader = () => {
  return (
    <div className="space-y-4">
      {/* Generating 5 loading skeletons */}
      {[...Array(5)].map((_, index) => (
        <Card key={index} className="border border-gray-300 shadow-md">
          {/* Card Header: Contains placeholders for title and description */}
          <CardHeader>
            {/* Placeholder for title */}
            <div className="h-6 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>
            {/* Placeholder for description */}
            <div className="h-4 bg-gray-200 rounded-md w-1/2 mt-2 animate-pulse"></div>
          </CardHeader>
          
          {/* Card Content: Contains placeholders for body text */}
          <CardContent>
            <div className="space-y-2">
              {/* Placeholder for content line 1 */}
              <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
              {/* Placeholder for content line 2 */}
              <div className="h-4 bg-gray-200 rounded-md w-5/6 animate-pulse"></div>
              {/* Placeholder for content line 3 */}
              <div className="h-4 bg-gray-200 rounded-md w-4/6 animate-pulse"></div>
            </div>
          </CardContent>
          
          {/* Card Footer: Contains placeholders for like/share buttons */}
          <CardFooter className="flex justify-between">
            {/* Placeholder for like button */}
            <div className="h-6 w-6 bg-gray-200 rounded-md animate-pulse"></div>
            {/* Placeholder for share button */}
            <div className="h-6 w-6 bg-gray-200 rounded-md animate-pulse"></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Loader;
