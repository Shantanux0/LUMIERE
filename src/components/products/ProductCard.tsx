import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCart((state) => state.addItem);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="group block"
    >
      <div className="relative overflow-hidden rounded-lg bg-secondary/50 aspect-square mb-4 image-zoom">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex gap-2">
          {product.new && (
            <span className="px-3 py-1 bg-foreground text-background text-xs font-medium tracking-wide rounded">
              New
            </span>
          )}
          {product.originalPrice && (
            <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-medium tracking-wide rounded">
              Sale
            </span>
          )}
        </div>

        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <Button
            variant="luxury"
            className="w-full gap-2"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="font-serif text-lg group-hover:text-muted-foreground transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground">{product.material}</p>
        <div className="flex items-center gap-2">
          <span className="font-medium">
            ${product.price.toLocaleString()}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
