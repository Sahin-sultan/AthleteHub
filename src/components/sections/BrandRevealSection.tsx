import { motion } from 'framer-motion';

const brands = [
  'NIKE',
  'ADIDAS',
  'PUMA',
  'REEBOK',
  'UNDER ARMOUR',
  'NEW BALANCE',
  'ASICS',
  'FILA',
  'UMBRO',
  'SKECHERS'
];

export const BrandRevealSection = () => {
  return (
    <section className="relative h-[80px] md:h-[100px] bg-black overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-transparent to-accent/10" />
      
      <div className="relative w-full flex items-center">
        <motion.div
          className="flex whitespace-nowrap gap-8 md:gap-12 lg:gap-16"
          animate={{
            x: [0, -100 + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 120,
              ease: "linear",
            },
          }}
        >
          {[...Array(8)].map((_, outerIndex) => (
            <>
              {brands.map((brand, brandIndex) => (
                <h2 
                  key={`${outerIndex}-${brandIndex}`}
                  className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl editorial-heading text-white shrink-0" 
                  style={{ letterSpacing: '0.1em' }}
                >
                  {brand}
                </h2>
              ))}
            </>
          ))}
        </motion.div>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />
    </section>
  );
};
