function Testimonials() {

    const testimonials = [
        {
            id: 1,
            name: "John Smith",
            role: "Web Developer",
            image: "/images/testimonials/user1.jpg",
            review:
                "Amazing shopping experience! The products arrived on time and the quality exceeded my expectations. Highly recommended.",
        },
        {
            id: 2,
            name: "Sarah Johnson",
            role: "UI/UX Designer",
            image: "/images/testimonials/user2.jpg",
            review:
                "Excellent customer support and premium quality electronics. I will definitely shop here again.",
        },
        {
            id: 3,
            name: "Michael Brown",
            role: "Business Owner",
            image: "/images/testimonials/user3.jpg",
            review:
                "Fast delivery, secure payment, and outstanding service. One of the best online stores I've used.",
        },
    ];

    return (
        <section className="py-20 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <div className="text-center mb-16">

                    <span className="text-blue-600 uppercase font-semibold tracking-widest">
                        Testimonials
                    </span>

                    <h2 className="text-4xl font-bold mt-4">
                        What Our Customers Say
                    </h2>

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        Thousands of happy customers trust our products and
                        services. Here's what they say about us.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {testimonials.map((item) => (

                        <div
                            key={item.id}
                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                        >

                            {/* Stars */}

                            <div className="text-yellow-400 text-2xl">

                                ⭐⭐⭐⭐⭐

                            </div>

                            {/* Review */}

                            <p className="text-gray-600 mt-6 leading-8 italic">

                                "{item.review}"

                            </p>

                            {/* User */}

                            <div className="flex items-center gap-4 mt-8">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-600"
                                />

                                <div>

                                    <h3 className="font-bold text-lg">
                                        {item.name}
                                    </h3>

                                    <p className="text-gray-500 text-sm">
                                        {item.role}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Testimonials;