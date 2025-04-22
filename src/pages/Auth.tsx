
import { useState } from "react";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type AuthTab = "login" | "register";

const Auth = () => {
  const [activeTab, setActiveTab] = useState<AuthTab>("login");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleTabChange = (tab: AuthTab) => {
    setActiveTab(tab);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Login successful! (This is a mock response)");
    }, 1000);
  };
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Registration successful! (This is a mock response)");
      setActiveTab("login");
    }, 1000);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-md mx-auto bg-white p-8 rounded-lg border shadow-sm">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold">Welcome to Create & Trade</h1>
              <p className="text-gray-500 mt-1">Sri Lanka's Digital Content Marketplace</p>
            </div>
            
            <div className="flex border-b mb-6">
              <button
                className={`flex-1 py-2 text-center font-medium ${
                  activeTab === "login"
                    ? "text-ct-blue-500 border-b-2 border-ct-blue-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => handleTabChange("login")}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 text-center font-medium ${
                  activeTab === "register"
                    ? "text-ct-blue-500 border-b-2 border-ct-blue-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => handleTabChange("register")}
              >
                Register
              </button>
            </div>
            
            {activeTab === "login" ? (
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <Link to="/forgot-password" className="text-xs text-ct-blue-500 hover:underline">
                      Forgot Password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-ct-blue-500 hover:bg-ct-blue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
                
                <div className="mt-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-gray-500">Or continue with</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <Button variant="outline" className="w-full">
                      Google
                    </Button>
                    <Button variant="outline" className="w-full">
                      Facebook
                    </Button>
                  </div>
                </div>
              </form>
            ) : (
              <form onSubmit={handleRegister}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="register-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="register-password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                    minLength={8}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Must be at least 8 characters long
                  </p>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-ct-blue-500 hover:bg-ct-blue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Account..." : "Create Account"}
                </Button>
                
                <p className="text-xs text-center mt-4 text-gray-500">
                  By registering, you agree to our{" "}
                  <Link to="/terms" className="text-ct-blue-500 hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy-policy" className="text-ct-blue-500 hover:underline">
                    Privacy Policy
                  </Link>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Auth;
