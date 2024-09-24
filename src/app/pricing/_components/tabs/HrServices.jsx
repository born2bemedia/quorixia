"use client";
import AddToCartButton from "@/global_components/AddToCartButton";
import { getProductsByCategory } from "@/utils/products_strapi";
import React, { useEffect, useState } from "react";

const HrServices = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory("hr");
        setProducts(data);
      } catch (error) {
        console.error(
          "Error fetching products:",
          error.response?.data || error.message
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="products">
      {products.length > 0 &&
        products.map((product) => (
          <div className="product" key={product.id}>
            <div className="product-top">
              <div>
                <h2>{product.attributes.title}</h2>
                <h2>Price: €{product.attributes.price}</h2>
              </div>
              <AddToCartButton product={product} />
            </div>
            <div className="description">{product.attributes.description}</div>
          </div>
        ))}
    </div>
  );
};

export default HrServices;
