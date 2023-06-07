import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";
import Ilustracion from "../../Imagenes/Ilustracion1.svg";

const NuestroProducto = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y:1000},
  };

  return (
    <SectionNuestroProducto ref={ref}>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 4 }}
        >
          <TituloNuestroProducto>Nuestro producto</TituloNuestroProducto>
        </motion.div>
      <SubContenedorSobreNosotros>

        <ContenedorAnimacionImagen
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 5 }}
        >
          <img src={Ilustracion} />
        </ContenedorAnimacionImagen>

        <ContenedorTextosSobreNosotros>
        <ContenedorIndividualTextosSobreNosotros
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 7 }}
        >
          <TituloTextoSobreNosotros>¿Quienes somos?</TituloTextoSobreNosotros>
          <ParrafoNuestroProducto>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ParrafoNuestroProducto>
        </ContenedorIndividualTextosSobreNosotros>
        <ContenedorIndividualTextosSobreNosotros
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ type: "spring", bounce: 0.25, duration: 8 }}
        >
          <TituloTextoSobreNosotros>
            ¿Que es lo que hacemos?
          </TituloTextoSobreNosotros>
          <ParrafoNuestroProducto>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ParrafoNuestroProducto>
        </ContenedorIndividualTextosSobreNosotros>
        </ContenedorTextosSobreNosotros>
      </SubContenedorSobreNosotros>
    </SectionNuestroProducto>
  );
};

const SectionNuestroProducto = styled.section`
  padding: 50px 0 ;
  background: #E6E4FC;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TituloNuestroProducto = styled.h1`
  color: #1c1929;
  border-radius: 10px;
  padding: 0.8% 2vw;
  font-size: 50px;
  font-weight: bold;

  @media (max-width: 600px) {
    font-size: 10vw;
  }
`;

const SubContenedorSobreNosotros = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const ContenedorAnimacionImagen = styled(motion.div)`
  max-width: 450px;
  width: 100%;
  margin-right: 10%;

  @media (max-width: 900px) {
    order: 1;
    margin: 20px 0;
  }
`;

const ContenedorTextosSobreNosotros = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 45%;
  padding-bottom: 50px;

  @media (max-width: 900px) {
    width: 80%;
  }
`;

const ContenedorIndividualTextosSobreNosotros = styled(motion.div)`
  background: #D2DAF6;
  border-radius: 10px;
  padding:3%;
`;

const TituloTextoSobreNosotros = styled.h1`
  font-size: 25px;
  display: flex;
  align-items: center;
  color: #242050;
  font-weight: bold;

  @media (max-width: 1000px) {
    font-size: 4vw;
  }

  @media (max-width: 700px) {
    font-size: 6vw;
  }

  @media (max-width: 400px) {
    font-size: 10vw;
  }
`;

const ParrafoNuestroProducto = styled.p`
  font-size: 1vmax;

  @media (max-width: 1000px) {
    font-size: 2vw;
  }

  @media (max-width: 700px) {
    font-size: 3vw;
  }

  @media (max-width: 400px) {
    font-size: 5vw;
  }
`;

export default NuestroProducto;
