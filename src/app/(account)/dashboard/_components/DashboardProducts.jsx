"use client";
import React, { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animations";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import { fetchProductsByCategory } from "@/app/api/products";
import AddToCartButtonProduct from "@/components/AddToCartButtonProduct";
import AddToCartArrow from "@/icons/AddToCartArrow";
import Video from "next-video";
import VideoBlock from "@/app/product/[slug]/_components/Video";

const DashboardProducts = ({ category, title }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetchProductsByCategory(category, 3);
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <>
      <section className="products">
        <div className="_container">
          {title && (
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              {title}
            </motion.h2>
          )}
          <div className="products__body">
            {products.map((product) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={product.id}
              >
                {product.preview_video ? (
                  <Link
                    className="product-thumb"
                    href={`/product/${product.slug}`}
                  >
                    <img src={product.image} width={350} height={197} />
                    {product.offer && (
                      <span className="offer">{product.offer} OFF!</span>
                    )}
                  </Link>
                ) : (
                  <Link
                    className="product-thumb"
                    href={`/product/${product.slug}`}
                  >
                    <img src={product.image} width={350} height={197} />
                    {product.offer && (
                      <span className="offer">{product.offer} OFF!</span>
                    )}
                  </Link>
                )}

                <div className="product-info">
                  <div>
                    <h3>
                    <Link href={`/product/${product.slug}`}>
                      {product.title}
                    </Link>
                  </h3>
                  <div
                    className="excerpt"
                    dangerouslySetInnerHTML={{ __html: product.excerpt }}
                  />
                  </div>
                  <div className="add-to-cart">
                    <span>Price: €{product.price}</span>
                    {category == "ready-made-animations" ? (
                      <Link
                        className="arrow-button"
                        href={`/product/${product.slug}`}
                      >
                        View
                        <AddToCartArrow />
                      </Link>
                    ) : (
                      <AddToCartButtonProduct product={product} />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {category != "hot-offers" && category != "ready-made-animations" ? (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="button-wrap"
              >
                <Link
                  className="black-button"
                  href={`/services/3d-modeling/${category}`}
                >
                  All {title}
                </Link>
              </motion.div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardProducts;
