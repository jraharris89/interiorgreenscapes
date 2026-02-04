import { X, ShoppingCart, Heart, Minus, Plus, Truck, Shield, Leaf } from 'lucide-react';
import { useState } from 'react';

const ProductQuickView = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!isOpen || !product) return null;

  const price = product.Prices?.ItemPrice?.[0]?.amount || '0.00';
  const image = product.Images?.Image?.[0]?.baseImageURL || 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80';
  const category = product.Category?.name || 'Plants';
  const inStock = product.inStock !== false;

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto bg-sage-50">
            <img
              src={image}
              alt={product.description}
              className="w-full h-full object-cover"
            />
            {!inStock && (
              <div className="absolute top-4 left-4">
                <span className="bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-full">
                  Out of Stock
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8 overflow-y-auto max-h-[70vh] md:max-h-none">
            <span className="text-sage-500 text-sm font-medium">{category}</span>
            <h2 className="text-3xl font-display font-bold text-forest-800 mt-2 mb-4">
              {product.description}
            </h2>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-bold text-forest-700">
                ${parseFloat(price).toFixed(2)}
              </span>
              {product.customSku && (
                <span className="text-sm text-gray-400">SKU: {product.customSku}</span>
              )}
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.longDescription ||
                'This beautiful plant will bring life and color to any space. Perfect for homes and offices alike.'}
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-gray-700">Quantity:</span>
              <div className="flex items-center border-2 border-sage-200 rounded-xl">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-3 hover:bg-sage-50 transition-colors"
                >
                  <Minus className="w-4 h-4 text-gray-600" />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-3 hover:bg-sage-50 transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-8">
              <button
                disabled={!inStock}
                className={`flex-1 py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
                  inStock
                    ? 'bg-sage-400 text-white hover:bg-sage-500'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                Request Quote
              </button>
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="w-14 h-14 border-2 border-sage-200 rounded-xl flex items-center justify-center hover:border-sage-400 transition-colors"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'
                  }`}
                />
              </button>
            </div>

            {/* Features */}
            <div className="space-y-3 pt-6 border-t">
              <div className="flex items-center gap-3 text-gray-600">
                <Truck className="w-5 h-5 text-sage-500" />
                <span>Local delivery available in Treasure Valley</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Shield className="w-5 h-5 text-sage-500" />
                <span>30-day plant health guarantee</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <Leaf className="w-5 h-5 text-sage-500" />
                <span>Expert care instructions included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickView;
