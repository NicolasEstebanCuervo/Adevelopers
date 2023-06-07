/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { css } from '@emotion/react';
import styled from '@emotion/styled'
import Portada from "../../Imagenes/Portada.jpg"

const Navegacion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header>
      <Navbar expand="lg" css={nav} className="container">
        <img css={ImagenLogo} src={require("../../Imagenes/Logo.png")} />
        <Navbar.Toggle aria-controls="basic-navbar-nav" css={icon} onClick={handleClick} />
        <Navbar.Collapse id="basic-navbar-nav" css={navbarCollapseStyles} className={`${isOpen ? "show" : "centrar"}`}>
          <Nav>
            <Nav.Link href="#Sobre mi" css={links}>Inicio</Nav.Link>
            <Nav.Link href="#Conocimientos" css={links}>Nuestro producto</Nav.Link>
            <Nav.Link href="#Estudios" css={links}>Nuestros proyectos</Nav.Link>
            <Nav.Link href="#Mi mejor proyecto" css={links}>Opiniones</Nav.Link>
            <Nav.Link href="#Contacto" css={links}>Contactanos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <SeccionTextosHeader className="container">
        <TituloHeader>Potencia tus ventas al menos un 200%</TituloHeader>
        <SubtituloHeader>Con una pagina web potente</SubtituloHeader>
        <OndaContenedor >
          <Onda viewBox="0 0 500 150" preserveAspectRatio="none">
            <Path d="M0.00,49.98 C142.49,140.63 348.47,-43.89 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></Path>
          </Onda>
        </OndaContenedor>
      </SeccionTextosHeader>

    </Header>
  );
};

export default Navegacion;

const Header = styled.header`
  padding: 20px 0 100px;
  width: 100%;
  background: linear-gradient(to right,hsla(218, 61%, 32%, 1) 0%, hsla(0, 0%, 0%, 0.573)),url(${Portada});
  background-size: cover;
  background-attachment: fixed;
  position: relative;
`;

const nav = css`
  padding-bottom: 20px;
  width: 90%;

  @media (max-width: 320px) {
    padding: 2vw;
  }
`;

const icon = css`
  @media (max-width: 300px) {
    font-size: 3vw;
    padding: 0.25rem 0.5rem;
  }
`

const navbarCollapseStyles  = css`
  justify-content: end;
`

const ImagenLogo  = css`

  width: 150px;

  @media (max-width: 992px) {
    max-width: 100px;
    width: 100%;
  }

  @media (max-width: 320px) {
    max-width: 80px;
    width: 100%;
  }

  @media (max-width: 300px) {
    font-size: 3vw;
    padding: 0.25rem 0.5rem;
  }
`

const links = css`
  border-bottom: 2px solid transparent; 
  transition: border-color 0.5s ease;
  padding-bottom: 10px;
  color: #fff;
  font-size: 17px !important;
  padding: 2%;
  
  &:hover {
    color: #9E98DF;
    border-color: #9E98DF;
  }

  &.active {
    color: #9E98DF !important;
  }

  @media (max-width: 1200px) {
    border: none;
    &:hover{
    background-color: #9E98DF;
    color: #312f2f !important;
    }
  }

  @media (max-width: 1200px) {
    font-size: 15px !important;
  }

  @media (max-width: 1000px) {
    font-size: 3vw !important;
  }

  @media (max-width: 700px) {
    font-size: 4vw !important;
  }

  @media (max-width: 400px) {
    font-size: 5vw !important;
  }
`;

const SeccionTextosHeader = styled.section`
  display: flex;
  height: 430px;
  width: 100;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

const TituloHeader = styled.h1`
  font-size: 40px;
  color: #fff;

  @media (max-width: 1000px) {
    font-size:4vw;
  }

  @media (max-width: 700px) {
    font-size:6vw;
  }

  @media (max-width: 400px) {
    font-size:10vw;
  }
`

const SubtituloHeader = styled.h1`
  font-size: 25px;
  color: #fff;
  font-weight: 300;

  @media (max-width: 1000px) {
    font-size:3vw;
  }

  @media (max-width: 700px) {
    font-size:5vw;
  }

  @media (max-width: 400px) {
    font-size:9vw;
  }
`

const OndaContenedor = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 150px; 
  overflow: hidden;
`

const Onda = styled.svg`
  height: 100%;
  width: 100%;
` 
const Path = styled.path`
  stroke: none; fill: #E6E4FC;
`