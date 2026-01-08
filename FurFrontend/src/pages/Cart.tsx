import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import { Minus, Plus, X, ArrowRight, ShoppingBag } from "lucide-react";

const Cart = () => {
  const { items, updateQuantity, removeItem, getTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <ShoppingBag className="h-16 w-16 mx-auto mb-6 text-muted-foreground/50" />
            <h1 className="heading-section mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground mb-8">
              Discover our collection and find your perfect piece.
            </p>
            <Link to="/products">
              <Button variant="beige" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container-luxury">
            <h1 className="heading-section mb-12">Shopping Cart</h1>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-6 p-6 bg-card rounded-lg border border-border"
                  >
                    <Link
                      to={`/product/${item.product.id}`}
                      className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-secondary/50"
                    >
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </Link>

                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between mb-2">
                        <Link
                          to={`/product/${item.product.id}`}
                          className="font-serif text-lg hover:text-muted-foreground transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeItem(item.product.id)}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        {item.product.material}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center border border-border rounded">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="p-2 hover:bg-accent transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-4 font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="p-2 hover:bg-accent transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>

                        <span className="font-medium">
                          $
                          {(
                            item.product.price * item.quantity
                          ).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                <Button
                  variant="ghost"
                  className="text-muted-foreground"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 p-8 beige-gradient rounded-lg">
                  <h2 className="font-serif text-xl mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${getTotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>Calculated at checkout</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 mb-6">
                    <div className="flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="font-serif text-xl">
                        ${getTotal().toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <Link to="/checkout">
                    <Button variant="beige" size="lg" className="w-full gap-2">
                      Proceed to Checkout
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>

                  <Link
                    to="/products"
                    className="block text-center mt-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
