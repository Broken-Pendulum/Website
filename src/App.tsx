import '@/index.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function App() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="fixed inset-0 -z-50 bg-gradient-to-b from-void to-exosphere" />
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
