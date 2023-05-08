import "./App.css";
import MainRoute from "./routes/MainRoute";
import AllRoutes from "./Admin/AdminRoutes/AllRoutes";





function App() {
    return (

        <div className="App">
            <MainRoute />
            <AllRoutes />
        </div>
    );
}

export default App;
