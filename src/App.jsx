import './App.css'
import Layout from "./components/Layout/Layout.jsx";
import {Route, Routes} from "react-router-dom";
// import Reserve from "./components/Reserve/Reserve.jsx";
import EventPage from "./components/EventPage/EventPage.jsx";

function App() {

    return (
        <>
          <Routes>
              <Route path="/" element={<Layout />} />
              <Route path="/event/:id" element={<EventPage/>} />
          </Routes>
        </>
    )
}

export default App


