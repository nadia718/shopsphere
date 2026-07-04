import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import logoimage from "../assets/images/logo.png";
function Footer() {

    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {

        e.preventDefault();

        if (email === "") {
            toast.error("Please enter your email");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            toast.error("Please enter a valid email");
            return;
        }

        toast.success("Thanks for subscribing!");

        setEmail("");

    };

    return (

        <footer className="bg-slate-900 text-white pt-20">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Company */}

                    <div>

                        <Link to="/" className="w-50  flex items-center">
                            <img
                                src={logoimage}
                                alt="Logo"
                                className="w-full h-full object-contain"
                            />
                        </Link>

                        <p className="text-gray-400 mt-6 leading-7">

                            Discover premium electronics with the latest
                            technology, affordable prices and fast delivery.

                        </p>

                    </div>

                    {/* Quick Links */}

                    <div>

                        <h3 className="text-xl font-semibold mb-6">

                            Quick Links

                        </h3>

                        <ul className="space-y-4 text-gray-400">

                            <li><Link to="/">Home</Link></li>

                            <li><Link to="/product">Products</Link></li>

                            <li><Link to="/about">About</Link></li>

                            <li><Link to="/contact">Contact</Link></li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div>

                        <h3 className="text-xl font-semibold mb-6">

                            Contact

                        </h3>

                        <ul className="space-y-4 text-gray-400">

                            <li>📍 New York, USA</li>

                            <li>📞 +1 234 567 890</li>

                            <li>✉ info@electroshop.com</li>

                        </ul>

                    </div>

                    {/* Newsletter */}

                    <div>

                        <h3 className="text-xl font-semibold mb-6">

                            Newsletter

                        </h3>

                        <p className="text-gray-400 mb-5">

                            Subscribe to receive latest offers and updates.

                        </p>

                        <form
                            onSubmit={handleSubscribe}
                            className="space-y-4"
                        >

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                className="w-full px-4 py-3 rounded-lg bg-white text-black outline-none"
                            />

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
                            >
                                Subscribe
                            </button>

                        </form>

                    </div>

                </div>

                <hr className="border-gray-700 my-12" />

                <div className="flex flex-col md:flex-row justify-between items-center pb-8">

                    <p className="text-gray-400">

                        © 2026 ElectroShop. All Rights Reserved.

                    </p>

                    <div className="flex gap-6 mt-5 md:mt-0">

                        <a
                            href="#"
                            className="hover:text-blue-500 transition"
                        >
                            Facebook
                        </a>

                        <a
                            href="#"
                            className="hover:text-blue-500 transition"
                        >
                            Instagram
                        </a>

                        <a
                            href="#"
                            className="hover:text-blue-500 transition"
                        >
                            LinkedIn
                        </a>

                    </div>

                </div>

            </div>

        </footer>

    );

}

export default Footer;