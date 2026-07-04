import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBanner from "../components/pageBanner";
function Register() {
    return (
        <>
            <Navbar />
            <PageBanner />
            <PageBanner 
                title="Register"
                description="Please create an account to continue."
            />
            <h1>Register Page</h1>
            <p>Please create an account to continue.</p>

            <Footer />
        </>
    );
}
export default Register;