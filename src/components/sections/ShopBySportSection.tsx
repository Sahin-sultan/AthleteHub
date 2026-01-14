import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sports } from '@/data/products';

export const ShopBySportSection = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-[#0f1115] to-[#12151a] relative">
      {/* Subtle Accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-20"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl editorial-heading text-foreground mb-6">
            Shop by Sport
          </h2>
          <p className="text-xl text-muted-foreground body-text max-w-2xl">
            Find the perfect gear for your favorite sport. We've curated collections 
            for every discipline and skill level.
          </p>
          <div className="w-20 h-1 bg-accent mt-8 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {sports.map((sport, index) => (
            <motion.div
              key={sport.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={`/shop?sport=${sport.id}`}
                className="card-editorial p-8 flex flex-col items-center justify-center group hover:bg-card/50 transition-all duration-500"
              >
                <span className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  {sport.icon}
                </span>
                <span className="text-sm font-medium text-foreground/80 group-hover:text-accent transition-colors duration-500 tracking-wider uppercase">
                  {sport.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
