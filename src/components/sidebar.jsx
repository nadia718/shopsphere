
function Sidebar({ selectedCategory, setSelectedCategory, maxPrice, setMaxPrice, selectedBrand, setSelectedBrand }) {
    return (
        <div className="bg-white shadow rounded p-5">

            <h2 className="text-xl font-bold mb-5">
                Filters
            </h2>

            {/* Categories */}

            <div className="mb-8">
                <h3 className="font-bold mb-3">
                    Categories
                </h3>

                <div className="space-y-2">

                    <label className="block">
                        <input type="checkbox" className="mr-2"  
                        checked={selectedCategory === "Smartphone"} onChange={() => setSelectedCategory("Smartphone")}/>
                        
                        Smartphone 
                    </label>

                    <label className="block">
                        <input type="checkbox" className="mr-2" 
                         checked={selectedCategory === "Laptop"} onChange={() => setSelectedCategory("Laptop")}/>
                       
                        Laptop
                    </label>

                    <label className="block">
                        <input type="checkbox" className="mr-2"  
                        checked={selectedCategory === "Tablet"} onChange={() => setSelectedCategory("Tablet")}/>
                        
                        Tablet
                    </label>

                    <label className="block">
                        <input type="checkbox" className="mr-2"  
                        checked={selectedCategory === "Smart Watch"} onChange={() => setSelectedCategory("Smart Watch")}/>
                        
                        Smart Watch
                    </label>

                </div>
            </div>

            {/* Price */}

            <div className="mb-8">

                <h3 className="font-bold mb-3">
                    Price Range
                </h3>

                <input
                    type="range"
                    min="0"
                    max="3000"
                    className="w-full"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                />

            </div>

            {/* Brands */}

            <div className="mb-8">

                <h3 className="font-bold mb-3">
                    Brands
                </h3>

                <div className="space-y-2">

                    <label className="block">
                        <input type="checkbox" className="mr-2" 
                        checked={selectedBrand === "Apple"} onChange={() => setSelectedBrand("Apple")}/>
                        Apple
                    </label>

                    <label className="block">
                        <input type="checkbox" className="mr-2" 
                        checked={selectedBrand === "Samsung"} onChange={() => setSelectedBrand("Samsung")}/>
                        Samsung
                    </label>

                    <label className="block">
                        <input type="checkbox" className="mr-2" 
                        checked={selectedBrand === "Dell"} onChange={() => setSelectedBrand("Dell")}/>
                        Dell
                    </label>

                    <label className="block">
                        <input type="checkbox" className="mr-2" 
                        checked={selectedBrand === "HP"} onChange={() => setSelectedBrand("HP")}/>
                        HP
                    </label>

                </div>

            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded">
                Apply Filters
            </button>

        </div>
    );
}

export default Sidebar;