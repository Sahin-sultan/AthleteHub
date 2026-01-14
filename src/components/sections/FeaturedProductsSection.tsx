import { motion } from 'framer-motion';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ProductCard';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const FeaturedProductsSection = () => {
  const featuredProducts = products.filter(p => p.isFeatured).slice(0, 4);
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-[#12151a] via-[#0f1115] to-[#12151a] relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '9s' }} />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="container-custom relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent text-sm font-bold mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            PREMIUM SELECTION
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl editorial-heading text-foreground mb-6 bg-gradient-to-r from-foreground via-accent to-foreground bg-clip-text">
            Featured Gear
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground body-text max-w-2xl mx-auto mb-8">
            Hand-picked favorites loved by athletes worldwide. Premium quality, 
            tested performance, trusted results.
          </p>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button 
            size="lg" 
            className="btn-secondary group h-12 md:h-14 px-8 md:px-12 text-base shadow-xl hover:shadow-2xl"
            onClick={handleViewAll}
          >
            View All Products
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
