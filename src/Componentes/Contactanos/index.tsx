import styled from "@emotion/styled";
import Portada from "../../Imagenes/Portada.jpg";
import * as Colores from "../Colores";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contactanos = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 2,
      },
    },
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1, 
        duration: 0.5, 
      },
    },
  };
  
  const itemWithDelay = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 2, 
        duration: 1, 
      },
    },
  };
  return (
    <SeccionContacto ref={ref}>
      <TituloContacto>Nuestros servicios</TituloContacto>
      <SubDivContacto
        className="container"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <ContenedorPrincipal className="item" variants={item}>
          <ContenedorTextos>
            <TituloContenedorPrincipal>Contactanos</TituloContenedorPrincipal>
            <ParrafoContenedorPrincipal>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              iure nam similique nemo vel voluptas sit unde iste, a pariatur
              enim, esse totam qui ex cum sunt ea labore ducimus!
            </ParrafoContenedorPrincipal>
            <BotonContenedorPrincipal>Enviar correo</BotonContenedorPrincipal>
          </ContenedorTextos>
        </ContenedorPrincipal>
        <ContenedorRedes        className="container"
        variants={itemWithDelay}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}>  
          <TituloRedes>Redes sociales</TituloRedes>
          <RedesContainer>
            <RedSocial>
              <a href="">
                <Icono className="bi bi-facebook"></Icono>
              </a>
              <ContenedorTextoRed>
                <TituloRed>Facebook</TituloRed>
                <ParrafoRed>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis magni obcaecati aliquam quisquam.
                </ParrafoRed>
              </ContenedorTextoRed>
            </RedSocial>
            <RedSocial>
              <a href="">
                <Icono className="bi bi-instagram"></Icono>
              </a>
              <ContenedorTextoRed>
                <TituloRed>Instagram</TituloRed>
                <ParrafoRed>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis magni obcaecati aliquam quisquam.
                </ParrafoRed>
              </ContenedorTextoRed>
            </RedSocial>
            <RedSocial>
              <a href="">
                <Icono className="bi bi-twitter"></Icono>
              </a>
              <ContenedorTextoRed>
                <TituloRed>Twitter</TituloRed>
                <ParrafoRed>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis magni obcaecati aliquam quisquam.
                </ParrafoRed>
              </ContenedorTextoRed>
            </RedSocial>
            <RedSocial>
              <a href="">
                <Icono className="bi bi-linkedin"></Icono>
              </a>
              <ContenedorTextoRed>
                <TituloRed>LinkedIn</TituloRed>
                <ParrafoRed>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Debitis magni obcaecati aliquam quisquam.
                </ParrafoRed>
              </ContenedorTextoRed>
            </RedSocial>
          </RedesContainer>
        </ContenedorRedes>
      </SubDivContacto>
    </SeccionContacto>
  );
};

export default Contactanos;

const SeccionContacto = styled.section`
  background: ${Colores.colorSecundario};
  padding: 50px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TituloContacto = styled.h1`
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

const SubDivContacto = styled(motion.ul)`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ContenedorPrincipal = styled(motion.li)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      to right,
      hsla(000, 5%, 10%, 0.8) 0%,
      hsla(0, 0%, 0%, 0.7)
    ),
    url(${Portada});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 800px) {
    height: 40vh;
    flex: none;
  }
`;

const ContenedorTextos = styled.div`
  width: 80%;
`;

const TituloContenedorPrincipal = styled.h1`
  color: ${Colores.colorBlanco};
  padding-left: 10px;
  border-left: 5px solid ${Colores.colorBlanco};

  @media (max-width: 1000px) {
    font-size: 4vw;
  }

  @media (max-width: 700px) {
    font-size: 5vw;
  }

  @media (max-width: 400px) {
    font-size: 6vw;
  }
`;

const ParrafoContenedorPrincipal = styled.p`
  color: ${Colores.colorBlanco};
  max-width: 80%;
  text-align: left;

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

const BotonContenedorPrincipal = styled.button`
  color: ${Colores.colorBlanco};
  background: ${Colores.colorBoton};
  text-align: center;
  text-align: left;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${Colores.colorHoverBoton};
  }

  @media (max-width: 1000px) {
    font-size: 2vw;
  }

  @media (max-width: 700px) {
    font-size: 3vw;
  }

  @media (max-width: 400px) {
    font-size: 4vw;
  }
`;

const ContenedorRedes = styled(motion.li)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${Colores.colorCuaternario};
  height: 100%;
  padding: 50px 0;
`;

const TituloRedes = styled.h1`
  padding-left: 50px;
  font-weight: bold;
  color: ${Colores.colorBlanco};
  @media (max-width: 1000px) {
    font-size: 5vw;
  }

  @media (max-width: 700px) {
    font-size: 6vw;
  }

  @media (max-width: 400px) {
    font-size: 7vw;
  }
`;

const RedesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 0 10%;
`;

const RedSocial = styled.div`
  display: flex;
  align-items: center;
`;

const TituloRed = styled.h1`
  font-size: 25px;
  color: ${Colores.colorSemiBlanco};

  @media (max-width: 1000px) {
    font-size: 4vw;
  }

  @media (max-width: 700px) {
    font-size: 5vw;
  }

  @media (max-width: 400px) {
    font-size: 6vw;
  }
`;

const ParrafoRed = styled.p`
  font-size: 15px;
  color: ${Colores.colorSemiBlanco};

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

const Icono = styled.i`
  font-size: 40px;
  color: ${Colores.colorSemiBlanco};
  margin-right: 80px;

  @media (max-width: 1000px) {
    font-size: 7vw;
  }

  @media (max-width: 700px) {
    font-size: 10vw;
    margin-right: 50px;
  }

  @media (max-width: 400px) {
    font-size: 12vw;
    margin-right: 20px;
  }
`;

const ContenedorTextoRed = styled.div`
  color: ${Colores.colorBlanco};
`;
