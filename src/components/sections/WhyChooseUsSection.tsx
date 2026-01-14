import { motion } from 'framer-motion';
import { CheckCircle2, Users, Trophy, Heart } from 'lucide-react';

const reasons = [
  {
    icon: Trophy,
    title: 'Premium Quality',
    description: 'Only the best brands and materials. Every product is tested and approved by professional athletes.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Our sports specialists are here to help you find the perfect gear for your needs and skill level.',
  },
  {
    icon: CheckCircle2,
    title: 'Verified Reviews',
    description: 'Real reviews from real athletes. See what others are saying before you buy.',
  },
  {
    icon: Heart,
    title: 'Community First',
    description: 'We support local sports academies and schools, giving back to the community we love.',
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-10" />
      <div className="absolute inset-0 bg-noise" />
      
      {/* Animated Gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-semibold text-sm uppercase tracking-wide mb-4 block">
              Why Athletes Choose Us
            </span>
            <h2 className="section-heading text-white">We're More Than Just a Sports Shop</h2>
            <p className="section-subheading mb-10 text-gray-300">
              For over a decade, we've been the trusted choice for athletes at every level. Here's what sets us apart.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 glass-card p-4 hover-lift"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <reason.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">{reason.title}</h4>
                    <p className="text-sm text-gray-300">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop"
                alt="Athletes training"
                className="rounded-2xl w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=400&h=400&fit=crop"
                alt="Sports equipment"
                className="rounded-2xl w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=400&h=400&fit=crop"
                alt="Team sports"
                className="rounded-2xl w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&h=300&fit=crop"
                alt="Football"
                className="rounded-2xl w-full h-48 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
