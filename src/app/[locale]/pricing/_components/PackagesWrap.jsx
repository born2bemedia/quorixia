"use client";
import { getProductsByCategory } from "@/utils/products_strapi";
import React, { useEffect, useState } from "react";
import CareerSolution from "./CareerSolution";
import { useLocale } from "next-intl";

const PackagesWrap = () => {
  const [packages, setPackages] = useState([]);
  const locale = useLocale();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory("package", locale);
        setPackages(data);
      } catch (error) {
        console.error(
          "Error fetching products:",
          error.response?.data || error.message
        );
      } finally {
        //setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  return <CareerSolution products={packages} />;
};

export default PackagesWrap;
