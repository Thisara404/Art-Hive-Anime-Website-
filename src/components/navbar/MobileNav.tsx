
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { CATEGORIES } from "@/lib/constants";

const MobileNav = () => {
  return (
    <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden bg-white">
      <div className="relative z-20 grid gap-6 rounded-md bg-white p-4">
        <form className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search products..."
            className="h-10 w-full rounded-md border border-input pl-9 pr-4 bg-background focus:outline-none focus:ring-2 focus:ring-ct-blue-500"
          />
        </form>
        <nav className="grid grid-flow-row auto-rows-max text-sm">
          <Link
            to="/"
            className="flex w-full items-center rounded-md p-2 hover:bg-muted"
          >
            Home
          </Link>
          <div className="my-2">
            <p className="mb-2 font-medium">Categories</p>
            {CATEGORIES.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="flex w-full items-center rounded-md p-2 pl-4 hover:bg-muted"
              >
                {category.name}
              </Link>
            ))}
          </div>
          <Link
            to="/about"
            className="flex w-full items-center rounded-md p-2 hover:bg-muted"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="flex w-full items-center rounded-md p-2 hover:bg-muted"
          >
            Contact Us
          </Link>
          <div className="mt-4 border-t pt-4">
            <Link
              to="/auth"
              className="flex w-full items-center rounded-md bg-ct-blue-500 p-2 text-white text-center justify-center"
            >
              Sign In / Register
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
