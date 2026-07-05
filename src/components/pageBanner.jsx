function PageBanner({ title, description }) {
    return (
        <section className="w-full bg-blue-900 px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
            <div className="max-w-5xl mx-auto text-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {title}
                </h1>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
                    {description}
                </p>
            </div>
        </section>
    );
}

export default PageBanner;


