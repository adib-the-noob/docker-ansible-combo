import React from 'react';

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No product data available</p>;
  }

  return (
    <ul className="products-list">
      {products.map((product, index) => (
        <li key={index}>
          <span className="product-name">{product.name}</span>
          <span className="product-sales">{product.sales} sales</span>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
