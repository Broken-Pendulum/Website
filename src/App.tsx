import '@/index.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function App() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-dark-amethyst">
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<Home />} />
                        </Routes>
                    <Footer />
                </Router>
            </div>
        </>
    );
}

export default App;
