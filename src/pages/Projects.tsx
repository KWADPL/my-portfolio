import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import imageToAdd from '../assets/images/Project1-img1.png';
import imageToAdd2 from '../assets/images/Project2-img.png';

const Projects = () => {
  const projectList = [
    {
      title: 'Pokedex Project',
      description: `
        This project is a Pokedex application built using JSX and React. It allows users to search for and retrieve information about various Pokémon using a public API. The key features include:
        
        - **Search Functionality:** Users can search for Pokémon by name.
        - **Detailed Information:** Displays the Pokémon's name, image, height, and weight.
        - **API Integration:** Fetches data from a public Pokémon API to ensure accurate and up-to-date information.
        - **Responsive UI:** Designed with a simple and intuitive user interface.

        Technologies used:
        - **React:** For building the dynamic and responsive UI.
        - **JSX:** For writing React components.
        - **CSS:** For custom styling.
        - **API Integration:** To fetch and display Pokémon data.

        You can find the source code for this project on [GitHub](https://github.com/KWADPL/pokedex-project).
      `,
      imageUrl: imageToAdd,
    },
    {
      title: 'Online Shopping Website Project',
      description: `
      This project is an online shopping website built to provide users with a seamless e-commerce experience. The website allows users to browse products, add them to their cart, and proceed with a secure checkout process.

      Key Features:
      - **Product Catalog:** Browse a wide range of products with detailed descriptions and high-quality images.
      - **Shopping Cart:** Add products to the shopping cart and manage quantities.
      - **User Authentication:** Secure user registration and login system.

      Technologies used:
      - **Node.js and Express:** For the backend server.
      - **MongoDB:** For the database to store user and order data.
    

      You can find the source code for this project on [GitHub](https://github.com/KwadPL/online-shopping-website).
    `,
      imageUrl: imageToAdd2,
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <Header />
      <main className="projects-main">
        <h1 className="projects-title">PROJECTS</h1>
        <p className="projects-entry">This section contains my selected projects that demonstrate my skills in programming,
           design, and working with various web technologies. Each project includes a short description,
            a screenshot, and a link to the GitHub repository with the full source code.</p>
        <div className="project-list">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
