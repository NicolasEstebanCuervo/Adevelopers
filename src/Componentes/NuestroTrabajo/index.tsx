import styled from "@emotion/styled";
import * as Colores from "../Colores"

const NuestroTrabajo = () => {
  return (
    <ContenedorNuestroTrabajo>
      <TituloNuestroProducto>Nuestro trabajo</TituloNuestroProducto>
      <SubContenedorNuestroTrabajo>
        <Imagenes src={require("../../Imagenes/Img1.jpg")} />
        <Imagenes src={require("../../Imagenes/Img2.jpg")} />
        <Imagenes src={require("../../Imagenes/Img3.jpg")} />
        <Imagenes src={require("../../Imagenes/Img4.jpg")} />
        <Imagenes src={require("../../Imagenes/Img5.jpg")} />
        <Imagenes src={require("../../Imagenes/Img6.jpg")} />
        <Imagenes src={require("../../Imagenes/Img7.jpg")} />
        <Imagenes src={require("../../Imagenes/Img8.jpg")} />
      </SubContenedorNuestroTrabajo>
    </ContenedorNuestroTrabajo>
  );
};

export default NuestroTrabajo;

const ContenedorNuestroTrabajo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0 100px;
  align-items: center;
  background: ${Colores.colorPrimario};
`;

const TituloNuestroProducto = styled.h1`
  color: ${Colores.colorBlanco};
  border-radius: 10px;
  padding: 0.8% 2vw;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 70px;

  @media (max-width: 600px) {
    font-size: 10vw;
  }
`;

const SubContenedorNuestroTrabajo = styled.div`
  display: flex;
  height: 430px;
  width: 70%;
`;

const Imagenes = styled.img`
  position: relative;
  max-width: 250px;
  width: 0;
  height: auto;
  flex-grow: 1;
  object-fit: cover;
  transition: width 3s ease; 

  &:hover {
    cursor: pointer;
    width: 100%;
    opacity: 0.5;
    filter: contrast(120%);
  }
`;
