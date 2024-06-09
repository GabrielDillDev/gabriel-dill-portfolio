import React from 'react';
import ProfileImage from '../images/perfil.png';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background-color: #222;
  color: #fff;
  padding: 2rem;
  display: flex;
  align-items: center;
  font-family: monospace;
  border-bottom: 1px solid #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileImageWrapper = styled.div`
  flex: 0 0 auto;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;

const ProfileDescription = styled.div`
  flex: 1;
  margin-top: 1rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.4;
`;

const List = styled.ul`
  margin-top: 1rem;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.9rem;
  background: #333;

  @media (max-width: 768px) {
    white-space: nowrap;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

const EducationText = styled.p`
  font-size: 1rem;
  line-height: 1.4;
`;

const LinkItem = styled.a`
  display: block;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  background-color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  @media (max-width: 768px) {
    &:after {
      content: '\A';
      white-space: pre;
    }
  }
`;

const Perfil = () => {
  return (
    <ProfileContainer id="perfil">
      <ProfileImageWrapper>
        <Image src={ProfileImage} alt="Profile" />
      </ProfileImageWrapper>
      <ProfileDescription>
        <Title>Gabriel Dill</Title>
        <Subtitle>Web Developer</Subtitle>
        <Text>
          Estudo programação há mais ou menos 1 ano,
          no decorrer dessa trajetória realizei alguns projetos em HTML5, CSS3, JavaScript, React, Node.js, MySQL, entre outros métodos que lidam com a infraestrutura envolvida. Tenho muita vontade de aprender e evoluir a cada dia e almejo adquirir o máximo de conhecimento que eu puder nessa caminhada, a programação e a tecnologia é algo que realmente me fascina bastante e me proporciona um ambiente que me agrada muito.
        </Text>
        <SectionTitle>Tecnologias</SectionTitle>
        <List>
          <Item>HTML5</Item>
          <Item>CSS3</Item>
          <Item>JavaScript</Item>
          <Item>React</Item>
          <Item>Styled-components</Item>
          <Item>Node.js</Item>
          <Item>MySQL</Item>
          <Item>PostgreSQL</Item>
          <Item>Git / Github</Item>
        </List>
        <SectionTitle>Formação</SectionTitle>
        <EducationText>Análise e Desenvolvimento de Sistemas – Uniasselvi<br />2022 – 2025</EducationText>
        <SectionTitle>Meus Links</SectionTitle>
        <LinkItem href="https://github.com/GabrielDillDev" target="_blank">
          Github https://github.com/GabrielDillDev
        </LinkItem>
        <LinkItem href="https://www.linkedin.com/in/gabriel-dill-6366972b7/" target="_blank">
          Linkedin https://www.linkedin.com/in/gabriel-dill-6366972b7/
        </LinkItem>
        <LinkItem href="tel:+5554981053581">
          Telefone (54) 981053581
        </LinkItem>
        <LinkItem href="mailto:gabrieldill.dev@gmail.com">
          Email gabrieldill.dev@gmail.com
        </LinkItem>
      </ProfileDescription>
    </ProfileContainer>
  );
};

export default Perfil;
