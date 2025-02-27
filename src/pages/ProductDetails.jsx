import React from "react";
import { useParams, Link } from "react-router-dom";
import photoData from '../data/products.json';

// Sample product data
/* const products = [
  {
    id: "1",
    name: "Canon EOS Rebel T1i",
    image: "https://via.placeholder.com/200", // Replace with actual image
    description: "A powerful DSLR camera for professional photography.",
  },
  {
    id: "2",
    name: "DJI Air",
    image: "https://via.placeholder.com/200",
    description: "A high-performance drone for stunning aerial shots.",
  },
  {
    id: "3",
    name: "Apple 10.2-inch iPad",
    image: "https://via.placeholder.com/200",
    description: "A sleek and powerful iPad for all your creative needs.",
  },
  {
    id: "4",
    name: "iPhone 14",
    image: "https://via.placeholder.com/200",
    description: "The latest iPhone with advanced camera and performance.",
  },
]; */

const ProductDetails = () => {
  const { id } = useParams();
  const product =photoData.find((product) => String(product._id) === String(id));

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-60 object-cover rounded"
        />
        <h2 className="text-2xl font-semibold mt-4">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <Link to="/photos" className="mt-4 block text-blue-500 hover:underline">
          Back to Gallery
        </Link>
      </div>
    </div>
  );
};

export default ProductDetails;
