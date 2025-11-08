import ProductList from "@/components/ProductList";
import React from "react";

type Props = {
  searchParams: Promise<{ category: string }>;
};

export default async function ProductsPage({ searchParams }: Props) {
  const categories = (await searchParams).category;
  return (
    <div>
      <ProductList categories={categories} params="products" />
    </div>
  );
}
