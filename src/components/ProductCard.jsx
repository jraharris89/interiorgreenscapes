import { useState } from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';

const ProductCard = ({ product, onQuickView }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const price = product.Prices?.ItemPrice?.[0]?.amount || '0.00';
  const image = product.Images?.Image?.[0]?.baseImageURL || 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80';
  const category = product.Category?.name || 'Plants';
  const inStock = product.inStock !== false;

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-sage-50">
        <img
          src={image}
          alt={product.description}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {!inStock && (
            <span className="bg-gray-800 text-white text-xs font-medium px-3 py-1 rounded-full">
              Out of Stock
            </span>
          )}
          {product.isNew && (
            <span className="bg-sage-400 text-white text-xs font-medium px-3 py-1 rounded-full">
              New
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-all duration-300"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
            }`}
          />
        </button>

        {/* Quick Actions */}
        <div
          className={`absolute bottom-4 left-4 right-4 flex gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => onQuickView?.(product)}
            className="flex-1 bg-white/90 backdrop-blur-sm text-forest-800 py-3 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            <Eye className="w-4 h-4" />
            Quick View
          </button>
          <button
            disabled={!inStock}
            className={`flex-1 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-colors ${
              inStock
                ? 'bg-sage-400 text-white hover:bg-sage-500'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-4 h-4" />
            Inquire
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-sage-500 text-sm font-medium">{category}</span>
        <h3 className="text-lg font-display font-semibold text-forest-800 mt-1 mb-2">
          {product.description}
        </h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-forest-700">
            ${parseFloat(price).toFixed(2)}
          </span>
          {product.customSku && (
            <span className="text-xs text-gray-400">SKU: {product.customSku}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
