import ContactCTA from "../components/ContactCTA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBanner from "../components/pageBanner";




function Contact() {
    return (
        <>
            <Navbar />
            <PageBanner title = "Contact Us" 
            description ="We are here to help you. Please reach out to us with any questions or concerns you may have.
             Our team is dedicated to providing you with the best possible service and support."
            />
            <ContactCTA />

            <Footer />
            
            

            


        </>
    );
}
export default Contact;