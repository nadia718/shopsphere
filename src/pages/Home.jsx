import AboutSection from "../components/AboutSection";
import Categories from "../components/Categories";
import ContactCTA from "../components/ContactCTA";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

function Home() {
    return (
        <>
            <Navbar  />
            <Hero />
            <Categories/>
            <AboutSection />
            <FeaturedProducts />
            <WhyChooseUs />
            <Testimonials />
            <ContactCTA />
            <Footer />
           
        </>
    );
}
export default Home;