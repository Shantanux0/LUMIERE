import { Link } from "react-router-dom";
import { Category } from "@/data/products";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link
      to={`/products?category=${category.id}`}
      className="group relative block overflow-hidden rounded-lg aspect-[4/5] hover-lift"
    >
      <div className="absolute inset-0 image-zoom">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div 
        className="absolute inset-0 opacity-60 group-hover:opacity-70 transition-opacity duration-500"
        style={{ background: 'var(--gradient-overlay)' }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <h3 className="font-serif text-2xl md:text-3xl text-background mb-1">
          {category.name}
        </h3>
        <p className="text-background/80 text-sm mb-3">
          {category.description}
        </p>
        <span className="text-background/60 text-xs tracking-wide uppercase">
          {category.productCount} Products
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
