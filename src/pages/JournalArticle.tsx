import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

const JournalArticle = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const articles = {
        "1": {
            title: "The Art of Minimalist Living",
            category: "Interior Design",
            date: "October 12, 2023",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200",
            content: `
        <p>In a world filled with constant noise and distraction, minimalist living offers a path to tranquility and intentional design. It's not about having less—it's about making room for more of what truly matters.</p>
        
        <h2>The Philosophy Behind Minimalism</h2>
        <p>Minimalist design emerged as a reaction to the ornate, maximalist styles that dominated the early 20th century. At its core, minimalism celebrates the beauty of simplicity, focusing on essential elements while eliminating excess.</p>
        
        <p>When applied to living spaces, minimalism creates environments that feel open, calm, and purposeful. Each piece of furniture, each decoration, serves a function or brings genuine joy to its owner.</p>
        
        <h2>Creating Your Minimalist Space</h2>
        <p>Start by curating rather than accumulating. Choose furniture with clean lines and neutral tones. Opt for pieces that serve multiple purposes—a beautiful storage chest that doubles as seating, or a dining table that can transform into a workspace.</p>
        
        <p>Natural materials like wood, linen, and stone bring warmth to minimalist spaces without adding visual clutter. These textures create depth and interest while maintaining the serene aesthetic.</p>
        
        <h2>The Benefits of Less</h2>
        <p>A minimalist home is easier to clean and maintain. With fewer possessions vying for attention, your mind can rest. The space becomes a sanctuary—a place where you can truly relax and recharge.</p>
        
        <p>Moreover, choosing quality over quantity means investing in pieces that will last for years, even decades. This approach is not only more sustainable but also more economical in the long run.</p>
      `
        },
        "2": {
            title: "Sustainable Materials in Modern Furniture",
            category: "Sustainability",
            date: "September 28, 2023",
            image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200",
            content: `
        <p>The furniture industry is experiencing a transformation. As awareness of environmental issues grows, designers and manufacturers are reimagining how furniture is made, focusing on sustainability without compromising on style or quality.</p>
        
        <h2>Reclaimed and Recycled Materials</h2>
        <p>One of the most exciting trends in sustainable furniture is the use of reclaimed wood. Salvaged from old barns, factories, and warehouses, this wood carries history in its grain while reducing the demand for newly harvested timber.</p>
        
        <p>Recycled metals and plastics are also finding new life in furniture design. Advanced processing techniques can transform waste materials into durable, beautiful components for tables, chairs, and storage solutions.</p>
        
        <h2>Responsibly Sourced Natural Materials</h2>
        <p>When new materials are necessary, certifications like FSC (Forest Stewardship Council) ensure that wood comes from responsibly managed forests. Bamboo, which grows rapidly and requires minimal resources, has become a popular alternative to traditional hardwoods.</p>
        
        <p>Natural fibers like organic cotton, hemp, and jute offer sustainable options for upholstery and textiles. These materials are biodegradable and often require fewer chemicals in their production.</p>
        
        <h2>The LUMIÈRE Commitment</h2>
        <p>At LUMIÈRE, we partner with artisans who share our commitment to sustainability. Every piece in our collection uses materials chosen for their environmental credentials as well as their beauty and durability.</p>
        
        <p>This approach ensures that when you invest in LUMIÈRE furniture, you're not just furnishing your home—you're supporting a more sustainable future.</p>
      `
        },
        "3": {
            title: "Choosing the Perfect Sofa",
            category: "Guides",
            date: "September 15, 2023",
            image: "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?auto=format&fit=crop&q=80&w=1200",
            content: `
        <p>A sofa is more than furniture—it's the heart of your living space. It's where you'll spend countless hours relaxing, entertaining, and making memories. Choosing the right one requires balancing aesthetics, comfort, and practicality.</p>
        
        <h2>Size and Scale</h2>
        <p>Before falling in love with a design, measure your space carefully. Consider not just the sofa's dimensions, but also the flow of the room. Leave enough space for comfortable movement and ensure the sofa is proportionate to the room size.</p>
        
        <p>In smaller spaces, a loveseat or apartment-sized sofa might be more appropriate. Larger rooms can accommodate sectionals or traditional three-seaters without feeling cramped.</p>
        
        <h2>Frame and Construction</h2>
        <p>The foundation of a quality sofa lies in its frame. Hardwood frames, particularly kiln-dried hardwood, offer superior durability and stability. Avoid sofas with frames made from particleboard or soft woods—they won't stand the test of time.</p>
        
        <p>Check the joinery. Corners should be reinforced with blocks, and joints should be doweled, screwed, and glued rather than simply stapled.</p>
        
        <h2>Cushions and Comfort</h2>
        <p>Cushion construction significantly affects both comfort and longevity. High-density foam wrapped in down or polyester fiber offers the perfect balance—firm support with a soft surface layer.</p>
        
        <p>Consider your lifestyle when choosing upholstery. If you have children or pets, performance fabrics that resist stains and wear might be worth the investment. For a more luxurious feel, natural fabrics like linen or velvet create beautiful, tactile surfaces.</p>
        
        <h2>Style that Endures</h2>
        <p>Trends come and go, but classic designs remain beautiful for decades. Look for pieces with timeless silhouettes and neutral tones that you can update with throw pillows and accessories as your style evolves.</p>
        
        <p>Remember: a sofa is a significant investment. Choose one that you'll love not just today, but for years to come.</p>
      `
        }
    };

    const article = articles[id as keyof typeof articles];

    if (!article) {
        navigate("/404");
        return null;
    }

    return (
        <div className="min-h-screen bg-background">
            <Header />

            <article className="pt-20">
                {/* Hero Image */}
                <div className="relative h-[60vh] overflow-hidden">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Article Content */}
                <div className="container-luxury max-w-3xl py-20">
                    <Link to="/journal" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Journal
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
                            <span className="flex items-center gap-2">
                                <Tag className="w-3 h-3" />
                                {article.category}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-border" />
                            <span className="flex items-center gap-2">
                                <Calendar className="w-3 h-3" />
                                {article.date}
                            </span>
                        </div>

                        <h1 className="heading-display mb-12">{article.title}</h1>

                        <div
                            className="prose prose-lg max-w-none"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                            style={{
                                fontSize: '1.125rem',
                                lineHeight: '1.75',
                                color: 'hsl(var(--muted-foreground))'
                            }}
                        />

                        <div className="mt-16 pt-8 border-t border-border">
                            <Link to="/journal">
                                <Button variant="outline" className="gap-2">
                                    <ArrowLeft className="w-4 h-4" />
                                    More Stories
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default JournalArticle;
