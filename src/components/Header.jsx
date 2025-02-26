import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-slate-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Image Gallery</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-sky-300">Home</Link></li>
            <li><Link to="/photos" className="hover:text-sky-300">Photos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;