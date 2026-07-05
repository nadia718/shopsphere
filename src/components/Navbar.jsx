import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import logoimage from "../assets/images/logo.png";

function Navbar() {
    const { cart } = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const cartTotal = cart.reduce((total, item) => {
        return total + item.quantity;
    }, 0);

    return (
        <header className="bg-white text-black shadow-md sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo */}
                    <Link to="/" className="w-32 sm:w-36 flex items-center">
                        <img
                            src={logoimage}
                            alt="Logo"
                            className="w-full h-full object-contain"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="/" className="text-black hover:text-red-900 transition">
                            Home
                        </Link>
                        <Link to="/product" className="text-black hover:text-red-900 transition">
                            Products
                        </Link>
                        <Link to="/about" className="text-black hover:text-red-900 transition">
                            About
                        </Link>
                        <Link to="/contact" className="text-black hover:text-red-900 transition">
                            Contact
                        </Link>
                    </div>

                    {/* Desktop Icons */}
                    <div className="hidden md:flex items-center space-x-5">
                        <Link to="/search" className="text-black hover:text-red-900">
                            <FaSearch />
                        </Link>

                        <Link to="/cart" className="relative text-black hover:text-red-900">
                            <FaShoppingCart size={22} />
                            {cartTotal > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                    {cartTotal}
                                </span>
                            )}
                        </Link>

                        <Link to="/login" className="text-black hover:text-red-900">
                            <FaUser />
                        </Link>
                    </div>

                    {/* Mobile Right Icons + Hamburger */}
                    <div className="flex md:hidden items-center space-x-4">
                        <Link to="/cart" className="relative text-black hover:text-red-900">
                            <FaShoppingCart size={20} />
                            {cartTotal > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                    {cartTotal}
                                </span>
                            )}
                        </Link>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-black text-xl"
                        >
                            {menuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden pb-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-3 pt-4">
                            <Link
                                to="/"
                                className="text-black hover:text-red-900"
                                onClick={() => setMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/product"
                                className="text-black hover:text-red-900"
                                onClick={() => setMenuOpen(false)}
                            >
                                Products
                            </Link>
                            <Link
                                to="/about"
                                className="text-black hover:text-red-900"
                                onClick={() => setMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className="text-black hover:text-red-900"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link
                                to="/search"
                                className="text-black hover:text-red-900"
                                onClick={() => setMenuOpen(false)}
                            >
                                Search
                            </Link>
                            <Link
                                to="/login"
                                className="text-black hover:text-red-900"
                                onClick={() => setMenuOpen(false)}
                            >
                                Login
                            </Link>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Navbar;