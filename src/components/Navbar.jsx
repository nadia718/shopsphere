import { Link } from "react-router-dom";
import { FaShoppingCart, FaSearch, FaUser } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import logoimage from "../assets/images/logo.png"

function Navbar({ }) {

    const { cart } = useContext(CartContext);

    const cartTotal = cart.reduce((total, item) => {
        return total + item.quantity;

    }, 0);
    return (
        <header className="bg-white text-black p-4 shadow-md">
            <nav className="container max-w-7xl mx-auto flex items-center justify-between">

                <Link to="/" className="w-50  flex items-center">
                    <img
                        src={logoimage}
                        alt="Logo"
                        className="w-full h-full object-contain"
                    />
                </Link>

                <div className="space-x-4">
                    <Link to="/" className="text-black hover:text-red-900">
                        Home
                    </Link>
                    <Link to="/product" className="text-black hover:text-red-900">
                        Products
                    </Link>
                    <Link to="/about" className="text-black hover:text-red-900">
                        About
                    </Link>
                    <Link to="/contact" className="text-black hover:text-red-900">
                        Contact
                    </Link>
                    {/* <Link to="/Success" className="text-black hover:text-red-900">
                        Success
                    </Link> */}
                    {/* <Link to="/cart" className="text-black hover:text-red-900">
                        Cart (0)
                    </Link> */}
                </div>
                <div className="flex items-center space-x-4">
                    {/* <Link to="/login" className="bg-red-900 text-white px-4 py-2 rounded hover:bg-red-700 uppercase font-bold">
                        Sign In
                    </Link> */}
                    <div className="flex items-center space-x-4">
                        <Link to="/search" className="text-black hover:text-red-900">
                            <FaSearch />
                        </Link>
                        <Link
                            to="/cart"
                            className="relative text-black hover:text-red-900">
                            <FaShoppingCart size={22} />

                            {cartTotal > 0 && (
                                <span
                                    className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                                >
                                    {cartTotal}
                                </span>
                            )}
                        </Link>
                        <Link to="/login" className="text-black hover:text-red-900">
                            <FaUser />
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;