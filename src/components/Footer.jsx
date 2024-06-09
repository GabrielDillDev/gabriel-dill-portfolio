import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 20px;
`;

const FooterText = styled.p`
  font-size: 14px;
  text-align: center;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  margin: 0 10px; 

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        &copy; 2024 Gabriel Dill. <span>&nbsp;&nbsp;&nbsp;</span>Todos os direitos reservados. <span>&nbsp;&nbsp;&nbsp;</span>
        <FooterLink href="https://github.com/seugithub">GitHub</FooterLink> | 
        <FooterLink href="https://www.linkedin.com/in/seulinkedin">LinkedIn</FooterLink> | 
        <FooterLink href="https://wa.me/seunumerodetelefone">WhatsApp</FooterLink> | 
        <FooterLink href="mailto:seuemail@example.com">E-mail</FooterLink>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
