import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const Loader = () => {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, index) => (
        <Card key={index} className="border border-gray-300 shadow-md">
          <CardHeader>
            <div className="h-6 bg-gray-200 rounded-md w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded-md w-1/2 mt-2 animate-pulse"></div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded-md w-full animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-md w-5/6 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-md w-4/6 animate-pulse"></div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="h-6 w-6 bg-gray-200 rounded-md animate-pulse"></div>
            <div className="h-6 w-6 bg-gray-200 rounded-md animate-pulse"></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Loader;
