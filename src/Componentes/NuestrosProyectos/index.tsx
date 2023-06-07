import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled/macro";
import Imagen1 from '../../Imagenes/Img1.jpg';
import Imagen2 from '../../Imagenes/Img2.jpg';
import Imagen3 from '../../Imagenes/Img3.jpg';
import Imagen4 from '../../Imagenes/Img4.jpg';
import Imagen5 from '../../Imagenes/Img5.jpg';
import Imagen6 from '../../Imagenes/Img6.jpg';
import Imagen7 from '../../Imagenes/Img7.jpg';
import Imagen8 from '../../Imagenes/Img8.jpg';
import Hover from '../../Imagenes/Hover.png';

const NuestrosProyectos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y:1000},
  };

  return (
    <SeccionProyectos ref={ref}>
      <TituloProyectos>Nuestros servicios</TituloProyectos>
      <ContenedorProyectos className="container">

        {/* Proyecto 1 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 5 }}
        >
          <ContenedorProyecto>
            <ImagenProyecto src={Imagen1} />
            <HoverProyecto className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Proyecto 1</TextoHover>
            </HoverProyecto>
          </ContenedorProyecto>
        </motion.div>

        {/* Proyecto 2 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 4 }}
        >
          <ContenedorProyecto>
            <ImagenProyecto src={Imagen2} />
            <HoverProyecto className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Proyecto 2</TextoHover>
            </HoverProyecto>
          </ContenedorProyecto>
        </motion.div>

        {/* Proyecto 3 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 5 }}
        >
          <ContenedorProyecto>
            <ImagenProyecto src={Imagen3} />
            <HoverProyecto className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Proyecto 3</TextoHover>
            </HoverProyecto>
          </ContenedorProyecto>
        </motion.div>

        {/* Proyecto 4 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 4 }}
        >
          <ContenedorProyecto>
            <ImagenProyecto src={Imagen4} />
            <HoverProyecto className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Proyecto 4</TextoHover>
            </HoverProyecto>
          </ContenedorProyecto>
        </motion.div>

        {/* Proyecto 5 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 5 }}
        >
          <ContenedorProyecto>
            <ImagenProyecto src={Imagen5} />
            <HoverProyecto className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Proyecto 5</TextoHover>
            </HoverProyecto>
          </ContenedorProyecto>
        </motion.div>

        {/* Proyecto 6 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 4 }}
        >
          <ContenedorProyecto>
            <ImagenProyecto src={Imagen6} />
            <HoverProyecto className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Proyecto 6</TextoHover>
            </HoverProyecto>
          </ContenedorProyecto>
        </motion.div>

        {/* Proyecto 7 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 5 }}
        >
          <ContenedorProyecto>
            <ImagenProyecto src={Imagen7} />
            <HoverProyecto className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Proyecto 7</TextoHover>
            </HoverProyecto>
          </ContenedorProyecto>
        </motion.div>

        {/* Proyecto 8 */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 4 }}
        >
          <ContenedorProyecto>
            <ImagenProyecto src={Imagen8} />
            <HoverProyecto className="hover-galeria">
              <ImagenHover src={Hover} />
              <TextoHover>Proyecto 8</TextoHover>
            </HoverProyecto>
          </ContenedorProyecto>
        </motion.div>

      </ContenedorProyectos>
    </SeccionProyectos>
  );
};

export default NuestrosProyectos;

const SeccionProyectos = styled.div`
  background: #D2DAF6;
  padding: 50px 0 100px;
`;

const TituloProyectos = styled.h1`
  border-radius: 10px;
  padding: 0.8% 2vw;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 70px;

  @media (max-width: 600px) {
    font-size:10vw;
  }
`;

const ContenedorProyectos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 220px);
  gap: 10px;
  justify-content: center;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(4,180px);
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
  transform: scale(0);
  background: hsla(210, 91%, 27%, 0.7);
  transition: transform 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${ContenedorProyecto}:hover & {
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
  color: #fff;

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
