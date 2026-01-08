import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImage from "@/assets/hero-living-room.jpg";
import detailImage from "@/assets/product-chair-1.jpg";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeOut" }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const About = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section with Parallax */}
            <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <motion.div
                    className="absolute inset-0"
                    style={{ y: heroY }}
                >
                    <img
                        src={heroImage}
                        alt="About LUMIÈRE"
                        className="w-full h-full object-cover"
                    />
                    <motion.div
                        className="absolute inset-0 bg-black/50"
                        style={{ opacity: heroOpacity }}
                    />
                </motion.div>
                <motion.div
                    className="relative z-10 text-center text-white max-w-4xl px-6"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="inline-block text-sm tracking-[0.3em] uppercase text-white/80 mb-6"
                    >
                        Since 1985
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="font-serif text-5xl md:text-7xl mb-8 leading-tight"
                    >
                        Crafting the <br /><span className="italic font-light">Art of Living</span>
                    </motion.h1>
                </motion.div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 md:py-32 bg-background">
                <div className="container-luxury">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={scaleIn}
                            className="order-2 md:order-1"
                        >
                            <div className="aspect-[4/5] bg-secondary rounded-sm overflow-hidden relative group">
                                <motion.img
                                    src={detailImage}
                                    alt="Detail craftsmanship"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.6 }}
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="order-1 md:order-2"
                        >
                            <motion.h2 variants={fadeInUp} className="heading-section mb-6">Our Philosophy</motion.h2>
                            <motion.p variants={fadeInUp} className="text-lg text-luxury mb-6 leading-relaxed">
                                Founded on the principles of timeless design and exceptional craftsmanship,
                                LUMIÈRE is more than a furniture brand—it is a celebration of the art of living.
                            </motion.p>
                            <motion.p variants={fadeInUp} className="text-luxury leading-relaxed mb-8">
                                We believe that the objects we surround ourselves with should bring joy,
                                comfort, and inspiration to our daily lives. Every curve, every joint,
                                and every texture is obsessed over to ensure perfection.
                            </motion.p>
                            <motion.div variants={fadeInUp} className="h-px w-24 bg-foreground/20" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 md:py-32 bg-secondary/30">
                <div className="container-luxury text-center max-w-3xl">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.span
                            variants={fadeInUp}
                            className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-4 block"
                        >
                            Our Commitment
                        </motion.span>
                        <motion.h2 variants={fadeInUp} className="heading-section mb-8">Sustainability & Quality</motion.h2>
                        <motion.p variants={fadeInUp} className="text-luxury text-lg leading-relaxed">
                            We partner with master artisans who use sustainably sourced hardwoods
                            and premium textiles. Our commitment to the planet is as strong as
                            our commitment to design, ensuring that your furniture is not just
                            beautiful for today, but for generations to come.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 md:py-32 bg-background">
                <div className="container-luxury">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        <motion.h2
                            variants={fadeInUp}
                            className="heading-section mb-4"
                        >
                            The Process
                        </motion.h2>
                        <motion.p
                            variants={fadeInUp}
                            className="text-luxury max-w-xl mx-auto"
                        >
                            From sketch to showroom, every step is a labor of love.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-12 text-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {[
                            { title: "Design", desc: "Conceptualized in our Paris studio, focusing on form and function." },
                            { title: "Material", desc: "Sourcing only the finest sustainable woods, leathers, and fabrics." },
                            { title: "Craft", desc: "Hand-finished by master artisans with decades of experience." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -8 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <motion.div
                                    className="w-16 h-16 rounded-full bg-secondary mx-auto flex items-center justify-center text-xl font-serif"
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {index + 1}
                                </motion.div>
                                <h3 className="font-serif text-2xl">{item.title}</h3>
                                <p className="text-muted-foreground">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stats Section with Counter Animation */}
            <section className="py-20 bg-foreground text-background">
                <div className="container-luxury">
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                    >
                        {[
                            { value: "35+", label: "Years of Heritage" },
                            { value: "12", label: "Design Awards" },
                            { value: "500+", label: "Master Artisans" },
                            { value: "5k+", label: "Sanctuaries Created" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="p-4"
                            >
                                <motion.div
                                    className="font-serif text-4xl md:text-5xl mb-2"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    {stat.value}
                                </motion.div>
                                <div className="text-sm tracking-widest uppercase text-white/60">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
