import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBanner from "../components/pageBanner";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Success() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <PageBanner
                title="Order Success"
                description="Thank you for shopping with us"
            />

            <div className="max-w-3xl mx-auto py-20 px-4">

                <div className="bg-white shadow-xl rounded-xl p-10 text-center">

                    <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />

                    <h1 className="text-4xl font-bold mb-4">
                        Order Placed Successfully 🎉
                    </h1>

                    <p className="text-gray-600 mb-8">
                        Thank you for shopping with ShopSphere.
                        Your order has been placed successfully.
                    </p>

                    <button
                        onClick={() => navigate("/product")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
                    >
                        Continue Shopping
                    </button>

                </div>

            </div>

            <Footer />
        </>
    );
}

export default Success;