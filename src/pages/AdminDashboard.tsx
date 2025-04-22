
import { useState } from "react";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Upload,
  BarChart3,
  Users,
  ShoppingBag,
  DollarSign,
  PlusCircle,
  Image
} from "lucide-react";
import { PRODUCTS } from "@/lib/constants";

// Admin only features (product upload, etc.)

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('si-LK', { 
    style: 'currency', 
    currency: 'LKR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0 
  }).format(price);
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  const handleUpload = () => {
    setIsUploading(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* Sidebar */}
          <aside className="lg:w-64 mb-6 lg:mb-0">
            <Card>
              <CardHeader>
                <CardTitle>Admin Dashboard</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="flex flex-col">
                  {[
                    { id: "overview", label: "Overview", icon: BarChart3 },
                    { id: "products", label: "My Products", icon: ShoppingBag },
                    { id: "upload", label: "Upload Content", icon: Upload },
                    { id: "sales", label: "Sales & Analytics", icon: DollarSign },
                    { id: "users", label: "User Management", icon: Users }
                  ].map((item) => (
                    <button
                      key={item.id}
                      className={`flex items-center gap-3 p-3 text-left transition-colors ${
                        activeTab === item.id
                          ? "bg-ct-blue-50 text-ct-blue-500 font-medium"
                          : "text-gray-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </aside>
          
          {/* Main Content */}
          <main className="flex-1">
            {activeTab === "overview" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {[
                    { title: "Total Sales", value: formatPrice(126500), icon: DollarSign, color: "bg-ct-blue-100 text-ct-blue-500" },
                    { title: "Products", value: "12", icon: ShoppingBag, color: "bg-green-100 text-green-500" },
                    { title: "Customers", value: "48", icon: Users, color: "bg-purple-100 text-purple-500" },
                    { title: "Avg. Rating", value: "4.8/5", icon: BarChart3, color: "bg-amber-100 text-amber-500" }
                  ].map((item, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-gray-500">{item.title}</p>
                            <p className="text-2xl font-bold">{item.value}</p>
                          </div>
                          <div className={`p-2 rounded-full ${item.color}`}>
                            <item.icon className="h-5 w-5" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <Card className="lg:col-span-2">
                    <CardHeader className="pb-2">
                      <CardTitle>Sales Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80 flex items-center justify-center bg-gray-50 rounded-md">
                        <p className="text-gray-500">Sales chart would appear here</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { title: "New Order #1092", time: "10 minutes ago" },
                          { title: "New Review: 5 stars", time: "1 hour ago" },
                          { title: "Product Download", time: "3 hours ago" },
                          { title: "New Customer", time: "5 hours ago" },
                          { title: "Order Completed #1086", time: "1 day ago" }
                        ].map((activity, index) => (
                          <div key={index} className="flex items-start">
                            <div className="w-2 h-2 mt-2 rounded-full bg-ct-blue-500 mr-3"></div>
                            <div>
                              <p className="font-medium">{activity.title}</p>
                              <p className="text-xs text-gray-500">{activity.time}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
            
            {activeTab === "upload" && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Upload New Content</h2>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                          Product Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                          placeholder="Enter product title"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                          Category
                        </label>
                        <select
                          id="category"
                          className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                        >
                          <option value="">Select Category</option>
                          <option value="digital-art">Digital Art</option>
                          <option value="templates">Templates</option>
                          <option value="e-books">E-Books</option>
                          <option value="courses">Courses</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                          Description
                        </label>
                        <textarea
                          id="description"
                          rows={5}
                          className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                          placeholder="Describe your product"
                        ></textarea>
                      </div>
                      
                      <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                          Price (LKR)
                        </label>
                        <input
                          type="number"
                          id="price"
                          className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                          placeholder="Enter price in LKR"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Product Thumbnail
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-ct-blue-500 transition-colors">
                          <Image className="mx-auto h-12 w-12 text-gray-400" />
                          <div className="mt-4 flex text-sm justify-center">
                            <label
                              htmlFor="thumbnail-upload"
                              className="cursor-pointer font-medium text-ct-blue-600 hover:text-ct-blue-500"
                            >
                              Upload a file
                              <input
                                id="thumbnail-upload"
                                name="thumbnail-upload"
                                type="file"
                                className="sr-only"
                                accept="image/*"
                              />
                            </label>
                            <p className="pl-1 text-gray-500">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">
                            PNG, JPG, GIF up to 10MB
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Digital Product Files
                        </label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-ct-blue-500 transition-colors">
                          {isUploading ? (
                            <div className="space-y-4">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">Uploading...</span>
                                <span className="text-sm">{uploadProgress}%</span>
                              </div>
                              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-ct-blue-500 rounded-full"
                                  style={{ width: `${uploadProgress}%` }}
                                ></div>
                              </div>
                            </div>
                          ) : (
                            <>
                              <Upload className="mx-auto h-12 w-12 text-gray-400" />
                              <div className="mt-4 flex text-sm justify-center">
                                <label
                                  htmlFor="file-upload"
                                  className="cursor-pointer font-medium text-ct-blue-600 hover:text-ct-blue-500"
                                >
                                  Upload a file
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1 text-gray-500">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500 mt-2">
                                ZIP, PDF, MP3, MP4, etc. up to 500MB
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <Button type="button" onClick={handleUpload} className="bg-ct-blue-500 hover:bg-ct-blue-600">
                        <PlusCircle className="h-4 w-4 mr-2" />
                        Create Product
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeTab === "products" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">My Products</h2>
                  <Button className="bg-ct-blue-500 hover:bg-ct-blue-600">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add New
                  </Button>
                </div>
                
                <Card>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-4">Product</th>
                          <th className="text-left p-4">Category</th>
                          <th className="text-left p-4">Price</th>
                          <th className="text-left p-4">Sales</th>
                          <th className="text-left p-4">Rating</th>
                          <th className="text-left p-4">Status</th>
                          <th className="text-left p-4">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {PRODUCTS.slice(0, 5).map((product) => (
                          <tr key={product.id} className="border-b">
                            <td className="p-4">
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-md overflow-hidden bg-gray-200 mr-3">
                                  <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <span className="font-medium">{product.title}</span>
                              </div>
                            </td>
                            <td className="p-4">{product.category}</td>
                            <td className="p-4">{formatPrice(product.price)}</td>
                            <td className="p-4">{Math.floor(Math.random() * 50) + 1}</td>
                            <td className="p-4">{product.rating}</td>
                            <td className="p-4">
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                Active
                              </span>
                            </td>
                            <td className="p-4">
                              <Button variant="ghost" size="sm">Edit</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            )}
            
            {(activeTab === "sales" || activeTab === "users") && (
              <div className="flex items-center justify-center min-h-[50vh] text-center">
                <div>
                  <h3 className="text-xl font-medium mb-2">Coming Soon</h3>
                  <p className="text-gray-500 mb-4">
                    This feature is still under development.
                  </p>
                  <Button onClick={() => setActiveTab("overview")}>
                    Return to Dashboard
                  </Button>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
