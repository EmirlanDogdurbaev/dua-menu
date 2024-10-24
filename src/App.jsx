import './App.css';
import Layout from "./components/Layout/Layout.jsx";
import { Route, Routes, Navigate } from "react-router-dom";
import EventPage from "./components/EventPage/EventPage.jsx";
import ReservationsTable from "./components/ReservationsTable/ReservationsTable.jsx";
import Login from "./components/Login/Login.jsx";

function App() {
    return (
        <>
            {localStorage.getItem("access") ? (
                <Routes>
                    <Route path="/" element={<Layout />} />
                    <Route path="/event/:id" element={<EventPage />} />
                    <Route path="/admin" element={<ReservationsTable />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            ) : (
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Layout />} />
                    <Route path="/event/:id" element={<EventPage />} />
                    <Route path="*" element={<Navigate to="/" />} /> {/* Redirect invalid routes to home */}
                </Routes>
            )}
        </>
    );
}

export default App;
