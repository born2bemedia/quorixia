import { getProductsByCategory } from "@/utils/products_strapi";
import React from "react";
import CareerSolution from "./CareerSolution";

const PackagesWrap = async () => {
  const packages = await getProductsByCategory("package");
  return (
    <CareerSolution products={packages} />
  );
};

export default PackagesWrap;
