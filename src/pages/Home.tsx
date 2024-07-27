import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div id="home" className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="vintage-frame p-8 bg-white bg-opacity-70 rounded shadow-lg text-center">
          <h1 className="text-4xl font-bold mb-4">Karolina Wadecka</h1>
          <div id="mainPage">
            <h2 className="text-2xl font-semibold mb-2">Welcome on my portfolio page!</h2>
            <p className="mb-4">Explore the sections to see more cool stuff!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
