import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import { ShoppingBag, Minus, Plus, ArrowLeft, Check } from "lucide-react";
import ProductCard from "@/components/products/ProductCard";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const addItem = useCart((state) => state.addItem);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="heading-section mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button variant="minimal">Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    toast({
      title: "Added to cart",
      description: `${quantity} × ${product.name} added to your cart`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="container-luxury py-6">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </div>

        {/* Product Section */}
        <section className="pb-20">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-secondary/50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="lg:py-8">
                <div className="flex gap-2 mb-4">
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

                <h1 className="font-serif text-3xl md:text-4xl mb-4">
                  {product.name}
                </h1>

                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-2xl font-medium">
                    ${product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Color Selection */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium mb-3">
                    Color: {product.colors[selectedColor]}
                  </h3>
                  <div className="flex gap-3">
                    {product.colors.map((color, index) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(index)}
                        className={`px-4 py-2 text-sm border rounded transition-all ${
                          selectedColor === index
                            ? "border-foreground bg-foreground text-background"
                            : "border-border hover:border-foreground/50"
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium mb-3">Quantity</h3>
                  <div className="inline-flex items-center border border-border rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-accent transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-6 py-3 font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-accent transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {/* Add to Cart */}
                <Button
                  variant="beige"
                  size="xl"
                  className="w-full gap-3 mb-8"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Add to Cart — ${(product.price * quantity).toLocaleString()}
                </Button>

                {/* Product Details */}
                <div className="border-t border-border pt-8 space-y-4">
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Material</span>
                    <span className="font-medium">{product.material}</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-border/50">
                    <span className="text-muted-foreground">Dimensions</span>
                    <span className="font-medium">{product.dimensions}</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-muted-foreground">Availability</span>
                    <span className="font-medium flex items-center gap-2">
                      {product.inStock ? (
                        <>
                          <Check className="h-4 w-4 text-green-600" />
                          In Stock
                        </>
                      ) : (
                        "Out of Stock"
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-20 beige-gradient">
            <div className="container-luxury">
              <h2 className="heading-section mb-12">You May Also Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
