import "./App.css";
import MainRoute from "./routes/MainRoute";
import AllRoutes from "./Admin/AdminRoutes/AllRoutes";
import PaymentForm from "./Pages/Paymentpage/PaymentForm";
import Checkout from "./Pages/Paymentpage/Checkout";




function App() {
    return (

        <div className="App">
            <MainRoute />
            <AllRoutes />  
        </div>
    );
}

export default App;
