import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBanner from "../components/pageBanner";
import Testimonials from "../components/Testimonials";

function About() {
    return (
        <>
            <Navbar />
            <PageBanner 
                title="About Us"
                description="Learn more about our company, our mission, and our values. We are committed to providing the best products and services to our customers."
            />
            <AboutSection />
            <Testimonials />
            <Footer />
        </>
    );
}
export default About;