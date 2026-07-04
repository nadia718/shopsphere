function FilterBar({ sortOption, setSortOption  , selectedCategory, setSelectedCategory, 
    selectedPriceRange, setSelectedPriceRange, selectedBrand, setSelectedBrand }) {
    return (
        <div className="bg-white  p-4  mb-6 flex flex-wrap gap-4 items-center justify-between">

            <div>
                <label className="font-semibold mr-2">Sort By</label>

                <select className=" py-2 px-6 rounded shadow" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                    <option>Newest First</option>
                    <option>Price Low to High</option>
                    <option>Price High to Low</option>
                </select>
            </div>

            <div>
                <label className="font-semibold mr-2">Category</label>

                <select className=" py-2 px-6 rounded shadow" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option>All Categories</option>
                    <option>Smartphone</option>
                    <option>Laptop</option>
                    <option>Tablet</option>
                </select>
            </div>

            <div>
                <label className="font-semibold mr-2">Price</label>

                <select className="py-2 px-6 rounded shadow" value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)}>
                    <option>All Prices</option>
                    <option>$0 - $500</option>
                    <option>$500 - $1000</option>
                    <option>$1000+</option>
                </select>
            </div>

            <div>
                <label className="font-semibold mr-2">Brand</label>

                <select className="py-2 px-6 rounded shadow" value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
                    <option>All Brands</option>
                    <option>Apple</option>
                    <option>Samsung</option>
                    <option>Google</option>
                </select>
            </div>

        </div>
    );
}

export default FilterBar;