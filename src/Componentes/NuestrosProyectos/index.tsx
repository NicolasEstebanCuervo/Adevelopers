import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled/macro";
import Imagen1 from "../../Imagenes/Img1.jpg";
import Imagen2 from "../../Imagenes/Img2.jpg";
import Imagen3 from "../../Imagenes/Img3.jpg";
import Imagen4 from "../../Imagenes/Img4.jpg";
import Imagen5 from "../../Imagenes/Img5.jpg";
import Imagen6 from "../../Imagenes/Img6.jpg";
import Imagen7 from "../../Imagenes/Img7.jpg";
import Imagen8 from "../../Imagenes/Img8.jpg";
import Hover from "../../Imagenes/Hover.png";
import * as Colores from "../Colores";

const NuestrosProyectos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleHover = (index: number) => {
    setHoverIndex(index);
  };

  const handleHoverEnd = () => {
    setHoverIndex(null);
  };

  const Proyectos = [
    { imagen: Imagen1, nombre: "Proyecto 1" },
    { imagen: Imagen2, nombre: "Proyecto 2" },
    { imagen: Imagen3, nombre: "Proyecto 3" },
    { imagen: Imagen4, nombre: "Proyecto 4" },
    { imagen: Imagen5, nombre: "Proyecto 5" },
    { imagen: Imagen6, nombre: "Proyecto 6" },
    { imagen: Imagen7, nombre: "Proyecto 7" },
    { imagen: Imagen8, nombre: "Proyecto 8" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <SeccionProyectos ref={ref}>
    <TituloProyectos>Nuestros servicios</TituloProyectos>
    <ContenedorProyectos
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {Proyectos.map((proyecto, index: number) => (
        <motion.div key={index} variants={item}>
          <ContenedorProyecto
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={handleHoverEnd}
          >
            <ImagenProyecto src={proyecto.imagen} />
            {hoverIndex === index && (
              <HoverProyecto>
                <ImagenHover src={Hover} />
                <TextoHover>{proyecto.nombre}</TextoHover>
              </HoverProyecto>
            )}
          </ContenedorProyecto>
        </motion.div>
      ))}
    </ContenedorProyectos>
  </SeccionProyectos>
);

};

export default NuestrosProyectos;

const SeccionProyectos = styled.div`
  background: ${Colores.colorSecundario};
  padding: 50px 0 10%;
`;

const TituloProyectos = styled.h1`
  border-radius: 10px;
  padding: 0.8% 2vw;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 70px;
  color: ${Colores.colorBlanco};

  @media (max-width: 600px) {
    font-size: 8vw;
  }
`;

const ContenedorProyectos = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 220px);
  gap: 10px;
  justify-content: center;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(4, 180px);
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

const ContenedorProyecto = styled.div`
  position: relative;
  cursor: pointer;
  aspect-ratio: 1/1;
  overflow: hidden;
  margin: auto;

  @media (max-width: 1100px) {
    max-width: 180px;
  }
`;

const ImagenProyecto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const HoverProyecto = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: hsla(000, 100%, 100%, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImagenHover = styled.img`
  width: 50px;

  @media (max-width: 400px) {
    width: 40px;
  }

  @media (max-width: 200px) {
    width: 30px;
  }
`;

const TextoHover = styled.h1`
  font-size: 17px;
  font-weight: bold;

  @media (max-width: 1000px) {
    font-size: 3vw;
  }

  @media (max-width: 700px) {
    font-size: 5vw;
  }

  @media (max-width: 450px) {
    font-size: 7vw;
  }
`;