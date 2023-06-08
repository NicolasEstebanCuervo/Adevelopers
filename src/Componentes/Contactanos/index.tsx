import styled from "@emotion/styled";
import Portada from "../../Imagenes/Portada.jpg";
import * as Colores from "../Colores"

const Contactanos = () => {
  return (
    <SeccionContacto>
          <TituloContacto>Nuestros servicios</TituloContacto>
      <SubDivContacto>
        <ContenedorPrincipal>
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
        <ContenedorRedes>
          <TituloRedes>Redes sociales</TituloRedes>
          <RedesContainer>
            <RedSocial>
            <a href=""><Icono className="bi bi-facebook"></Icono></a>
              <ContenedorTextoRed>
                <TituloRed>Facebook</TituloRed>
                <ParrafoRed>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                  magni obcaecati aliquam quisquam.
                </ParrafoRed>
              </ContenedorTextoRed>
            </RedSocial>
            <RedSocial>
            <a href=""><Icono className="bi bi-instagram"></Icono></a>
              <ContenedorTextoRed>
                <TituloRed>Instagram</TituloRed>
                <ParrafoRed>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                  magni obcaecati aliquam quisquam.
                </ParrafoRed>
              </ContenedorTextoRed>
            </RedSocial>
            <RedSocial>
              <a href=""><Icono className="bi bi-twitter"></Icono></a>
              <ContenedorTextoRed>
                <TituloRed>Twitter</TituloRed>
                <ParrafoRed>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                  magni obcaecati aliquam quisquam.
                </ParrafoRed>
              </ContenedorTextoRed>
            </RedSocial>
            <RedSocial>
            <a href=""><Icono className="bi bi-linkedin"></Icono></a>
              <ContenedorTextoRed>
                <TituloRed>LinkedIn</TituloRed>
                <ParrafoRed>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                  magni obcaecati aliquam quisquam.
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
  padding: 50px  0 0;
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
    font-size:10vw;
  }
`;

const SubDivContacto = styled.section`
  display: flex;
  align-items: stretch;
`;

const ContenedorPrincipal = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, hsla(000, 5%, 10%, 0.8) 0%, hsla(0, 0%, 0%, 0.7)),
    url(${Portada});
  background-size: cover;
  background-attachment: fixed;
  position: relative;
`;

const ContenedorTextos = styled.div`
  width: 80%;
`;

const TituloContenedorPrincipal = styled.h1`
  color: ${Colores.colorBlanco};
  padding-left: 10px;
  border-left: 5px solid ${Colores.colorBlanco};
`;

const ParrafoContenedorPrincipal = styled.p`
  color: ${Colores.colorBlanco};
  max-width: 80%;
  text-align: left;
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

`;

const ContenedorRedes = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${Colores.colorCuaternario};
  height: 100%;
  padding: 50px 0;
`;

const TituloRedes = styled.h1`
  padding-left:50px;
  font-weight: bold;
  color:${Colores.colorBlanco};
  @media (max-width: 600px) {
    font-size: 8vw;
  }
`;

const RedesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 0 50px;
`;

const RedSocial = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const TituloRed = styled.h1`
  font-size: 25px;
  color: ${Colores.colorSemiBlanco};
`

const ParrafoRed = styled.p`
  font-size: 15px;
  color: ${Colores.colorSemiBlanco};
`

const Icono = styled.i`
  font-size: 40px;
  color: ${Colores.colorSemiBlanco};
  margin-right: 10px;
`;

const ContenedorTextoRed = styled.div`
  color: ${Colores.colorBlanco};
`;

