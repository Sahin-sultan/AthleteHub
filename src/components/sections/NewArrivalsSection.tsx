import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';

export const NewArrivalsSection = () => {
  const newProducts = products.filter(p => p.isNew).slice(0, 4);

  return (
    <section className="py-20 bg-gradient-to-b from-[#12151a] to-[#0f1115] relative overflow-hidden">
      {/* Highlighted Background Strip with Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5" />
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      {/* Subtle Texture */}
      <div className="absolute inset-0 bg-noise opacity-30" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-secondary/10 rounded-full text-secondary text-sm font-medium mb-4 animate-pulse-glow">
            Just Landed
          </span>
          <h2 className="section-heading">New Arrivals</h2>
          <p className="section-subheading mx-auto">
            The latest gear fresh off the production line. Be the first to own it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
