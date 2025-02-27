import { useState, useEffect } from 'react';
import photoData from '../data/products.json';

function Products() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    setTimeout(() => {
      setPhotos(photoData);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-xl">Loading photos...</div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Photo Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {photos.map((photo) => (
          <div key={photo._id} className="bg-white rounded-lg shadow-md  hover:shadow-xl transition-shadow">
            <div className="h-48 ">
              <img 
                src={photo.image} 
                alt={photo.title} 
                className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold truncate mb-2">{photo.title}</h2>
              <a 
                href={`/photos/${photo._id}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;