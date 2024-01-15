import styled from "styled-components";
import {v} from "../../index.js";

export function SectionMobile() {
  const fecha = new Date();
  const opcionesDeFormato = {day: "numeric", month: "long", year: "numeric"};
  const fechaFormateada = fecha.toLocaleDateString("es-PE", opcionesDeFormato);

  return (
    <Container>
      <p className="fecha px-4 text-xs uppercase">{fechaFormateada}</p>
      <div className="flex justify-between px-4">
        <p className="text-2xl font-bold">Partidos</p>
        <a href="#modalCalendar">
          <div className="cal-cont rounded-lg flex justify-center items-center">
            <v.iconocalendario />
          </div>
        </a>
      </div>
    </Container>
  );
}
const Container = styled.div`
  color: ${(props) => props.theme.textRGBa};
  padding: 1rem 0;
  z-index: 1;
  .fecha {
    color: ${(props) => props.theme.textSection};
  }
  .cal-cont {
    font-size: 1.25rem;
    line-height: 1.75rem;
    width: 35px;
    height: 35px;
    background-color: #05a367;
    color: #fff;
  }
`;
