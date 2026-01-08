import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="font-serif text-9xl md:text-[12rem] font-light text-muted-foreground/20">
            404
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="heading-section mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-luxury mb-12 max-w-md mx-auto"
        >
          The page you're looking for seems to have wandered off.
          Perhaps it's been rearranged, like furniture in a well-designed space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/">
            <Button size="lg" className="gap-2">
              <Home className="w-4 h-4" />
              Return Home
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="outline" size="lg" className="gap-2">
              <Search className="w-4 h-4" />
              Browse Collection
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <p className="text-sm text-muted-foreground">
            Need assistance? <Link to="/contact" className="text-foreground underline hover:no-underline">Contact us</Link>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
