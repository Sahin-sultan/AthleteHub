import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Search, X, SlidersHorizontal } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/ProductCard';
import { products, sports, categories } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const selectedSport = searchParams.get('sport') || 'all';
  const selectedCategory = searchParams.get('category') || 'All';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSport = selectedSport === 'all' || product.sport === selectedSport;
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSport && matchesCategory && matchesSearch;
    });
  }, [selectedSport, selectedCategory, searchQuery]);

  const handleSportChange = (sport: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (sport === 'all') {
      newParams.delete('sport');
    } else {
      newParams.set('sport', sport);
    }
    setSearchParams(newParams);
  };

  const handleCategoryChange = (category: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (category === 'All') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams({});
    setSearchQuery('');
  };

  const hasActiveFilters = selectedSport !== 'all' || selectedCategory !== 'All' || searchQuery;

  return (
    <Layout>
      <section className="bg-gradient-to-b from-[#12151a] to-[#0f1115] pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border/30">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl editorial-heading text-foreground mb-4">
              Shop All Products
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our complete collection of premium sports gear and accessories
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-[#0f1115] min-h-screen">
        <div className="container-custom px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-card/50 border-border/50"
              />
            </div>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="h-12 md:hidden"
            >
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              Filters
            </Button>
            {hasActiveFilters && (
              <Button variant="ghost" onClick={clearFilters} className="h-12">
                <X className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className={`w-full lg:w-72 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-lg flex items-center gap-2">
                    <Filter className="h-5 w-5 text-accent" />
                    Filters
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                    className="lg:hidden"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-3">
                    SPORT
                  </h4>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleSportChange('all')}
                      className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all ${
                        selectedSport === 'all'
                          ? 'bg-accent text-white font-medium'
                          : 'hover:bg-card text-foreground'
                      }`}
                    >
                      All Sports
                    </button>
                    {sports.map(sport => (
                      <button
                        key={sport.id}
                        onClick={() => handleSportChange(sport.id)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all flex items-center gap-2 ${
                          selectedSport === sport.id
                            ? 'bg-accent text-white font-medium'
                            : 'hover:bg-card text-foreground'
                        }`}
                      >
                        <span>{sport.icon}</span>
                        {sport.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-3">
                    CATEGORY
                  </h4>
                  <div className="space-y-2">
                    {categories.map(category => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all ${
                          selectedCategory === category
                            ? 'bg-accent text-white font-medium'
                            : 'hover:bg-card text-foreground'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="font-medium text-accent">{filteredProducts.length}</span> products
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">Try adjusting your search or filter criteria</p>
                  <Button onClick={clearFilters}>Clear All Filters</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Shop;
