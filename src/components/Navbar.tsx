import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-200 text-black px-6 py-4 flex items-center justify-between fixed top-0 w-full z-50">
      {/* Логотип */}
      <Link to="/about" className="flex items-center space-x-3">
        <img 
          src="/Logo.jpg" 
          alt="Logo" 
          className="w-16 h-16 rounded-full object-cover"
        />
        <span  className="hover:text-pink-400 hover:scale-105 transition text-xl font-bold">Kvitka</span>
      </Link>

      {/* Навігація */}
      <nav className="hidden md:flex gap-10 text-lg font-semibold">
        <Link to="/" className="text-xl font-bold hover:scale-105">Головна</Link>
        <Link to="/catalog" className="text-xl font-bold hover:scale-105">Каталог</Link>
        <Link to="/about" className="text-xl font-bold hover:scale-105">Про нас</Link>
      </nav>

      {/* Правий блок: Профіль та Кошик */}
      <div className="flex items-center gap-4">
        <Link
          to="/profile"
          className="bg-white text-blue-600 px-5 py-2 rounded-full font-semibold hover:bg-gray-300 transition"
        >
          Профіль
        </Link>
        <Link to="/cart" className="relative">
          <img 
            src="/images/cart.png" 
            alt="Корзина" 
            className="bg-white w-10 h-10 rounded-full hover:bg-gray-300 transition"
          />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
