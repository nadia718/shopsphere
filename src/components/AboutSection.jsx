import { Link } from "react-router-dom";
import Aboutimage from "../assets/images/About.png"

function AboutSection() {
    return (
        <section className="py-20 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Image */}

                    <div className="relative">

                        <img
                            src={Aboutimage}
                            alt="About Store"
                            className="rounded-2xl shadow-2xl w-full"
                        />

                        <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">

                            <h2 className="text-4xl font-bold">
                                10+
                            </h2>

                            <p>
                                Years Experience
                            </p>

                        </div>

                    </div>

                    {/* Right Content */}

                    <div>

                        <span className="text-blue-600 font-semibold uppercase tracking-widest">
                            About Our Store
                        </span>

                        <h2 className="text-4xl font-bold mt-2 leading-tight">

                            We Deliver Premium
                            <br />
                            Electronics
                            <span className="text-blue-600">
                                Worldwide
                            </span>

                        </h2>

                        <p className="text-gray-600 mt-8 leading-8">

                            We provide high-quality electronics including
                            smartphones, laptops, gaming accessories,
                            smart watches and many more. Our mission is
                            to deliver premium products with excellent
                            customer service and fast shipping.

                        </p>

                        {/* Features */}

                        <div className="grid grid-cols-2 gap-6 mt-10">

                            <div className="flex items-center gap-3">

                                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                                    ✓
                                </div>

                                <p className="font-medium">
                                    Premium Quality
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                                    ✓
                                </div>

                                <p className="font-medium">
                                    Fast Delivery
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                                    ✓
                                </div>

                                <p className="font-medium">
                                    Secure Payment
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
                                    ✓
                                </div>

                                <p className="font-medium">
                                    24/7 Support
                                </p>

                            </div>

                        </div>

                        <Link
                            to="/about"
                            className="inline-block mt-10 bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition"
                        >
                            Learn More
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default AboutSection;