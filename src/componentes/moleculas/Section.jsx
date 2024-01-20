import styled from "styled-components";
import {useState} from "react";
import {v, CalendarioModal, useDatosStore} from "../../index.js";
import {useLocation} from "react-router-dom";

export function SectionMobile({titulo}) {
  const {pathname} = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const {fecha_seleccionada} = useDatosStore();
  const rutasPermitidas = [
    "/",
    "/partidos",
    "/partidos/",
  ];
  return (
    <Container>
      <p className="fecha px-4 text-xs uppercase">
        {fecha_seleccionada != ""
          ? fecha_seleccionada
          : new Date().toLocaleDateString("es-PE", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
      </p>
      <div className="flex justify-between px-4">
        <p className="text-2xl font-bold">{titulo}</p>
        {rutasPermitidas.includes(pathname) && (
          <>
            <button onClick={() => setIsOpen(true)}>
              <div className="cal-cont rounded-lg flex justify-center items-center">
                <v.iconocalendario />
              </div>
            </button>
            <CalendarioModal isOpen={isOpen} setIsOpen={setIsOpen} />
          </>
        )}
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.body};
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
