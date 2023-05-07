import "./App.css";
import { Login } from "./Admin/Login";
import Register from "./Admin/Register";
import Navbar from "./Homepage/Navbar/Navbar";
import LandingPage from "./Homepage/LandingPage/LandingPage";
import Footer from "./Homepage/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <LandingPage />
            <Footer />
        </div>
    );
}

export default App;
