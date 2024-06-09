import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.nav`
  background-color: #222;
  padding: 1rem;
  max-width: 100%; 
`;

const MenuList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; 
`;

const MenuItem = styled.li`
  margin-bottom: 0.5rem; 
`;

const MenuLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  font-family: monospace;
  transition: color 0.3s;

  &:hover {
    color: #00bcd4;
  }

  @media (max-width: 768px){
    font-size: 1rem;
  }
`;

const Menu = () => {
  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById('projetos');
    portfolioSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToPerfil = () => {
    const perfilSection = document.getElementById('perfil');
    perfilSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MenuContainer>
      <MenuList>
        <MenuItem>
          <MenuLink href="#" onClick={handleScrollToPortfolio}>
            Projetos
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#" onClick={handleScrollToPerfil}>
            Perfil
          </MenuLink>
        </MenuItem>
      </MenuList>
    </MenuContainer>
  );
};

export default Menu;
