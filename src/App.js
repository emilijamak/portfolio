
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage"
import ShipAppPage from './pages/ShipAppPage'
import ChatAppPage from "./pages/ChatAppPage";





function App() {
    return (
        <div className="App h-screen">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/siuntivezi" element={<ShipAppPage/>}/>
                    <Route path="/chatApp" element={<ChatAppPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;




