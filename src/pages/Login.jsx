import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageBanner from "../components/pageBanner";
function Login() {
    return (
        <>
            <Navbar />
            <PageBanner 
                title="Login"
                description="Please log in to your account."
            />
            <h1>Login Page</h1>
            <p>Please log in to your account.</p>

            <Footer/>
        </>
    );
}
export default Login;