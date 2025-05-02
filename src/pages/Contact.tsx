
import { useState } from "react";
import Layout from "@/components/common/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1000);
  };

  return (
    <Layout>
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
              <p className="text-gray-600">
                Have questions or feedback? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: <Mail className="h-8 w-8 text-ct-blue-500" />,
                  title: "Email",
                  details: "arthive@gmail.com",
                  description: "For general inquiries and support"
                },
                {
                  icon: <Phone className="h-8 w-8 text-ct-blue-500" />,
                  title: "Phone",
                  details: "+94 752660551",
                  description: "Monday-Friday, 9am-5pm"
                },
                {
                  icon: <MapPin className="h-8 w-8 text-ct-blue-500" />,
                  title: "Office",
                  details: "123 Digital Avenue, Colombo 04",
                  description: "Sri Lanka"
                }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg border shadow-sm">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="font-medium text-ct-blue-500">{item.details}</p>
                  <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-lg border shadow-sm">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                  <p className="text-green-700">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Technical Support">Technical Support</option>
                    <option value="Account Issues">Account Issues</option>
                    <option value="Payment Issues">Payment Issues</option>
                    <option value="Partnership Opportunities">Partnership Opportunities</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
                    required
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto bg-ct-blue-500 hover:bg-ct-blue-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Find Us</h2>
              <div className="h-80 rounded-lg overflow-hidden border">
                {/* Placeholder for map - would be replaced with actual Google Map */}
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <div className="text-center p-4">
                    <MapPin className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                    <p className="font-medium text-gray-600">123 Digital Avenue, Colombo 04, Sri Lanka</p>
                    <p className="text-sm text-gray-500 mt-1">(Map integration would be here)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
