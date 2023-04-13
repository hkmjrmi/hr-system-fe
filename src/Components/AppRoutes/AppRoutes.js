import { Route, Routes } from "react-router-dom";
import Leave from "../../Pages/Leave";
import Dashboard from "../../Pages/Dashboard";
import Profile from "../../Pages/Profile";

function AppRoutes() {
    return ( 
        
    <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/leave" element={<Leave />}></Route>
        <Route path="/profile" element={<Profile />}></Route>

    </Routes>

    );
}

export default AppRoutes;