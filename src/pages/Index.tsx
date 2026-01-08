
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";
import CategoryCard from "@/components/products/CategoryCard";
import { categories, featuredProducts } from "@/data/products";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Luxury living room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-luxury relative z-10 pt-20">
          <div className="max-w-2xl text-white">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="inline-block text-sm tracking-[0.3em] uppercase text-white/90 mb-6"
            >
              New Collection 2026
            </motion.span>
            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="heading-display text-white mb-6"
            >
              Design Your <br />
              <em className="font-normal">Sanctuary</em>
            </motion.h1>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/90 leading-relaxed mb-8 max-w-lg"
            >
              Discover furniture that transforms spaces into havens.
              Timeless craftsmanship meets contemporary elegance.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/collections">
                <Button variant="hero" size="xl">
                  Explore Collection
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="minimal" size="xl" className="text-white hover:text-white/80 border-white/40 hover:bg-white/10">
                  Shop Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/80">Scroll</span>
          <div className="h-12 w-[1px] bg-white/20 overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="h-1/2 w-full bg-white/60"
            />
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="cinematic-section bg-background">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="heading-section mb-4">Shop by Category</h2>
              <p className="text-luxury max-w-xl mx-auto">
                Explore our curated collections, designed to bring harmony to every room in your home.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={fadeInUp}
              >
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="cinematic-section beige-gradient">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="heading-section mb-4">Featured Pieces</h2>
              <p className="text-luxury max-w-lg">
                Handpicked selections from our latest collection,
                each piece a testament to exceptional design.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <Link to="/products" className="mt-6 md:mt-0 block">
                <Button variant="minimal" className="gap-2">
                  View All <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProducts.slice(0, 6).map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="cinematic-section bg-background">
        <div className="container-luxury">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <motion.span variants={fadeInUp} className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 block">
                  Our Philosophy
                </motion.span>
                <motion.h2 variants={fadeInUp} className="heading-section mb-6">
                  Crafted for <br />Generations
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-luxury mb-6">
                  Every piece in our collection tells a story of meticulous craftsmanship.
                  We partner with master artisans who share our commitment to quality,
                  using sustainably sourced materials and time-honored techniques.
                </motion.p>
                <motion.p variants={fadeInUp} className="text-luxury mb-8">
                  The result is furniture that doesn't just furnish a home—it becomes
                  part of its heritage, growing more beautiful with each passing year.
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Button variant="minimal" className="gap-2">
                    Discover Our Story <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            <div className="order-1 md:order-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="aspect-[4/5] rounded-lg overflow-hidden bg-secondary"
              >
                <img
                  src={heroImage}
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 md:py-32 bg-foreground text-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="container-luxury text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Join the LUMIÈRE Community
          </h2>
          <p className="text-background/70 mb-8 max-w-lg mx-auto">
            Be the first to discover new collections, exclusive offers,
            and interior inspiration delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-background/10 border border-background/20 rounded-md text-background placeholder:text-background/50 focus:outline-none focus:border-background/40 transition-colors"
            />
            <Button
              type="submit"
              className="bg-background text-foreground hover:bg-background/90 px-8 py-4 h-auto"
            >
              Subscribe
            </Button>
          </form>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
