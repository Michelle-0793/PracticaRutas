import React from "react";

import HomeContent from "../components/HomeContent";
import AboutSection from "../components/AboutSection";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
    return (
        <div>
        <Header />
        <Navbar />
        <HomeContent />
        <AboutSection />
        <Footer />


        </div>
    )
}

export default Home