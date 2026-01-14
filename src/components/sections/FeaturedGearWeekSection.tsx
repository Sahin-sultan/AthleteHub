import { motion } from 'framer-motion';
import { Star, ShoppingCart, TrendingUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

export const FeaturedGearWeekSection = () => {
  const { addToCart } = useCart();
  
  // Get the first featured product as the gear of the week
  const gearOfWeek = products.find(p => p.isFeatured) || products[0];

  const handleAddToCart = () => {
    addToCart(gearOfWeek);
    toast.success(`${gearOfWeek.name} added to cart!`);
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-[#0f1115] to-[#12151a] relative overflow-hidden">
      {/* Animated Border Top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary via-accent to-secondary animate-pulse-glow" />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      
      <div className="container-custom relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-gradient-to-r from-secondary to-accent rounded-full text-white text-xs md:text-sm font-bold mb-4 shadow-lg"
          >
            <Zap className="h-3 w-3 md:h-4 md:w-4 animate-pulse" />
            <span className="whitespace-nowrap">FEATURED GEAR OF THE WEEK</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl editorial-heading text-foreground mb-3 md:mb-4">
            This Week's Top Pick
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mx-auto max-w-2xl px-4">
            Handpicked by professional athletes. Limited stock available.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl md:rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-card rounded-2xl md:rounded-3xl p-4 md:p-8 shadow-2xl hover-lift">
              <div className="absolute top-2 md:top-4 right-2 md:right-4 flex flex-col gap-2">
                <span className="px-2 md:px-3 py-1 bg-secondary text-white text-xs font-bold rounded-full">
                  TRENDING
                </span>
                <span className="px-2 md:px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                  -25% OFF
                </span>
              </div>
              <img
                src={gearOfWeek.image}
                alt={gearOfWeek.name}
                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right - Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl md:rounded-3xl p-6 md:p-10"
          >
            <div className="flex items-center gap-2 text-accent text-xs md:text-sm font-semibold uppercase tracking-wide mb-3">
              <TrendingUp className="h-3 w-3 md:h-4 md:w-4" />
              {gearOfWeek.sport}
            </div>
            
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {gearOfWeek.name}
            </h3>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-4 w-4 md:h-5 md:w-5 ${
                      star <= Math.floor(gearOfWeek.rating)
                        ? 'fill-amber-400 text-amber-400'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-base md:text-lg font-semibold">{gearOfWeek.rating}</span>
              <span className="text-sm md:text-base text-muted-foreground">({gearOfWeek.reviews} reviews)</span>
            </div>

            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Premium quality sports equipment designed for peak performance. 
              Trusted by professional athletes and weekend warriors alike.
            </p>

            <div className="flex flex-wrap items-baseline gap-3 md:gap-4 mb-6 md:mb-8">
              <span className="text-3xl md:text-4xl font-bold text-foreground">
                ${gearOfWeek.price.toFixed(2)}
              </span>
              {gearOfWeek.originalPrice && (
                <span className="text-xl md:text-2xl text-muted-foreground line-through">
                  ${gearOfWeek.originalPrice.toFixed(2)}
                </span>
              )}
              {gearOfWeek.originalPrice && (
                <span className="px-2 md:px-3 py-1 bg-accent/20 text-accent text-xs md:text-sm font-bold rounded-full">
                  SAVE ${(gearOfWeek.originalPrice - gearOfWeek.price).toFixed(2)}
                </span>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Button
                size="lg"
                onClick={handleAddToCart}
                className="btn-secondary h-12 md:h-14 px-6 md:px-8 text-sm md:text-base group flex-1 shadow-xl hover:shadow-2xl"
              >
                <ShoppingCart className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
                Add to Cart
              </Button>
              <Link to={`/product/${gearOfWeek.id}`} className="flex-1">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 md:h-14 px-6 md:px-8 text-sm md:text-base w-full hover-lift"
                >
                  View Details
                </Button>
              </Link>
            </div>

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border/50 grid grid-cols-3 gap-3 md:gap-4 text-center">
              <div>
                <p className="text-xl md:text-2xl font-bold text-accent">5K+</p>
                <p className="text-xs md:text-sm text-muted-foreground">Sold This Week</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-accent">4.9</p>
                <p className="text-xs md:text-sm text-muted-foreground">Avg Rating</p>
              </div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-accent">98%</p>
                <p className="text-xs md:text-sm text-muted-foreground">Would Buy Again</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
