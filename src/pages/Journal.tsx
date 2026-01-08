import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/product-sofa-2.jpg";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const Journal = () => {
    const articles = [
        {
            id: 1,
            title: "The Art of Minimalist Living",
            excerpt: "How to create a serene environment by decluttering and choosing meaningful pieces.",
            date: "October 12, 2023",
            category: "Interior Design",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            title: "Sustainable Materials in Modern Furniture",
            excerpt: "Exploring the eco-friendly choices that define our latest collection.",
            date: "September 28, 2023",
            category: "Sustainability",
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            title: "Choosing the Perfect Sofa",
            excerpt: "A comprehensive guide to finding a centerpiece that balances style and comfort.",
            date: "September 15, 2023",
            category: "Guides",
            image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Editorial Hero */}
            <section className="relative h-[50vh] flex items-end pb-20 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={heroImage}
                        alt="Journal Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="container-luxury relative z-10 text-white">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="font-serif text-6xl md:text-8xl mb-6"
                    >
                        The Journal
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/90 max-w-xl font-light"
                    >
                        Stories, guides, and inspiration for the modern sanctuary.
                    </motion.p>
                </div>
            </section>

            <main className="py-20 md:py-32 bg-background">
                <div className="container-luxury">
                    <div className="grid grid-cols-1 gap-16">
                        {articles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                transition={{ delay: index * 0.1 }}
                                className="group grid md:grid-cols-2 gap-8 items-center cursor-pointer border-b border-border pb-16 last:border-0"
                            >
                                <div className={`aspect-[3/2] overflow-hidden bg-secondary ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                                    {/* Using Unsplash images for Journal variety */}
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className={`space-y-6 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                                    <div className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-muted-foreground">
                                        <span>{article.category}</span>
                                        <span className="w-1 h-1 rounded-full bg-border" />
                                        <span>{article.date}</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-serif font-medium group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h2>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        {article.excerpt}
                                    </p>
                                    <Button variant="link" className="p-0 h-auto text-foreground font-medium group-hover:text-primary transition-colors uppercase tracking-widest text-xs">
                                        Read Story
                                    </Button>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Journal;
