import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CategoryCard from "@/components/products/CategoryCard";
import { categories } from "@/data/products";
import { motion } from "framer-motion";
import heroImage from "@/assets/category-sofas.jpg"; // Using a distinct image for collections

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const Collections = () => {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Cinematic Hero */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Collections Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <motion.span
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="inline-block text-sm tracking-[0.3em] uppercase text-white/80 mb-4"
                    >
                        Curated For You
                    </motion.span>
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="font-serif text-5xl md:text-7xl mb-4"
                    >
                        Our Collections
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.3 }}
                        className="text-lg md:text-xl text-white/90 max-w-lg mx-auto font-light"
                    >
                        Distinctive sets designed to bring harmony and elegance to your sanctuary.
                    </motion.p>
                </div>
            </section>

            <main className="py-20 md:py-32 bg-background">
                <div className="container-luxury">
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
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
            </main>
            <Footer />
        </div>
    );
};

export default Collections;
