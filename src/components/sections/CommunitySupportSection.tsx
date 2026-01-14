import { motion } from 'framer-motion';
import { Heart, Users, Trophy, Target, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const initiatives = [
  {
    icon: Users,
    title: 'Youth Sports Programs',
    description: 'Sponsoring 50+ local youth teams with equipment and training gear.',
    stat: '50+',
    label: 'Teams Sponsored',
  },
  {
    icon: Trophy,
    title: 'Community Tournaments',
    description: 'Organizing quarterly sports tournaments for all age groups and skill levels.',
    stat: '12',
    label: 'Events Annually',
  },
  {
    icon: Target,
    title: 'School Partnerships',
    description: 'Partnering with schools to provide quality sports equipment at subsidized rates.',
    stat: '30+',
    label: 'Schools Partner',
  },
  {
    icon: Award,
    title: 'Athlete Scholarship',
    description: 'Supporting promising young athletes with scholarships and mentorship programs.',
    stat: '$100K',
    label: 'Given Annually',
  },
];

const testimonials = [
  {
    name: 'Coach Michael Johnson',
    role: 'High School Basketball Coach',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    quote: 'Athlete Hub has been instrumental in transforming our school sports program. Their support goes beyond just equipment.',
  },
  {
    name: 'Sarah Williams',
    role: 'Youth Soccer League Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    quote: 'The community investment from Athlete Hub has enabled us to provide opportunities to hundreds of young athletes.',
  },
];

export const CommunitySupportSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-dotted-pattern opacity-10" />
      <div className="absolute inset-0 bg-diagonal-lines opacity-20" />
      
      {/* Animated Gradients */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }} />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/20 rounded-full text-secondary text-sm font-bold mb-4"
          >
            <Heart className="h-4 w-4 animate-pulse" />
            GIVING BACK TO OUR COMMUNITY
          </motion.div>
          <h2 className="section-heading text-white mb-4">
            Supporting Local Sports Communities
          </h2>
          <p className="section-subheading mx-auto text-gray-300 max-w-3xl">
            We believe in nurturing the next generation of athletes. Our commitment goes beyond selling gear – 
            we're invested in building stronger, healthier communities through sports.
          </p>
        </motion.div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover-lift group"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <initiative.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{initiative.title}</h3>
              <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                {initiative.description}
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-2xl font-bold text-secondary">{initiative.stat}</p>
                <p className="text-xs text-gray-400">{initiative.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card-light p-8 md:p-12 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">5,000+</p>
              <p className="text-sm text-muted-foreground">Young Athletes Supported</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">100+</p>
              <p className="text-sm text-muted-foreground">Community Events</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">$500K+</p>
              <p className="text-sm text-muted-foreground">Community Investment</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gradient mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Partner Organizations</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6 hover-lift"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                />
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Want to get involved or nominate a community for support?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="btn-secondary h-14 px-8 shadow-xl hover:shadow-2xl">
                <MapPin className="mr-2 h-5 w-5" />
                Contact Our Community Team
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-8 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
              Learn More About Our Programs
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
