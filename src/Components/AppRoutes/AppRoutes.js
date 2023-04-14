import { Route, Routes } from "react-router-dom";
import Leave from "../../Pages/Leave";
import Dashboard from "../../Pages/Dashboard";
import Profile from "../../Pages/Profile";
import ViewCalendar from "../ViewCalendar";

function AppRoutes() {
    return ( 
        
    <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/leave" element={<Leave />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/calendar" element={<ViewCalendar />}></Route>
    </Routes>

    );
}

export default AppRoutes;