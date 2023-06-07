import styled from "@emotion/styled";

const Galeria = () => {
  return (
    <ContenedorGaleria>
      <TituloNuestroProducto>Nuestro trabajo</TituloNuestroProducto>
      <SubContenedorGaleria>
        <Imagenes src={require("../../Imagenes/Img1.jpg")} />
        <Imagenes src={require("../../Imagenes/Img2.jpg")} />
        <Imagenes src={require("../../Imagenes/Img3.jpg")} />
        <Imagenes src={require("../../Imagenes/Img4.jpg")} />
        <Imagenes src={require("../../Imagenes/Img5.jpg")} />
        <Imagenes src={require("../../Imagenes/Img6.jpg")} />
        <Imagenes src={require("../../Imagenes/Img7.jpg")} />
        <Imagenes src={require("../../Imagenes/Img8.jpg")} />
      </SubContenedorGaleria>
    </ContenedorGaleria>
  );
};

export default Galeria;

const ContenedorGaleria = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0 100px;
  align-items: center;
  background: #E6E4FC;
`;

const TituloNuestroProducto = styled.h1`
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

const SubContenedorGaleria = styled.div`
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
