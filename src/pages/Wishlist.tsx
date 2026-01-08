import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/authStore";
import { ArrowLeft, X } from "lucide-react";

const Wishlist = () => {
    const { isAuthenticated } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    // Mock wishlist items
    const wishlistItems: any[] = [];

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <section className="py-20">
                    <div className="container-luxury max-w-5xl">
                        <Link to="/profile" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Profile
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="heading-section mb-2">Your Wishlist</h1>
                            <p className="text-luxury mb-12">View your saved items</p>

                            {wishlistItems.length === 0 ? (
                                <div className="text-center py-20">
                                    <div className="w-20 h-20 rounded-full bg-secondary mx-auto mb-6 flex items-center justify-center">
                                        <svg className="w-10 h-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                    </div>
                                    <h2 className="font-serif text-2xl mb-3">Your wishlist is empty</h2>
                                    <p className="text-muted-foreground mb-8">Start adding items you love to keep track of them</p>
                                    <Button onClick={() => navigate("/products")}>Browse Products</Button>
                                </div>
                            ) : (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Wishlist items would be mapped here */}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Wishlist;
