import { Link } from "react-router-dom";
import Heroimage from "../assets/images/Hero.png"
function Hero() {
    return (
        <section className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 overflow-hidden">

            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 items-center min-h-[700px] gap-12">

                    {/* Left */}

                    <div>

                        <span className="inline-block bg-blue-600 text-white  px-5  rounded-full text-sm font-semibold mb-6">
                            🔥 New Collection 2026
                        </span>

                        <h1 className=" w-full text-4xl lg:text-6xl font-bold  text-white ">

                            Premium <span className=" text-blue-400">Electronics</span> For Everyone

                        </h1>

                        <p className="text-gray-300 text-lg mt-4 leading-8 max-w-xl">

                            Upgrade your lifestyle with the latest smartphones,
                            laptops, gaming accessories and premium gadgets.
                            Fast delivery, secure payment and unbeatable prices.

                        </p>

                        <div className="flex flex-wrap gap-5 mt-8">

                            <Link
                                to="/product"
                                className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-lg text-white font-semibold"
                            >
                                Shop Now
                            </Link>

                            <Link
                                to="/about"
                                className="border border-white text-white hover:bg-white hover:text-black transition px-8 py-4 rounded-lg font-semibold"
                            >
                                Learn More
                            </Link>

                        </div>

                        <div className="flex gap-12 mt-8">

                            <div>

                                <h2 className="text-3xl font-bold text-white">
                                    10K+
                                </h2>

                                <p className="text-gray-400">
                                    Happy Customers
                                </p>

                            </div>

                            <div>

                                <h2 className="text-3xl font-bold text-white">
                                    500+
                                </h2>

                                <p className="text-gray-400">
                                    Premium Products
                                </p>

                            </div>

                            <div>

                                <h2 className="text-3xl font-bold text-white">
                                    24/7
                                </h2>

                                <p className="text-gray-400">
                                    Support
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* Right */}

                    <div className="relative flex justify-center">

                        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30"></div>

                        <img
                            src={Heroimage}
                            alt="Hero"
                            className="relative w-[700px] lg:w-[950px] max-w-none hover:scale-105 transition duration-500"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;