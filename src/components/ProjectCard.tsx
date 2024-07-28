import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;
