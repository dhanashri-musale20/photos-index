 import React from "react";
import { useParams, Link } from "react-router-dom";
import photoData from "../data/products.json";

const ProductDetails = () => {
  const { id } = useParams();
  const product = photoData.find((product) => String(product._id) === String(id));

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-cover rounded"
        />
        <h2 className="text-2xl font-semibold mt-4">{product.title}</h2>
        <p className="text-gray-600 mt-2">{product.des}</p>
        <p className="text-gray-700 mt-2 font-medium">Brand: {product.brand}</p>
        <p className="text-gray-700 mt-2">Category: {product.category}</p>
        <p className="text-gray-900 mt-2 font-bold">Price: ${product.price}</p>
        {product.oldPrice && (
          <p className="text-red-500 line-through">Old Price: ${product.oldPrice}</p>
        )}
        {product.isNew && <span className="text-green-600 font-semibold">New Arrival</span>}
        <div className="flex items-center mt-2">
          <span className="text-yellow-500 text-lg">⭐ ⭐ ⭐ ⭐ ⭐</span>
        </div>
        <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
          Buy Now
        </button>
        <Link to="/photos" className="mt-4 block text-blue-500 hover:underline">
          Back to Gallery
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
 



