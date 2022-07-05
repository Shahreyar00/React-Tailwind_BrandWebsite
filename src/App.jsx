import React from 'react';
import { About, AllInOne, Footer, Hero, Navbar, Pricing, Support } from "./components";

const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Support />
            <AllInOne />
            <Pricing />
            <Footer />
        </>
    )
}

export default App