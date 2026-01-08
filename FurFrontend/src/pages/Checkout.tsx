import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/store/cart";
import { ArrowLeft, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import api from "@/lib/api";
import { useAuthStore } from "@/store/authStore";

const Checkout = () => {
  const { items, getTotal, clearCart } = useCart();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const { user } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      toast({
        variant: "destructive",
        title: "Authentication required",
        description: "Please login to place an order.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const orderPayload = {
        userId: user.id,
        totalAmount: getTotal(),
        orderItems: items.map(item => ({
          productId: item.product.id,
          price: item.product.price,
          quantity: item.quantity
        }))
      };

      await api.post('/orders', orderPayload);

      setIsComplete(true);
      clearCart();
      toast({
        title: "Order Placed!",
        description: "Thank you for your purchase. You will receive a confirmation email shortly.",
      });
    } catch (error) {
      console.error("Order failed:", error);
      toast({
        variant: "destructive",
        title: "Order Failed",
        description: "There was an issue placing your order. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (items.length === 0 && !isComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 min-h-[70vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="heading-section mb-4">Your Cart is Empty</h1>
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

  if (isComplete) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 min-h-[70vh] flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <Check className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="heading-section mb-4">Order Confirmed</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for your purchase. We've sent a confirmation email with your order details.
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
            <Link
              to="/cart"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Cart
            </Link>

            <h1 className="heading-section mb-12">Checkout</h1>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Checkout Form */}
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact */}
                <div>
                  <h2 className="font-serif text-xl mb-6">Contact</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping */}
                <div>
                  <h2 className="font-serif text-xl mb-6">Shipping Address</h2>
                  <div className="grid gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        placeholder="123 Main Street"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-1">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          placeholder="New York"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          placeholder="NY"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input
                          id="zip"
                          placeholder="10001"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment */}
                <div>
                  <h2 className="font-serif text-xl mb-6">Payment</h2>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input
                        id="cardNumber"
                        placeholder="4242 4242 4242 4242"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvc">CVC</Label>
                        <Input
                          id="cvc"
                          placeholder="123"
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="beige"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : `Pay $${getTotal().toLocaleString()}`}
                </Button>
              </form>

              {/* Order Summary */}
              <div>
                <div className="sticky top-28 p-8 beige-gradient rounded-lg">
                  <h2 className="font-serif text-xl mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div
                        key={item.product.id}
                        className="flex gap-4 py-4 border-b border-border/50"
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-secondary/50 flex-shrink-0">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">
                            {item.product.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        <span className="font-medium">
                          $
                          {(
                            item.product.price * item.quantity
                          ).toLocaleString()}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${getTotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax</span>
                      <span>${Math.round(getTotal() * 0.08).toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="font-serif text-xl">
                        ${Math.round(getTotal() * 1.08).toLocaleString()}
                      </span>
                    </div>
                  </div>
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

export default Checkout;
