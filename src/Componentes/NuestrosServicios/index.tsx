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

const NuestrosServicios = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 1000 },
  };

  return (
    <SeccionServicios ref={ref}>
      <TituloServicios>Nuestros servicios</TituloServicios>
      <ContenedorServicios className="container">
        {/* Servicio 1 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 5 }}
        >
          <ContenedorServicio>
            <ImagenServicio src={Imagen1} />
            <HoverServicio className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Servicio 1</TextoHover>
            </HoverServicio>
          </ContenedorServicio>
        </motion.div>

        {/* Servicio 2 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 4 }}
        >
          <ContenedorServicio>
            <ImagenServicio src={Imagen2} />
            <HoverServicio className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Servicio 2</TextoHover>
            </HoverServicio>
          </ContenedorServicio>
        </motion.div>

        {/* Servicio 3 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 5 }}
        >
          <ContenedorServicio>
            <ImagenServicio src={Imagen3} />
            <HoverServicio className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Servicio 3</TextoHover>
            </HoverServicio>
          </ContenedorServicio>
        </motion.div>

        {/* Servicio 4 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 4 }}
        >
          <ContenedorServicio>
            <ImagenServicio src={Imagen4} />
            <HoverServicio className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Servicio 4</TextoHover>
            </HoverServicio>
          </ContenedorServicio>
        </motion.div>

        {/* Servicio 5 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 5 }}
        >
          <ContenedorServicio>
            <ImagenServicio src={Imagen5} />
            <HoverServicio className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Servicio 5</TextoHover>
            </HoverServicio>
          </ContenedorServicio>
        </motion.div>

        {/* Servicio 6 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 4 }}
        >
          <ContenedorServicio>
            <ImagenServicio src={Imagen6} />
            <HoverServicio className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Servicio 6</TextoHover>
            </HoverServicio>
          </ContenedorServicio>
        </motion.div>

        {/* Servicio 7 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 5 }}
        >
          <ContenedorServicio>
            <ImagenServicio src={Imagen7} />
            <HoverServicio className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Servicio 7</TextoHover>
            </HoverServicio>
          </ContenedorServicio>
        </motion.div>

        {/* Servicio 8 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 4 }}
        >
          <ContenedorServicio>
            <ImagenServicio src={Imagen8} />
            <HoverServicio className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Servicio 8</TextoHover>
            </HoverServicio>
          </ContenedorServicio>
        </motion.div>
      </ContenedorServicios>
    </SeccionServicios>
  );
};

export default NuestrosServicios;

const SeccionServicios = styled.div`
  background: ${Colores.colorSecundario};
  padding: 50px 0 100px;
`;

const TituloServicios = styled.h1`
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

const ContenedorServicios = styled.div`
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

const ContenedorServicio = styled.div`
  position: relative;
  cursor: pointer;
  aspect-ratio: 1/1;
  overflow: hidden;
  margin: auto;

  @media (max-width: 1100px) {
    max-width: 180px;
  }
`;

const ImagenServicio = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const HoverServicio = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  transform: scale(0);
  background: hsla(210, 91%, 27%, 0.7);
  transition: transform 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${ContenedorServicio}:hover & {
    transform: scale(1);
  }
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
  color: ${Colores.colorBlanco};

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
