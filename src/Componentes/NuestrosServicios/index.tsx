import styled from "@emotion/styled";
import { motion } from "framer-motion";
import * as Colores from "../Colores";
import { useInView } from "react-intersection-observer";

const NuestrosServicios = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 1,
      },
    },
  };

  const item = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <ContenedorServicios ref={ref}>
      <TituloNuestrosServicios>Nuestro trabajo</TituloNuestrosServicios>
      <SubContenedorServicios
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Imagenes
          src={require("../../Imagenes/Img1.jpg")}
          variants={item}
        />
        <Imagenes
          src={require("../../Imagenes/Img2.jpg")}
          variants={item}
        />
        <Imagenes
          src={require("../../Imagenes/Img3.jpg")}
          variants={item}
        />
        <Imagenes
          src={require("../../Imagenes/Img4.jpg")}
          variants={item}
        />
      </SubContenedorServicios>
    </ContenedorServicios>
  );
};

export default NuestrosServicios;

const ContenedorServicios = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 0 10%;
  align-items: center;
  background: ${Colores.colorPrimario};
`;

const TituloNuestrosServicios = styled.h1`
  color: ${Colores.colorBlanco};
  border-radius: 10px;
  padding: 0.8% 2vw;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 70px;

  @media (max-width: 600px) {
    font-size: 8vw;
  }
`;

const SubContenedorServicios = styled(motion.div)`
  display: flex;
  width: 50%;
  height: 430px;

  @media (max-width: 1000px) {
    height: 330px;
  }

`;

const Imagenes = styled(motion.img)`
  position: relative;
  max-width: 250px;
  width: 0;
  height: auto;
  flex-grow: 1;
  object-fit: cover;
  transition: width 3s ease;



  &:hover {
    cursor: pointer;
    width: 50%;
    opacity: 0.5;
    filter: contrast(120%);
  }
`;