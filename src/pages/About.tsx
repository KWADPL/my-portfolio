import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import imageToAdd from '../assets/images/415149329_24655624780717981_6942141693481990154_n.jpg';

const About = () => {
  return (
    <div id="about" className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="vintage-frame p-8 bg-white bg-opacity-70 rounded shadow-lg text-center mx-4">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="mb-4">
            I am a graduate with a practical profile in the discipline of Technical Computer Science and Telecommunications,
            specializing in Database Design and Analysis. I completed my studies at the Academy of Economics and Humanities in Warsaw.
            I am open to new innovations, tasks, and enjoy learning new things. I program in JavaScript, CSS, HTML, and React.
            I aspire to become a <strong>Junior Frontend Developer</strong> and aim to expand my competencies by learning the latest programming solutions and technologies,
            as well as honing my existing skills. Personal development is important to me due to my own motivation and the desire to create solutions that make work easier.
            In the future, I want to become a Frontend Developer. I am looking for a job or an internship as a junior front-end developer. My name is Karolina, and I am a young and energetic programmer.
            I am glad you want to get to know me. Please take a look at my 
          </p>
          <img src={imageToAdd} alt="me" className="my-photo my-4 mx-auto rounded-full border-2" />
          <button className="bg-vintage-pink text-black py-2 px-4 rounded-full transition duration-300 ease-in-out hover:bg-pink-500">
            <a href='#' className="text-black no-underline">CV</a>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
