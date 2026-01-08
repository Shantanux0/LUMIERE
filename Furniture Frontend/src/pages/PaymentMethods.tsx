import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { ArrowLeft, Plus, CreditCard } from "lucide-react";

const PaymentMethods = () => {
    const { isAuthenticated } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    // Mock payment methods
    const paymentMethods = [
        {
            id: 1,
            type: "Visa",
            last4: "4242",
            expiry: "12/26",
            isDefault: true,
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <section className="py-20">
                    <div className="container-luxury max-w-4xl">
                        <Link to="/profile" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Profile
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center justify-between mb-12">
                                <div>
                                    <h1 className="heading-section mb-2">Payment Methods</h1>
                                    <p className="text-luxury">Manage your payment information</p>
                                </div>
                                <Button className="gap-2">
                                    <Plus className="w-4 h-4" />
                                    Add Card
                                </Button>
                            </div>

                            <div className="space-y-4">
                                {paymentMethods.map((method, index) => (
                                    <motion.div
                                        key={method.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="border border-border rounded-lg p-6 relative"
                                    >
                                        {method.isDefault && (
                                            <span className="absolute top-4 right-4 px-3 py-1 bg-foreground text-background text-xs font-medium rounded-full">
                                                Default
                                            </span>
                                        )}
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                                                <CreditCard className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-serif text-lg mb-1">{method.type} •••• {method.last4}</h3>
                                                <p className="text-sm text-muted-foreground">Expires {method.expiry}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3 mt-6">
                                            <button className="text-sm font-medium hover:underline">Edit</button>
                                            <button className="text-sm font-medium text-red-600 hover:underline">Remove</button>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default PaymentMethods;
