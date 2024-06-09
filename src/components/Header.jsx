import React from 'react';
import styled from 'styled-components';
import htmlIcon from '../images/html.png';
import cssIcon from '../images/css.png';
import jsIcon from '../images/js.png';
import reactIcon from '../images/react.png';
import nodejsIcon from '../images/nodejs.png';
import mysqlIcon from '../images/mysql.png';
import postgresqlIcon from '../images/postgresql.png';

const Title = styled.h1`
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  text-shadow: 0.125rem 0.125rem 0.25rem rgba(0, 0, 0, 0.5);
  font-family: monospace;
  margin: 0; 

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0.5rem;
  }
`;

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #121212, #222222);
  color: #fff;
  padding: 1.25rem 1rem; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #fff;

  @media (max-width: 768px) {
    padding: 1rem;
    text-align: center;
    flex-direction: column;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 1rem; 
  }
`;

const LogoImage = styled.img`
  width: 50px;
  height: auto;
  margin: 0 0.5rem; 

  @media (max-width: 768px) {
    width: 40px; 
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Gabriel Dill</Title>
      <LogoContainer>
        <LogoImage src={htmlIcon} alt="Html" />
        <LogoImage src={cssIcon} alt="Css" />
        <LogoImage src={jsIcon} alt="Javascript" />
        <LogoImage src={reactIcon} alt="React" />
        <LogoImage src={nodejsIcon} alt="Node.js" />
        <LogoImage src={mysqlIcon} alt="MySQL" />
        <LogoImage src={postgresqlIcon} alt="PostgreSQL" />
      </LogoContainer>
    </HeaderContainer>
  );
};

export default Header;
