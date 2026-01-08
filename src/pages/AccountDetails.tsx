import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/authStore";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AccountDetails = () => {
    const { user, isAuthenticated, updateProfile } = useAuthStore();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        } else if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
        }
    }, [isAuthenticated, navigate, user]);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        updateProfile({ firstName, lastName, email });
        toast({
            title: "Account updated!",
            description: "Your account details have been saved.",
        });
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />
            <main className="pt-20">
                <section className="py-20">
                    <div className="container-luxury max-w-3xl">
                        <Link to="/profile" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Profile
                        </Link>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h1 className="heading-section mb-2">Account Details</h1>
                            <p className="text-luxury mb-12">Manage your personal information</p>

                            <form onSubmit={handleSave} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input
                                            id="firstName"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="mt-2"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input
                                            id="lastName"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="mt-2"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="mt-2"
                                        required
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        placeholder="+1 (555) 000-0000"
                                        className="mt-2"
                                    />
                                </div>

                                <div className="pt-6">
                                    <Button type="submit" size="lg">Save Changes</Button>
                                </div>
                            </form>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default AccountDetails;
