import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useAuthStore } from "@/store/authStore";
import { ArrowLeft, Package } from "lucide-react";

const Orders = () => {
    const { isAuthenticated } = useAuthStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated, navigate]);

    // Mock orders data
    const orders = [
        { id: "ORD-2026-001", date: "Jan 5, 2026", status: "Delivered", total: "$2,450", items: 2 },
        { id: "ORD-2025-142", date: "Dec 28, 2025", status: "In Transit", total: "$890", items: 1 },
        { id: "ORD-2025-128", date: "Dec 15, 2025", status: "Delivered", total: "$3,200", items: 3 },
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
                            <h1 className="heading-section mb-2">Your Orders</h1>
                            <p className="text-luxury mb-12">Track and manage your orders</p>

                            <div className="space-y-4">
                                {orders.map((order, index) => (
                                    <motion.div
                                        key={order.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="border border-border rounded-lg p-6 hover:border-foreground transition-colors"
                                    >
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="font-serif text-xl mb-1">{order.id}</h3>
                                                <p className="text-sm text-muted-foreground">{order.date}</p>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === 'Delivered'
                                                    ? 'bg-green-100 text-green-800'
                                                    : 'bg-blue-100 text-blue-800'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between pt-4 border-t border-border">
                                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-2">
                                                    <Package className="w-4 h-4" />
                                                    {order.items} {order.items === 1 ? 'item' : 'items'}
                                                </span>
                                                <span className="font-medium text-foreground">{order.total}</span>
                                            </div>
                                            <button className="text-sm font-medium hover:underline">View Details</button>
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

export default Orders;
