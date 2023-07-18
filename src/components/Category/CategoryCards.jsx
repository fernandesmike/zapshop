import React from "react";

// Components
import Card from "./Card";

// Styling
import "../../styles/typography.css";

const CategoryCards = () => {
  return (
    <div className="pt-4">
      {/* Section title  */}
      <div className="mb-4">
        <h2 className="title font-bold text-primary">Browse by category</h2>
      </div>

      {/* Category cards */}
      <div className="flex gap-md justify-between">
        {/* Clothing category */}
        <Card title={"Clothes"} productCount={1.5} />

        {/* Furniture category */}
        <Card title={"Furnitures"} productCount={4.6} />

        {/* Electronics category */}
        <Card title={"Electronics"} productCount={2.5} />

        {/* Shoe category */}
        <Card title={"Shoes"} productCount={1.8} />
      </div>
    </div>
  );
};

export default CategoryCards;
