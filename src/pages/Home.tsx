import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div id="home">
            <Header />
            <main id="name">
                <h1>Karolina Wadecka</h1>
                <div id="mainPage">
                <p >Junior</p><h2 >FRONTED DEVELOPER</h2>
                </div>
            </main>
            <Footer />
        </div>
    );
};
export default Home;