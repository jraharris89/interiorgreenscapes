import { useState, useEffect, useCallback } from 'react';
import {
  fetchProducts,
  fetchProductById,
  fetchCategories,
  fetchProductsByCategory,
  searchProducts,
} from '../services/lightspeedApi';

// Mock data for development/demo when Lightspeed API is not configured
const mockProducts = [
  {
    itemID: 1,
    description: 'Fiddle Leaf Fig',
    customSku: 'PLT-FLF-001',
    Prices: { ItemPrice: [{ amount: '149.99' }] },
    Category: { name: 'Indoor Trees' },
    Images: { Image: [{ baseImageURL: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80' }] },
    longDescription: 'The iconic Fiddle Leaf Fig is known for its large, violin-shaped leaves. Perfect for making a statement in any room.',
    inStock: true,
  },
  {
    itemID: 2,
    description: 'Monstera Deliciosa',
    customSku: 'PLT-MON-001',
    Prices: { ItemPrice: [{ amount: '89.99' }] },
    Category: { name: 'Tropical Plants' },
    Images: { Image: [{ baseImageURL: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=800&q=80' }] },
    longDescription: 'The Swiss Cheese Plant features unique fenestrated leaves that add tropical flair to any space.',
    inStock: true,
  },
  {
    itemID: 3,
    description: 'Snake Plant',
    customSku: 'PLT-SNK-001',
    Prices: { ItemPrice: [{ amount: '45.99' }] },
    Category: { name: 'Low Maintenance' },
    Images: { Image: [{ baseImageURL: 'https://images.unsplash.com/photo-1593482892540-96c63ea8cc5e?auto=format&fit=crop&w=800&q=80' }] },
    longDescription: 'One of the hardiest houseplants available. Perfect for beginners and low-light spaces.',
    inStock: true,
  },
  {
    itemID: 4,
    description: 'Peace Lily',
    customSku: 'PLT-PCL-001',
    Prices: { ItemPrice: [{ amount: '39.99' }] },
    Category: { name: 'Flowering Plants' },
    Images: { Image: [{ baseImageURL: 'https://images.unsplash.com/photo-1593691509543-c55fb32e3f96?auto=format&fit=crop&w=800&q=80' }] },
    longDescription: 'Elegant white blooms and glossy leaves make this a favorite for offices and homes.',
    inStock: true,
  },
  {
    itemID: 5,
    description: 'Bird of Paradise',
    customSku: 'PLT-BOP-001',
    Prices: { ItemPrice: [{ amount: '199.99' }] },
    Category: { name: 'Indoor Trees' },
    Images: { Image: [{ baseImageURL: 'https://images.unsplash.com/photo-1604762512526-b7068b36290d?auto=format&fit=crop&w=800&q=80' }] },
    longDescription: 'Dramatic tropical foliage that brings an exotic feel to any interior.',
    inStock: true,
  },
  {
    itemID: 6,
    description: 'Pothos Golden',
    customSku: 'PLT-PTH-001',
    Prices: { ItemPrice: [{ amount: '24.99' }] },
    Category: { name: 'Low Maintenance' },
    Images: { Image: [{ baseImageURL: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=800&q=80' }] },
    longDescription: 'A trailing vine with heart-shaped leaves. Great for hanging baskets or shelves.',
    inStock: true,
  },
  {
    itemID: 7,
    description: 'ZZ Plant',
    customSku: 'PLT-ZZP-001',
    Prices: { ItemPrice: [{ amount: '59.99' }] },
    Category: { name: 'Low Maintenance' },
    Images: { Image: [{ baseImageURL: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=800&q=80' }] },
    longDescription: 'Glossy, dark green foliage that thrives on neglect. Perfect for offices.',
    inStock: true,
  },
  {
    itemID: 8,
    description: 'Rubber Plant',
    customSku: 'PLT-RBR-001',
    Prices: { ItemPrice: [{ amount: '69.99' }] },
    Category: { name: 'Indoor Trees' },
    Images: { Image: [{ baseImageURL: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=800&q=80' }] },
    longDescription: 'Bold burgundy leaves add dramatic color to any room.',
    inStock: false,
  },
  {
    itemID: 9,
    description: 'Philodendron Brasil',
    customSku: 'PLT-PHB-001',
    Prices: { ItemPrice: [{ amount: '34.99' }] },
    Category: { name: 'Tropical Plants' },
    Images: { Image: [{ baseImageURL: 'https://images.unsplash.com/photo-1622398925373-3f91b1e275f4?auto=format&fit=crop&w=800&q=80' }] },
    longDescription: 'Variegated heart-shaped leaves with lime green stripes.',
    inStock: true,
  },
  {
    itemID: 10,
    description: 'Calathea Medallion',
    customSku: 'PLT-CLM-001',
    Prices: { ItemPrice: [{ amount: '49.99' }] },
    Category: { name: 'Tropical Plants' },
    Images: { Image: [{ baseImageURL: 'https://images.unsplash.com/photo-1598880940371-c756e015faf1?auto=format&fit=crop&w=800&q=80' }] },
    longDescription: 'Stunning patterned leaves that fold up at night.',
    inStock: true,
  },
  {
    itemID: 11,
    description: 'Ceramic Planter - White',
    customSku: 'POT-CRM-001',
    Prices: { ItemPrice: [{ amount: '34.99' }] },
    Category: { name: 'Planters & Pots' },
    Images: { Image: [{ baseImageURL: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=800&q=80' }] },
    longDescription: 'Modern white ceramic planter with drainage hole.',
    inStock: true,
  },
  {
    itemID: 12,
    description: 'Woven Basket Planter',
    customSku: 'POT-WVN-001',
    Prices: { ItemPrice: [{ amount: '29.99' }] },
    Category: { name: 'Planters & Pots' },
    Images: { Image: [{ baseImageURL: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80' }] },
    longDescription: 'Natural seagrass basket planter for a bohemian touch.',
    inStock: true,
  },
];

const mockCategories = [
  { categoryID: 1, name: 'Indoor Trees' },
  { categoryID: 2, name: 'Tropical Plants' },
  { categoryID: 3, name: 'Low Maintenance' },
  { categoryID: 4, name: 'Flowering Plants' },
  { categoryID: 5, name: 'Planters & Pots' },
];

// Check if Lightspeed API is configured
const isApiConfigured = () => {
  return Boolean(import.meta.env.VITE_LIGHTSPEED_API_URL && import.meta.env.VITE_LIGHTSPEED_API_KEY);
};

export const useProducts = (initialParams = {}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = useCallback(async (params = {}) => {
    setLoading(true);
    setError(null);
    try {
      if (isApiConfigured()) {
        const data = await fetchProducts({ ...initialParams, ...params });
        setProducts(data);
      } else {
        // Use mock data when API is not configured
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API delay
        setProducts(mockProducts);
      }
    } catch (err) {
      setError(err.message);
      setProducts(mockProducts); // Fall back to mock data on error
    } finally {
      setLoading(false);
    }
  }, [initialParams]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return { products, loading, error, refetch: loadProducts };
};

export const useProduct = (productId) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        if (isApiConfigured()) {
          const data = await fetchProductById(productId);
          setProduct(data);
        } else {
          await new Promise((resolve) => setTimeout(resolve, 300));
          const mockProduct = mockProducts.find((p) => p.itemID === parseInt(productId));
          setProduct(mockProduct || null);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      loadProduct();
    }
  }, [productId]);

  return { product, loading, error };
};

export const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        if (isApiConfigured()) {
          const data = await fetchCategories();
          setCategories(data);
        } else {
          await new Promise((resolve) => setTimeout(resolve, 300));
          setCategories(mockCategories);
        }
      } catch (err) {
        setError(err.message);
        setCategories(mockCategories);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { categories, loading, error };
};

export const useProductSearch = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const search = useCallback(async (query) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);
    try {
      if (isApiConfigured()) {
        const data = await searchProducts(query);
        setResults(data);
      } else {
        await new Promise((resolve) => setTimeout(resolve, 300));
        const filtered = mockProducts.filter((p) =>
          p.description.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { results, loading, error, search };
};

export default {
  useProducts,
  useProduct,
  useCategories,
  useProductSearch,
};
