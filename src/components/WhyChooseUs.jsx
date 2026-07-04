function WhyChooseUs() {
    const features = [
        {
            id: 1,
            icon: "🚚",
            title: "Free Shipping",
            description: "Enjoy free shipping on all orders over $100 with fast worldwide delivery."
        },
        {
            id: 2,
            icon: "🛡️",
            title: "Secure Payment",
            description: "100% secure payment methods to keep your transactions safe."
        },
        {
            id: 3,
            icon: "⭐",
            title: "Premium Quality",
            description: "We offer only genuine and high-quality electronics from trusted brands."
        },
        {
            id: 4,
            icon: "🎧",
            title: "24/7 Support",
            description: "Our support team is available anytime to help you with your questions."
        },
    ];

    return (
        <section className="py-20 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <span className="text-blue-600 uppercase tracking-widest font-semibold">
                        Why Choose Us
                    </span>

                    <h2 className="text-4xl font-bold mt-4">
                        We Provide The Best Shopping Experience
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        We combine premium quality products, affordable prices,
                        secure payments, and fast delivery to ensure every
                        customer enjoys the best shopping experience.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {features.map((item) => (

                        <div
                            key={item.id}
                            className="bg-gray-50 rounded-2xl p-8 text-center shadow hover:shadow-xl hover:-translate-y-2 transition duration-300"
                        >

                            <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-4xl">

                                {item.icon}

                            </div>

                            <h3 className="text-2xl font-semibold mt-6">
                                {item.title}
                            </h3>

                            <p className="text-gray-600 mt-4 leading-7">
                                {item.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default WhyChooseUs;