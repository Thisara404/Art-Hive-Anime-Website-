
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/common/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-md mx-auto">
            <h1 className="text-6xl font-bold text-ct-blue-500 mb-2">404</h1>
            <p className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</p>
            <p className="text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-ct-blue-500 hover:bg-ct-blue-600">
                <Link to="/">Return Home</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
