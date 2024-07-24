import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

const Projects: React.FC = () =>{
    const projectList =[
        {title: 'Project 1', description: 'Description project2', imageUrl: './images/Project1.png'},
        {title: 'Project 1', description: 'Description project2', imageUrl: './images/Project1.png'},
    ];

    return(
        <div id="projects">
            <Header />
            <main>
                <h1>My projects</h1>
                <div className="project-list">
                    {projectList.map((project, index) => ( <ProjectCard key={index} {...project}/>))}
                </div>
            </main>
            <Footer/>
        </div>
    )
};

export default Projects;