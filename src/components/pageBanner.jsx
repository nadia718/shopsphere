function PageBanner({ title, description }) {
    return (
        <div className="w-full bg-blue-900 px-4 sm:px-6 lg:px-8 py-8 md:py-12">

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center">
                {title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-white text-center mt-3 max-w-3xl mx-auto">
                {description}
            </p>

        </div>
    );
}

export default PageBanner;


