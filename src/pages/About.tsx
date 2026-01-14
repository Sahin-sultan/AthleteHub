import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { Target, Users, Award, Heart, MapPin, Phone, Mail } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { useEffect, useRef } from 'react';

const stats = [
  { value: '10+', label: 'Years Experience', targetNumber: 10, suffix: '+' },
  { value: '50K+', label: 'Happy Customers', targetNumber: 50, suffix: 'K+' },
  { value: '1000+', label: 'Products', targetNumber: 1000, suffix: '+' },
  { value: '99%', label: 'Satisfaction Rate', targetNumber: 99, suffix: '%' },
];

const Counter = ({ value, targetNumber, suffix }: { value: string; targetNumber: number; suffix: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(count, targetNumber, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
      });
      return controls.stop;
    }
  }, [count, targetNumber]);

  return (
    <motion.span className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent tabular-nums">
      {rounded}{suffix}
    </motion.span>
  );
};

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We only stock products we\'d use ourselves. Every supplier is vetted, every product tested.',
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Real support from people who actually understand your sport. No scripts, no runaround.',
  },
  {
    icon: Award,
    title: 'Expert Knowledge',
    description: 'Our team are active athletes and coaches. We know the gear because we use the gear.',
  },
  {
    icon: Heart,
    title: 'Community Support',
    description: 'We sponsor local sports programs and academies. Giving back is part of the business model.',
  },
];

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <Layout>
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              About Athlete Hub
            </h1>
            <p className="text-lg text-primary-foreground/70">
              We've been helping athletes find the right gear since 2014. Started by 
              a group of frustrated runners who couldn't find decent equipment at fair prices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Premium Glass Stats Section */}
      <section className="py-16 md:py-20 relative flex justify-center items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10121a] via-[#181c23] to-[#10121a] opacity-100" />
        <div className="container-custom relative z-10">
          <div className="rounded-3xl shadow-2xl border-2 border-accent/60 bg-black/70 backdrop-blur-3xl px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0" style={{boxShadow: '0 8px 40px 0 rgba(255,87,51,0.10), 0 2px 24px 0 rgba(0,0,0,0.45)'}}>
            <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="text-center space-y-3"
                >
                  <Counter value={stat.value} targetNumber={stat.targetNumber} suffix={stat.suffix} />
                  <p className="text-base md:text-lg font-semibold text-white tracking-wide" style={{textShadow: '0 2px 12px rgba(255,87,51,0.18), 0 2px 8px rgba(0,0,0,0.35)'}}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-secondary font-semibold text-sm uppercase tracking-wide mb-4 block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built by Athletes, For Athletes
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  It started with a simple problem: quality sports gear was either 
                  overpriced or hard to find. So in 2014, a few of us who actually 
                  used this stuff decided to do something about it.
                </p>
                <p>
                  We've grown from a small online store to serving over 50,000 athletes, 
                  but we haven't forgotten why we started. We test everything ourselves, 
                  negotiate fair prices, and only stock gear we'd actually use.
                </p>
                <p>
                  No fluff, no gimmicks. Just honest equipment at honest prices, backed 
                  by people who understand what it takes to train and compete.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop"
                alt="Our team"
                className="rounded-3xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Stand For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide how we work and what we prioritize.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Have Questions?
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
              Need help finding the right gear? Our team responds to every message, 
              usually within a few hours.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="h-5 w-5 text-secondary" />
                123 Sports Avenue, Athletic City
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="h-5 w-5 text-secondary" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="h-5 w-5 text-secondary" />
                hello@sportsgear.com
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
