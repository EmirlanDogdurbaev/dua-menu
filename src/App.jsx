import './App.css'
import Layout from "./components/Layout/Layout.jsx";
import {Route, Routes} from "react-router-dom";

function App() {

    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={X}/>
                </Routes>
            </Layout>
        </>
    )
}

export default App


export const X = () => {
    return <h1>Hello World!</h1>;
}