import React from 'react';
import Galaxia from '../images/galaxia.jpg';
import GabrielDill from '../images/gabriel-dill.png';
import styled from 'styled-components';

const Background = styled.div`
  background-image: url(${Galaxia});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  padding: 1rem; 
  width: 100%;
  max-width: 1200px;
`;

const ProjectCard = styled.div`
  background: linear-gradient(135deg, #121212, #222222);
  padding: 2.5rem;
  border-radius: 1rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem 0; 
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 0.3125rem;
  margin-bottom: 1.25rem;
`;

const Button = styled.button`
  background-color: #333;
  color: #ffffff;
  border: none;
  padding: 0.625rem 1.25rem;
  border-radius: 0.3125rem;
  transition: background-color 0.3s;
  width: 100%;
  cursor: pointer;
  margin-bottom: 0.625rem; 

  &:hover {
    background-color: #555;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
  font-family: monospace;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.2rem; 
    margin-bottom: 0.75rem; 
  }
`;

const ProjectComment = styled.p`
  font-size: 1rem;
  margin-top: 1.25rem;
  line-height: 1.5;
  font-family: Arial, sans-serif;
  text-align: justify;
  color: #d3d3d3;

  @media (max-width: 768px) {
    font-size: 0.875rem;
    margin-top: 1rem;
  }
`;

const Project = ({ name, image, siteLink, apiLink, frontendLink, controlInterfaceLink, comment }) => {
  return (
    <ProjectCard>
      <ProjectTitle>{name}</ProjectTitle>
      <ProjectImage src={image} alt={name} />
      <Button onClick={() => window.open(siteLink, '_blank')}>Acesse o Site</Button>
      <Button onClick={() => window.open(apiLink, '_blank')}>Repositório da API</Button>
      <Button onClick={() => window.open(frontendLink, '_blank')}>Repositório do Frontend</Button>
      <Button onClick={() => window.open(controlInterfaceLink, '_blank')}>Repositório da Interface de Controle</Button>
      <ProjectComment>{comment}</ProjectComment>
    </ProjectCard>
  );
};

const Projects = () => {
  const projects = [
    {
      name: 'Projeto Gabriel Dill',
      image: GabrielDill,
      siteLink: 'https://gabriel-dill.vercel.app',
      apiLink: 'https://github.com/GabrielDillDev/gabriel-dill-api',
      frontendLink: 'https://github.com/GabrielDillDev/gabriel-dill-frontend',
      controlInterfaceLink: 'https://github.com/GabrielDillDev/gabriel-dill-interface',
      comment: 'Este projeto é um website que apresenta conteúdos e informações sobre meu trabalho como músico. Ele permite a edição de dados do site através de uma interface de controle hospedada em um domínio diferente, conectada ao mesmo servidor e banco de dados. A interface de controle é protegida por login e senha com autenticação JWT. Na construção deste projeto, foram utilizados React, Node.js, e PostgreSQL, além de várias outras ferramentas e métodos para o desenvolvimento e deploy da aplicação.'
    },
  ];

  return (
    <Background id="projetos">
      <CardGrid>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </CardGrid>
    </Background>
  );
};

export default Projects;
