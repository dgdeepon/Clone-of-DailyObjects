import "./App.css";
import Footer from "./Homepage/Footer/Footer";
import LandingPage from "./Homepage/LandingPage/LandingPage";
import Navbar from "./Homepage/Navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <LandingPage />
            {/* <Footer /> */}
        </div>
    );
}

export default App;
