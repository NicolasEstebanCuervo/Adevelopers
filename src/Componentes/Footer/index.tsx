import styled from '@emotion/styled';
import * as Colores from "../Colores";

const Footer = () => {
  return (
    <ContenedorFooter>
      <SubContenedor>
        <ContenedorSecciones>
          <ContenedorSeccion>
            <TituloSeccionFooter>Políticas de privacidad</TituloSeccionFooter>
            <ListaFooter>
              <LiFooter><LinkFooter href="#">Política de cookies</LinkFooter></LiFooter>
              <LiFooter><LinkFooter href="#">Términos y condiciones</LinkFooter></LiFooter>
              <LiFooter><LinkFooter href="#">Aviso legal</LinkFooter></LiFooter>
              <LiFooter><LinkFooter href="#">Protección de datos</LinkFooter></LiFooter>
            </ListaFooter>
          </ContenedorSeccion>

          <ContenedorSeccion>
            <TituloSeccionFooter>Actividad</TituloSeccionFooter>
            <ListaFooter>
              <LiFooter><LinkFooter href="#">Últimas noticias</LinkFooter></LiFooter>
              <LiFooter><LinkFooter href="#">Eventos próximos</LinkFooter></LiFooter>
            </ListaFooter>
          </ContenedorSeccion>

          <ContenedorSeccion>
            <TituloSeccionFooter>Acerca de</TituloSeccionFooter>
            <ListaFooter>
              <LiFooter><LinkFooter href="#">Equipo de trabajo</LinkFooter></LiFooter>
              <LiFooter><LinkFooter href="#">Historia de la empresa</LinkFooter></LiFooter>
              <LiFooter><LinkFooter href="#">Misión y visión</LinkFooter></LiFooter>
            </ListaFooter>
          </ContenedorSeccion>

        </ContenedorSecciones>
      </SubContenedor>
    </ContenedorFooter>
  );
};

export default Footer;

const ContenedorFooter = styled.footer`
  padding: 30px 0;
  background: ${Colores.colorPrimario};
  display: flex;
  justify-content: center;
`;

const SubContenedor = styled.div`
  width: 90%;
`;

const ContenedorSecciones = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const ContenedorSeccion = styled.div``;

const TituloSeccionFooter = styled.h1`
  font-size: 17px;
  margin-bottom: 10px;
  color: ${Colores.colorBlanco};

  @media (max-width: 1000px) {
    font-size: 3vw;
  }

  @media (max-width: 700px) {
    font-size: 4vw;
  }

  @media (max-width: 400px) {
    font-size: 5vw;
  }
`;

const ListaFooter = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const LiFooter = styled.li`
  list-style: none;
  display: flex;
`;

const LinkFooter = styled.a`
  margin-bottom: 10px;
  color: ${Colores.colorParrafo};
  text-decoration-line: none;
  font-size: 14px;
  transition: color 0.3s;

  @media (max-width: 1000px) {
    font-size: 1vw;
  }

  @media (max-width: 700px) {
    font-size: 2vw;
  }

  @media (max-width: 400px) {
    font-size: 3vw;
  }

  &:hover {
    color: ${Colores.colorCuaternario};
  }
`;
