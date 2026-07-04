import { useNavigate } from "react-router-dom";
import Iphoneimage from "../assets/images/Iphone.png"
import Laptopimage from "../assets/images/MacBook Pro M5.png"
import Gamingimage from "../assets/images/PlayStation 6.png"
import Accessoriesimage from "../assets/images/JBL Charge 6.png"


function Categories() {

    const navigate = useNavigate();

    const categories = [
        {
            id: 1,
            name: "Smartphone",
            image: Iphoneimage,
        },
        {
            id: 2,
            name: "Laptop",
            image: Laptopimage,
        },
        {
            id: 3,
            name: "Gaming",
            image: Gamingimage,
        },
        {
            id: 4,
            name: "Accessories",
            image: Accessoriesimage,
        },
    ];

    const handleCategory = (category) => {
        navigate(`/product?category=${category}`);
    };

    return (
        <section className="py-20 bg-gray-50">

            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-14">

                    <h2 className="text-4xl font-bold">
                        Shop By Category
                    </h2>

                    <p className="text-gray-500 mt-3">
                        Browse our premium collections
                    </p>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {categories.map((category) => (

                        <div
                            key={category.id}
                            onClick={() => handleCategory(category.name)}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl cursor-pointer transition duration-300 p-8 text-center group"
                        >

                            <div className="w-full flex justify-center items-center">

                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="h-28 object-contain group-hover:scale-110 transition duration-300"
                                />

                            </div>

                            <h3 className="text-xl font-semibold mt-6">
                                {category.name}
                            </h3>

                            <button
                                className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                            >
                                Shop Now
                            </button>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}

export default Categories;