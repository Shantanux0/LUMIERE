import { useState, useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/authStore";
import { useToast } from "@/hooks/use-toast";
import { User, Package, Heart, MapPin, CreditCard, LogOut, Camera, Edit2, Check, X } from "lucide-react";
import profileBg from "@/assets/profile.jpg";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const Profile = () => {
    const { user, isAuthenticated, logout, updateProfile } = useAuthStore();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        } else if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
        }
    }, [isAuthenticated, navigate, user]);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleSave = () => {
        updateProfile({ firstName, lastName, email });
        setIsEditing(false);
        toast({
            title: "Profile updated!",
            description: "Your changes have been saved.",
        });
    };

    const handleCancel = () => {
        if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
        }
        setIsEditing(false);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updateProfile({ profileImage: reader.result as string });
                toast({
                    title: "Profile picture updated!",
                    description: "Your new profile picture has been set.",
                });
            };
            reader.readAsDataURL(file);
        }
    };

    if (!user) return null;

    const menuItems = [
        { icon: User, label: "Account Details", description: "Manage your personal information", href: "/profile/account" },
        { icon: Package, label: "Orders", description: "Track and manage your orders", href: "/profile/orders" },
        { icon: Heart, label: "Wishlist", description: "View your saved items", href: "/profile/wishlist" },
        { icon: MapPin, label: "Addresses", description: "Manage shipping addresses", href: "/profile/addresses" },
        { icon: CreditCard, label: "Payment Methods", description: "Manage payment information", href: "/profile/payment" },
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <main className="pt-20">
                {/* Hero Section with Background */}
                <section className="relative py-20 md:py-32 overflow-hidden">
                    <div className="absolute inset-0">
                        <img src={profileBg} alt="Profile background" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/60" />
                    </div>

                    <motion.div
                        className="container-luxury text-center relative z-10"
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="relative inline-block mb-6">
                            {user.profileImage ? (
                                <img
                                    src={user.profileImage}
                                    alt="Profile"
                                    className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
                                />
                            ) : (
                                <div className="w-32 h-32 rounded-full bg-white text-foreground flex items-center justify-center text-4xl font-serif border-4 border-white/20">
                                    {user.firstName.charAt(0)}{user.lastName.charAt(0)}
                                </div>
                            )}
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/90 transition-colors"
                            >
                                <Camera className="w-5 h-5" />
                            </button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                        </motion.div>

                        {!isEditing ? (
                            <>
                                <motion.h1 variants={fadeInUp} className="heading-display mb-4 text-white">
                                    {user.firstName} {user.lastName}
                                </motion.h1>
                                <motion.p variants={fadeInUp} className="text-white/80 text-lg mb-6">
                                    {user.email}
                                </motion.p>
                                <motion.div variants={fadeInUp}>
                                    <Button
                                        onClick={() => setIsEditing(true)}
                                        variant="outline"
                                        className="gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                        Edit Profile
                                    </Button>
                                </motion.div>
                            </>
                        ) : (
                            <motion.div
                                variants={fadeInUp}
                                className="max-w-md mx-auto bg-white/10 backdrop-blur-md p-8 rounded-lg border border-white/20"
                            >
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <Label htmlFor="firstName" className="text-white text-sm">First Name</Label>
                                        <Input
                                            id="firstName"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            className="mt-2 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="lastName" className="text-white text-sm">Last Name</Label>
                                        <Input
                                            id="lastName"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            className="mt-2 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                                        />
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <Label htmlFor="email" className="text-white text-sm">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="mt-2 bg-white/20 border-white/30 text-white placeholder:text-white/50"
                                    />
                                </div>
                                <div className="flex gap-3">
                                    <Button onClick={handleSave} className="flex-1 gap-2 bg-white text-foreground hover:bg-white/90">
                                        <Check className="w-4 h-4" />
                                        Save
                                    </Button>
                                    <Button onClick={handleCancel} variant="outline" className="flex-1 gap-2 bg-white/10 border-white/20 text-white hover:bg-white/20">
                                        <X className="w-4 h-4" />
                                        Cancel
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </motion.div>
                </section>

                {/* Menu Section */}
                <section className="py-20 bg-background">
                    <div className="container-luxury max-w-4xl">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={staggerContainer}
                            className="grid gap-4"
                        >
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={fadeInUp}
                                    whileHover={{ x: 8 }}
                                >
                                    <Link
                                        to={item.href}
                                        className="flex items-start gap-6 p-6 border border-border rounded-lg hover:border-foreground transition-all text-left group block"
                                    >
                                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-foreground group-hover:text-background transition-colors">
                                            <item.icon className="w-5 h-5" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-serif text-xl mb-1">{item.label}</h3>
                                            <p className="text-sm text-muted-foreground">{item.description}</p>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-12 pt-8 border-t border-border text-center"
                        >
                            <Button
                                variant="outline"
                                onClick={handleLogout}
                                className="gap-2"
                            >
                                <LogOut className="w-4 h-4" />
                                Sign Out
                            </Button>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Profile;
