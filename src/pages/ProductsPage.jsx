import { useState, useMemo } from 'react';
import { Search, Filter, Grid3X3, LayoutList, Loader2 } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import ProductQuickView from '../components/ProductQuickView';
import { useProducts, useCategories, useProductSearch } from '../hooks/useProducts';
import CTA from '../components/CTA';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [viewMode, setViewMode] = useState('grid');
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const { products, loading: productsLoading } = useProducts();
  const { categories } = useCategories();
  const { results: searchResults, loading: searchLoading, search } = useProductSearch();

  // Handle search
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 2) {
      search(query);
    }
  };

  // Filter and sort products
  const displayedProducts = useMemo(() => {
    let filtered = searchQuery.length > 2 ? searchResults : products;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter((p) => p.Category?.name === selectedCategory);
    }

    // Sort products
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.Prices?.ItemPrice?.[0]?.amount || 0) -
            parseFloat(b.Prices?.ItemPrice?.[0]?.amount || 0);
        case 'price-high':
          return parseFloat(b.Prices?.ItemPrice?.[0]?.amount || 0) -
            parseFloat(a.Prices?.ItemPrice?.[0]?.amount || 0);
        case 'name':
        default:
          return a.description.localeCompare(b.description);
      }
    });
  }, [products, searchResults, searchQuery, selectedCategory, sortBy]);

  const allCategories = ['All', ...categories.map((c) => c.name)];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-sage-500/20 text-sage-300 rounded-full text-sm font-medium mb-6">
            Shop Plants
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Plant Collection
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Browse our selection of premium plants, planters, and accessories. Contact
            us to purchase or request a quote for your project.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search plants..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-sage-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-200 outline-none transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-sage-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-200 outline-none transition-all bg-white"
                >
                  {allCategories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-sage-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-200 outline-none transition-all bg-white"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>

              {/* View Mode */}
              <div className="flex items-center bg-sage-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-sage-200'
                  }`}
                >
                  <Grid3X3 className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-sage-200'
                  }`}
                >
                  <LayoutList className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-sage-400 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-sage-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Count */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{displayedProducts.length}</span>{' '}
              products
            </p>
          </div>

          {/* Products Grid */}
          {productsLoading || searchLoading ? (
            <div className="flex justify-center items-center py-24">
              <Loader2 className="w-10 h-10 text-sage-500 animate-spin" />
            </div>
          ) : displayedProducts.length === 0 ? (
            <div className="text-center py-24">
              <div className="w-24 h-24 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-sage-400" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-forest-800 mb-3">
                No products found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                  : 'space-y-4'
              }
            >
              {displayedProducts.map((product) => (
                <ProductCard
                  key={product.itemID}
                  product={product}
                  onQuickView={setQuickViewProduct}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sage-100 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display text-3xl font-semibold text-forest-800 mb-4">
                  Need Help Choosing?
                </h2>
                <p className="text-gray-600 mb-6">
                  Not sure which plants are right for your space? Our expert team can
                  help you select the perfect plants based on your lighting conditions,
                  maintenance preferences, and aesthetic goals.
                </p>
                <a
                  href="/contact"
                  className="btn-primary inline-block"
                >
                  Get Expert Advice
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-sage-500">30+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-sage-500">100+</p>
                  <p className="text-gray-600">Plant Varieties</p>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-sage-500">Free</p>
                  <p className="text-gray-600">Consultations</p>
                </div>
                <div className="bg-white rounded-2xl p-6 text-center">
                  <p className="text-3xl font-bold text-sage-500">Local</p>
                  <p className="text-gray-600">Delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      {/* Quick View Modal */}
      <ProductQuickView
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </main>
  );
};

export default ProductsPage;
