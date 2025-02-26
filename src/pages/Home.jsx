import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Image Gallery</h1>
      <p className="text-xl mb-8">Explore our collection of high-quality images</p>
      <Link 
        to="/photos" 
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Browse Photos
      </Link>
    </div>
  );
}

export default Home;