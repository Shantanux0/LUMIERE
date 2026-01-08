// Product data for the furniture store
import productSofa1 from "@/assets/product-sofa-1.jpg";
import productSofa2 from "@/assets/product-sofa-2.jpg";
import productChair1 from "@/assets/product-chair-1.jpg";
import productTable1 from "@/assets/product-table-1.jpg";
import productTable2 from "@/assets/product-table-2.jpg";
import productBed1 from "@/assets/product-bed-1.jpg";
import categorySofas from "@/assets/category-sofas.jpg";
import categoryChairs from "@/assets/category-chairs.jpg";
import categoryTables from "@/assets/category-tables.jpg";
import categoryBeds from "@/assets/category-beds.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  material: string;
  dimensions: string;
  colors: string[];
  inStock: boolean;
  featured?: boolean;
  new?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: "sofas",
    name: "Sofas",
    description: "Luxurious comfort for your living space",
    image: categorySofas,
    productCount: 24,
  },
  {
    id: "chairs",
    name: "Chairs",
    description: "Elegant seating for every room",
    image: categoryChairs,
    productCount: 36,
  },
  {
    id: "tables",
    name: "Tables",
    description: "Refined surfaces for daily rituals",
    image: categoryTables,
    productCount: 18,
  },
  {
    id: "beds",
    name: "Beds",
    description: "Sanctuary for restful nights",
    image: categoryBeds,
    productCount: 12,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Aria Curved Sofa",
    category: "sofas",
    price: 4890,
    image: productSofa1,
    images: [productSofa1],
    description: "A sculptural masterpiece featuring a gentle curve that invites conversation and relaxation. Handcrafted with precision and upholstered in premium European linen.",
    material: "European Linen, Solid Oak Frame",
    dimensions: "W 280cm × D 95cm × H 82cm",
    colors: ["Cream", "Taupe", "Sage"],
    inStock: true,
    featured: true,
    new: true,
  },
  {
    id: "2",
    name: "Haven Sectional",
    category: "sofas",
    price: 6490,
    originalPrice: 7200,
    image: productSofa2,
    images: [productSofa2],
    description: "An expansive L-shaped sectional designed for generous gatherings. Deep seats and cloud-like cushions create the ultimate lounging experience.",
    material: "Performance Linen, Kiln-Dried Hardwood",
    dimensions: "W 320cm × D 260cm × H 85cm",
    colors: ["Light Grey", "Ivory", "Charcoal"],
    inStock: true,
    featured: true,
  },
  {
    id: "3",
    name: "Velvet Accent Chair",
    category: "chairs",
    price: 1290,
    image: productChair1,
    images: [productChair1],
    description: "A statement piece that balances mid-century elegance with contemporary comfort. Polished brass legs add a touch of glamour.",
    material: "Italian Velvet, Brass Legs",
    dimensions: "W 75cm × D 78cm × H 82cm",
    colors: ["Blush", "Sage", "Midnight"],
    inStock: true,
    featured: true,
    new: true,
  },
  {
    id: "4",
    name: "Carrara Coffee Table",
    category: "tables",
    price: 2190,
    image: productTable1,
    images: [productTable1],
    description: "A statement centerpiece featuring a genuine Carrara marble top on a sculptural brass base. Each piece is unique due to natural marble variations.",
    material: "Carrara Marble, Brushed Brass",
    dimensions: "Ø 100cm × H 38cm",
    colors: ["White Marble"],
    inStock: true,
    featured: true,
  },
  {
    id: "5",
    name: "Oslo Platform Bed",
    category: "beds",
    price: 3890,
    image: productBed1,
    images: [productBed1],
    description: "Scandinavian craftsmanship meets modern luxury. The floating platform design creates an airy aesthetic while the tufted headboard provides comfortable support.",
    material: "Solid Oak, Belgian Linen",
    dimensions: "W 180cm × L 210cm × H 110cm (King)",
    colors: ["Natural Oak", "Walnut"],
    inStock: true,
    featured: true,
  },
  {
    id: "6",
    name: "Artisan Console Table",
    category: "tables",
    price: 1590,
    image: productTable2,
    images: [productTable2],
    description: "A refined entryway piece crafted from sustainable oak. Clean lines and subtle curves showcase the beauty of natural wood grain.",
    material: "Solid Oak",
    dimensions: "W 140cm × D 40cm × H 85cm",
    colors: ["Natural", "Smoked Oak"],
    inStock: true,
    new: true,
  },
];

export const featuredProducts = products.filter(p => p.featured);
export const newProducts = products.filter(p => p.new);
