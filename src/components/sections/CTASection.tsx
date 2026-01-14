import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] relative overflow-hidden">
      {/* Background Elements with Motion */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-dotted-pattern opacity-20" />
        <div className="absolute inset-0 bg-diagonal-lines opacity-40" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Performance?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Join thousands of athletes who trust Athlete Hub for their equipment. 
            Get exclusive deals and be the first to know about new arrivals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/shop">
              <Button size="lg" className="btn-secondary h-14 px-8 text-base group shadow-xl hover:shadow-2xl">
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-base border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 pt-12 border-t border-white/10"
          >
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for exclusive deals</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button type="submit" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 shadow-lg">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
