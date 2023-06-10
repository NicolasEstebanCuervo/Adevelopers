import styled from "@emotion/styled";
import { motion } from "framer-motion";
import * as Colores from "../Colores";
import { useInView } from "react-intersection-observer";

const NuestroTrabajo = () => {
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
    <ContenedorNuestroTrabajo ref={ref}>
      <TituloNuestroProducto>Nuestro trabajo</TituloNuestroProducto>
      <SubContenedorNuestroTrabajo
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
        <Imagenes
          src={require("../../Imagenes/Img5.jpg")}
          variants={item}
        />
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
    font-size: 8vw;
  }
`;

const SubContenedorNuestroTrabajo = styled(motion.div)`
  display: flex;
  height: 430px;
  width: 70%;
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
    width: 100%;
    opacity: 0.5;
    filter: contrast(120%);
  }
`;
