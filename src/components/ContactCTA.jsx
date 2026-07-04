import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";





function ContactCTA() {

    const [formData, setFormData] = useState({
        firstName: "",
        email: "",
        message: "",
    });


    const handleSubmit = (e) => {

        e.preventDefault();

        if (formData.firstName === "") {
            toast.error("Please enter first name");
            return;
        }

        if (formData.email === "") {
            toast.error("Please enter email");
            return;
        }

        if (formData.message === "") {
            toast.error("Please enter message");
            return;
        }

        toast.success("Your message has been sent successfully!");

        setFormData({
            firstName: "",
            email: "",
            message: "",
        });



       


    }
    return (
        <section className="py-20 bg-gradient-to-r from-white-100 ">

            <div className="max-w-7xl mx-auto px-6">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left */}

                    <div>

                        <span className="uppercase tracking-widest text-blue-900 font-semibold">
                            Contact Us
                        </span>

                        <h2 className="text-5xl font-bold text-black mt-4 leading-tight">
                            Need Help Choosing
                            <br />
                            The Right Product?
                        </h2>

                        <p className="text-gray-900 mt-6 text-lg leading-8">

                            Our experts are always ready to help you find
                            the perfect product according to your needs.
                            Contact us today and enjoy premium support.

                        </p>

                    </div>

                    {/* Right */}

                    <div className="bg-blue-50 rounded-3xl shadow-2xl p-10">

                        <h3 className="text-3xl font-bold mb-6">
                            Get In Touch
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-900 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-600"
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            />

                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-900 rounded-xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-600"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />

                            <textarea
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full border border-gray-900 rounded-xl px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-blue-600"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>


                            <button type="submit" className="block text-center bg-blue-600 text-white py-4 px-4 rounded-xl hover:bg-blue-700 transition font-semibold"
                            >
                                Contact Now
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default ContactCTA;