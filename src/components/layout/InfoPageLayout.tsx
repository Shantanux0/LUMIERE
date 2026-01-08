import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

interface InfoPageLayoutProps {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}

const InfoPageLayout = ({ title, subtitle, children }: InfoPageLayoutProps) => {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="pt-20">
                <section className="py-20 md:py-32 bg-secondary/30">
                    <div className="container-luxury text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="heading-display mb-4"
                        >
                            {title}
                        </motion.h1>
                        {subtitle && (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-luxury max-w-xl mx-auto"
                            >
                                {subtitle}
                            </motion.p>
                        )}
                    </div>
                </section>

                <section className="py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="container-luxury max-w-4xl"
                    >
                        {children}
                    </motion.div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default InfoPageLayout;
