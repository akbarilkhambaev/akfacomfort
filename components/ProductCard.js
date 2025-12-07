'use client';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="price">{product.price}</p>
      <button className="btn btn-secondary">В корзину</button>
    </div>
  );
}
