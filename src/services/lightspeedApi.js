import axios from 'axios';

// Lightspeed API Configuration
// You'll need to set these environment variables in your .env file
const LIGHTSPEED_API_URL = import.meta.env.VITE_LIGHTSPEED_API_URL || '';
const LIGHTSPEED_API_KEY = import.meta.env.VITE_LIGHTSPEED_API_KEY || '';
const LIGHTSPEED_ACCOUNT_ID = import.meta.env.VITE_LIGHTSPEED_ACCOUNT_ID || '';

// Create axios instance for Lightspeed API
const lightspeedClient = axios.create({
  baseURL: LIGHTSPEED_API_URL,
  headers: {
    'Authorization': `Bearer ${LIGHTSPEED_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

// Fetch all products from Lightspeed
export const fetchProducts = async (params = {}) => {
  try {
    const response = await lightspeedClient.get(`/Account/${LIGHTSPEED_ACCOUNT_ID}/Item.json`, {
      params: {
        load_relations: '["Category", "Images", "ItemShops"]',
        ...params,
      },
    });
    return response.data.Item || [];
  } catch (error) {
    console.error('Error fetching products from Lightspeed:', error);
    throw error;
  }
};

// Fetch single product by ID
export const fetchProductById = async (productId) => {
  try {
    const response = await lightspeedClient.get(
      `/Account/${LIGHTSPEED_ACCOUNT_ID}/Item/${productId}.json`,
      {
        params: {
          load_relations: '["Category", "Images", "ItemShops", "ItemPrices"]',
        },
      }
    );
    return response.data.Item;
  } catch (error) {
    console.error('Error fetching product from Lightspeed:', error);
    throw error;
  }
};

// Fetch product categories
export const fetchCategories = async () => {
  try {
    const response = await lightspeedClient.get(`/Account/${LIGHTSPEED_ACCOUNT_ID}/Category.json`);
    return response.data.Category || [];
  } catch (error) {
    console.error('Error fetching categories from Lightspeed:', error);
    throw error;
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (categoryId) => {
  try {
    const response = await lightspeedClient.get(`/Account/${LIGHTSPEED_ACCOUNT_ID}/Item.json`, {
      params: {
        categoryID: categoryId,
        load_relations: '["Category", "Images", "ItemShops"]',
      },
    });
    return response.data.Item || [];
  } catch (error) {
    console.error('Error fetching products by category from Lightspeed:', error);
    throw error;
  }
};

// Search products
export const searchProducts = async (query) => {
  try {
    const response = await lightspeedClient.get(`/Account/${LIGHTSPEED_ACCOUNT_ID}/Item.json`, {
      params: {
        description: `~,%${query}%`,
        load_relations: '["Category", "Images", "ItemShops"]',
      },
    });
    return response.data.Item || [];
  } catch (error) {
    console.error('Error searching products from Lightspeed:', error);
    throw error;
  }
};

export default {
  fetchProducts,
  fetchProductById,
  fetchCategories,
  fetchProductsByCategory,
  searchProducts,
};
