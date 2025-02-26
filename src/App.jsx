import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Product';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container mx-auto py-4 px-4 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/photos" element={<Products />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
