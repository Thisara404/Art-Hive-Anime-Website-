
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-ct-amber-100 px-3 py-1 text-sm text-ct-amber-800">
              Discover Creative Digital Content
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Showcase, Sell & Engage with Your Digital Creations
            </h1>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Create & Trade is Sri Lanka's premier platform for digital content creators and buyers. Join our community to access high-quality digital products or showcase your own creations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild className="bg-ct-blue-500 hover:bg-ct-blue-600">
                <Link to="/products">Browse Products</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/auth">Join the Community</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <div className="rounded-full bg-ct-blue-500 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span>Quality Digital Products</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="rounded-full bg-ct-blue-500 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span>Trusted Creators</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="rounded-full bg-ct-blue-500 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                </div>
                <span>Secure Transactions</span>
              </div>
            </div>
          </div>
          <div className="mx-auto flex items-center justify-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 size-24 rounded-full bg-ct-teal-300/20 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 size-24 rounded-full bg-ct-blue-300/20 blur-xl"></div>
              <div className="border-2 border-ct-teal-500 bg-gradient-to-br from-white to-ct-blue-50 rounded-xl p-2 shadow-lg">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg"
                    alt="Digital content marketplace"
                    className="w-full max-w-md h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold">Featured Digital Products</h3>
                    <p className="text-white/80 text-sm mt-1">Discover trending content from our creators</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
