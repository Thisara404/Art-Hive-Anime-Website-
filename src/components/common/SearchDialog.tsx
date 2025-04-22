
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/lib/constants";
import { Link } from "react-router-dom";

interface SearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchDialog = ({ isOpen, onClose }: SearchDialogProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredProducts = PRODUCTS.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <div className="flex items-center border rounded-md">
          <Search className="w-5 h-5 ml-3 text-gray-400" />
          <Input
            type="search"
            placeholder="Search for digital products..."
            className="border-0 focus-visible:ring-0"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        {searchQuery && (
          <div className="mt-4 space-y-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.slug}`}
                  className="flex items-center p-2 hover:bg-gray-50 rounded-md"
                  onClick={onClose}
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="ml-3">
                    <h4 className="font-medium">{product.title}</h4>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-500 py-4">
                No products found for "{searchQuery}"
              </p>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
