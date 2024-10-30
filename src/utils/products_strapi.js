import qs from 'qs';
import axiosClient from './GlobalApi';

const getProductsUrl = (locale) => 
  `products?` + qs.stringify({
    fields: ['id', 'slug', 'title', 'description', 'price', 'category', 'includes'],
    pagination: { pageSize: 9999 },
    locale: locale // Add locale parameter here
  });

export const getProducts = (locale = 'en') => {
    return axiosClient.get(getProductsUrl(locale)).then(res => res.data.data);
};

export const getProductsByCategory = async (category, locale = 'en') => {
    const products = await getProducts(locale); // Pass locale to getProducts
    const categoryProducts = products.filter(product => product.attributes.category === category);
    return categoryProducts;
};

export const getProduct = async (slug) => {
    const products = await getProducts();
    
    const product = products.find((product) => product.attributes.slug === slug);
    return product;
} 