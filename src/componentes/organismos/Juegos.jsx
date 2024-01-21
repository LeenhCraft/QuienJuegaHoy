import styled, {ThemeContext} from "styled-components";
import HashLoader from "react-spinners/HashLoader";
import {
  buscarJuego,
  TituloLiga,
  TarjetaPartido,
  JuegoModal,
  useDatosStore,
  AlertaJuegos,
  scrollHook,
} from "../../index";
import {useContext, useEffect, useState} from "react";

export function Juegos() {
  const temaActual = useContext(ThemeContext);
  const [isLoading, setisLoading] = useState(true);
  const {partidos, actualizarCalendario} = useDatosStore();
  const [blockScroll, allowScroll] = scrollHook();

  useEffect(() => {
    const date = new Date();
    date.setHours(date.getHours() - 5);
    const peruDate = date.toISOString().slice(0, 10);
    actualizarCalendario(peruDate + "%").then(() => {
      setisLoading(false);
    });
  }, []);

  const [juegos, setJuegos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const abrirModal = async (juegoId) => {
    setisLoading(true);
    buscarJuego(juegoId).then(({data, error}) => {
      if (error) {
        console.log(error);
        return;
      }

      const juegoData = data.reduce((acc, obj) => {
        return {...acc, ...obj};
      }, {});
      setJuegos(juegoData);
      setIsOpen(true);
      setisLoading(false);
    });
  };

  useEffect(() => {
    if (isOpen) {
      blockScroll();
    } else {
      allowScroll();
    }
  }, [isOpen]);

  return (
    <Container className="aca">
      {isLoading ? (
        <div className="w-full h-[calc(100vh-130px)] flex justify-center items-center">
          <HashLoader color={temaActual.primary} />
        </div>
      ) : (
        <>
          {Object.values(partidos).map((liga, index) => (
            <div key={index}>
              <TituloLiga nombre={liga.nombre} img={liga.logo} />
              {liga.partidos.map((partido) => (
                <TarjetaPartido
                  key={partido.id}
                  partido={partido}
                  abrirModal={abrirModal}
                />
              ))}
            </div>
          ))}
          <JuegoModal isOpen={isOpen} setIsOpen={setIsOpen} data={juegos} />
          {Object.keys(partidos).length === 0 && <AlertaJuegos />}
        </>
      )}
    </Container>
  );
}
const Container = styled.div`
  margin-bottom: 50px;
  overflow: hidden;
`;
