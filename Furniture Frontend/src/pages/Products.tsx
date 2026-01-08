import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { products, categories } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { SlidersHorizontal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "@/assets/hero-living-room.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get("category") ? [searchParams.get("category")!] : []
  );
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);

  const materials = ["Linen", "Velvet", "Marble", "Oak", "Brass"];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesMaterial =
        selectedMaterials.length === 0 ||
        selectedMaterials.some((m) =>
          product.material.toLowerCase().includes(m.toLowerCase())
        );
      return matchesCategory && matchesPrice && matchesMaterial;
    });
  }, [selectedCategories, priceRange, selectedMaterials]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((c) => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 10000]);
    setSearchParams({});
  };

  const hasActiveFilters =
    selectedCategories.length > 0 ||
    selectedMaterials.length > 0 ||
    priceRange[0] > 0 ||
    priceRange[1] < 10000;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Cinematic Hero */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Shop Collection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 text-center text-white pt-20">
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="font-serif text-5xl md:text-7xl mb-4"
            >
              Shop Collection
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 max-w-lg mx-auto font-light"
            >
              Curated designs for the modern sanctuary.
            </motion.p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container-luxury">
            {/* Filter Bar */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-4">
                <Button
                  variant="minimal"
                  className="gap-2"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  Filters
                </Button>
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-muted-foreground"
                  >
                    Clear all
                  </Button>
                )}
              </div>
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length} products
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              {/* Filters Sidebar */}
              <aside
                className={`lg:w-64 flex-shrink-0 ${isFilterOpen ? "block" : "hidden lg:block"
                  }`}
              >
                <div className="space-y-8">
                  {/* Categories */}
                  <div>
                    <h3 className="font-serif text-lg mb-4">Category</h3>
                    <div className="space-y-3">
                      {categories.map((category) => (
                        <label
                          key={category.id}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <Checkbox
                            checked={selectedCategories.includes(category.id)}
                            onCheckedChange={() => toggleCategory(category.id)}
                          />
                          <span className="text-sm">{category.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="font-serif text-lg mb-4">Price Range</h3>
                    <Slider
                      value={priceRange}
                      min={0}
                      max={10000}
                      step={100}
                      onValueChange={setPriceRange}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>${priceRange[0].toLocaleString()}</span>
                      <span>${priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Materials */}
                  <div>
                    <h3 className="font-serif text-lg mb-4">Material</h3>
                    <div className="space-y-3">
                      {materials.map((material) => (
                        <label
                          key={material}
                          className="flex items-center gap-3 cursor-pointer"
                        >
                          <Checkbox
                            checked={selectedMaterials.includes(material)}
                            onCheckedChange={() => toggleMaterial(material)}
                          />
                          <span className="text-sm">{material}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Close Button */}
                <Button
                  variant="minimal"
                  className="w-full mt-8 lg:hidden"
                  onClick={() => setIsFilterOpen(false)}
                >
                  Apply Filters
                </Button>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                {filteredProducts.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                    <AnimatePresence>
                      {filteredProducts.map((product, index) => (
                        <motion.div
                          key={product.id}
                          layout
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true, margin: "-50px" }}
                          variants={fadeInUp}
                          transition={{ delay: index * 0.05 }}
                        >
                          <ProductCard product={product} />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <p className="text-muted-foreground mb-4">
                      No products match your filters.
                    </p>
                    <Button variant="minimal" onClick={clearFilters}>
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
