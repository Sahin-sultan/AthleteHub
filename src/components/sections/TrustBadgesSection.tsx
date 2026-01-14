import { motion } from 'framer-motion';
import { Truck, Shield, RefreshCw, Headphones, CreditCard, Award } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $99',
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure checkout',
  },
  {
    icon: RefreshCw,
    title: 'Easy Returns',
    description: '30-day return policy',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Expert assistance',
  },
  {
    icon: CreditCard,
    title: 'Flexible Payment',
    description: 'Multiple options',
  },
  {
    icon: Award,
    title: 'Genuine Products',
    description: 'Authorized dealer',
  },
];

export const TrustBadgesSection = () => {
  return (
    <section className="py-16 bg-[#0f1115] border-y border-border/20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 rounded-full border border-border/50 flex items-center justify-center mb-4 group-hover:border-accent transition-colors duration-500">
                <feature.icon className="h-6 w-6 text-muted-foreground group-hover:text-accent transition-colors duration-500" />
              </div>
              <h4 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h4>
              <p className="text-xs text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
