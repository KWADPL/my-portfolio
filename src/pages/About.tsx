import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About: React.FC = () => {
    return(
        <div id="about">
        <Header />
        <main>
            <h1>About Me</h1>
            <p>Just simple girl looking for job</p>
        </main>
        <Footer />
        </div>
    );
};
export default About;