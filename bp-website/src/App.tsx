import '@/index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer";

import Home from "@/pages/Home";
import Team from "@/pages/Team";

function App() {
    return (
        <Router>
            <div className="min-h-screen h-fit flex flex-col font-main text-2xl">
                <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/team" element={<Team />} />


                        <Route path="*" element={<Home />} />
                    </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
