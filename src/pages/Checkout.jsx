import Navbar from "../components/Navbar";
import PageBanner from "../components/pageBanner";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Footer from "../components/Footer";


function Checkout() {

    const {cart, setCart} = useContext(CartContext);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        address: "",
        city: "",
        country: "",
        zipCode: "",
    });


    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.firstName === "") {
            toast.error("Please enter first name");
            return;
        }
        if (formData.email === "") {
            toast.error("Please enter first email")
            return;
        }
        if (formData.lastName === "") {
            toast.error("Please enter first last name")
            return;
        } if (formData.phoneNumber === "") {
            toast.error("Please enter first last Phone number")
            return;
        }
        if (formData.address === "") {
            toast.error("Please enter address");
            return;
        }

        if (formData.city === "") {
            toast.error("Please enter city");
            return;
        }

        if (formData.country === "") {
            toast.error("Please enter country");
            return;
        }

        if (formData.zipCode === "") {
            toast.error("Please enter zip code");
            return;
        }

        toast.success("Order placed successfully");
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            address: "",
            city: "",
            country: "",
            zipCode: "",
        })

        setCart([]);

        navigate("/success");


    }

    


    return (
        <>
            <Navbar  />
            <PageBanner
                title="Checkout"
                description="Manage your checkout"
            />

            <div className="max-w-7xl mx-auto px-4 py-12">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Billing Form */}

                    <div className="lg:col-span-2 bg-white shadow-lg rounded-xl p-8">

                        <h2 className="text-2xl font-bold mb-8">
                            Billing Details
                        </h2>

                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />

                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />

                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />

                            <input
                                type="text"
                                name="address"
                                placeholder="Street Address"
                                value={formData.address}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg px-4 py-3 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />

                            <input
                                type="text"
                                name="city"
                                placeholder="City"
                                value={formData.city}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />

                            <input
                                type="text"
                                name="country"
                                placeholder="Country"
                                value={formData.country}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />

                            <input
                                type="text"
                                name="zipCode"
                                placeholder="Zip Code"
                                value={formData.zipCode}
                                onChange={handleChange}
                                className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />

                            <div className="md:col-span-2">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                                >
                                    Place Order
                                </button>
                            </div>

                        </form>

                    </div>

                    {/* Order Summary */}

                    <div className="bg-white shadow-lg rounded-xl p-8 h-fit sticky top-8">

                        <h2 className="text-2xl font-bold mb-6">
                            Order Summary
                        </h2>

                        {cart.length === 0 ? (

                            <p className="text-gray-500">
                                Your cart is empty.
                            </p>

                        ) : (

                            <>
                                {cart.map((item) => (

                                    <div
                                        key={item.id}
                                        className="flex justify-between items-center border-b py-4"
                                    >

                                        <div>

                                            <h3 className="font-medium">
                                                {item.title}
                                            </h3>

                                            <p className="text-sm text-gray-500">
                                                Qty : {item.quantity}
                                            </p>

                                        </div>

                                        <p className="font-semibold">
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>

                                    </div>

                                ))}

                                <div className="flex justify-between text-xl font-bold mt-6">

                                    <span>Total</span>

                                    <span>
                                        $
                                        {cart
                                            .reduce(
                                                (total, item) =>
                                                    total + item.price * item.quantity,
                                                0
                                            )
                                            .toFixed(2)}
                                    </span>

                                </div>

                            </>
                        )}

                    </div>

                </div>

            </div>

            <Footer />

        </>
    );
}

export default Checkout;