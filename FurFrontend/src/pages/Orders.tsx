import { useEffect, useState } from "react";
import api from "@/lib/api";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useAuthStore } from "@/store/authStore";
import { ArrowLeft, Package } from "lucide-react";

const Orders = () => {
    const { user, isAuthenticated } = useAuthStore();
    const navigate = useNavigate();
    const [orders, setOrders] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
            return;
        }

        const fetchOrders = async () => {
            if (!user) return;
            try {
                const response = await api.get(`/orders/user/${user.id}`);
                setOrders(response.data);
            } catch (error) {
                console.error("Failed to fetch orders:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchOrders();
    }, [isAuthenticated, navigate, user]);

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
                                                <h3 className="font-serif text-xl mb-1">#{order.orderNumber.substring(0, 8).toUpperCase()}</h3>
                                                <p className="text-sm text-muted-foreground">{new Date(order.orderDate).toLocaleDateString()}</p>
                                            </div>
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${order.status === 'Delivered' || order.status === 'COMPLETED'
                                                ? 'bg-green-100 text-green-800'
                                                : order.status === 'CANCELLED' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between pt-4 border-t border-border">
                                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                                <span className="flex items-center gap-2">
                                                    <Package className="w-4 h-4" />
                                                    {order.orderItems?.length || 0} items
                                                </span>
                                                <span className="font-medium text-foreground">${order.totalAmount}</span>
                                            </div>
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
