import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";
import { useAuthStore } from "@/store/authStore";
import { useToast } from "@/hooks/use-toast";

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

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { login, register } = useAuthStore();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        await register(email, password, firstName, lastName);
        toast({
          title: "Account created!",
          description: "Welcome to LUMIÈRE. Your account has been created successfully.",
        });
      } else {
        await login(email, password);
        toast({
          title: "Welcome back!",
          description: "You have successfully signed in.",
        });
      }
      navigate("/profile");
    } catch (error: any) {
      console.error("Authentication Error:", error);
      const errorMessage = error.response?.data?.message || error.response?.data?.error || error.message || "An error occurred during authentication.";
      toast({
        variant: "destructive",
        title: "Authentication failed",
        description: errorMessage,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
      <motion.div
        className="flex-1 flex items-center justify-center p-8 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-full max-w-md">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp} className="font-serif text-4xl md:text-5xl mb-3 tracking-tight">
              {isSignUp ? "Join" : "Welcome"} <br />
              <span className="italic font-light">{isSignUp ? "LUMIÈRE" : "Back"}</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-luxury mb-10">
              {isSignUp
                ? "Create an account to unlock exclusive benefits and a personalized experience."
                : "Sign in to continue your journey with timeless design."}
            </motion.p>

            <motion.form variants={fadeInUp} className="space-y-6" onSubmit={handleSubmit}>
              {isSignUp && (
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="mt-2 bg-secondary/30 border-border/50 focus:border-foreground transition-colors"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="mt-2 bg-secondary/30 border-border/50 focus:border-foreground transition-colors"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 bg-secondary/30 border-border/50 focus:border-foreground transition-colors"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-sm font-medium">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-2 bg-secondary/30 border-border/50 focus:border-foreground transition-colors"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {!isSignUp && (
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full bg-foreground text-background hover:bg-foreground/90 transition-all"
              >
                {isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </motion.form>

            <motion.p variants={fadeInUp} className="text-center mt-8 text-sm text-muted-foreground">
              {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-foreground font-medium hover:underline"
              >
                {isSignUp ? "Sign In" : "Create Account"}
              </button>
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side - Hero Image */}
      <div className="hidden lg:block flex-1 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <img
            src={heroImage}
            alt="Luxury interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>

        <motion.div
          className="relative h-full flex items-center justify-center p-12 z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center max-w-md text-white">
            <h2 className="font-serif text-5xl mb-6 leading-tight">
              Experience <br />
              <em className="font-light">Refined Living</em>
            </h2>
            <p className="text-white/80 leading-relaxed text-lg">
              Save your favorites, track orders, and receive personalized recommendations curated just for you.
            </p>
            <div className="mt-8 flex items-center justify-center gap-2">
              <div className="w-12 h-px bg-white/40" />
              <span className="text-xs tracking-[0.3em] uppercase text-white/60">LUMIÈRE</span>
              <div className="w-12 h-px bg-white/40" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
