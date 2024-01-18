import styled from "styled-components";
import {
  buscarJuego,
  TituloLiga,
  TarjetaPartido,
  JuegoModal,
  useDatosStore,
  AlertaJuegos,
} from "../../index";
import {useEffect, useState} from "react";

export function Juegos() {
  const {partidos, actualizarCalendario} = useDatosStore();

  useEffect(() => {
    const date = new Date();
    date.setHours(date.getHours() - 5);
    const peruDate = date.toISOString().slice(0, 10);
    actualizarCalendario(peruDate + "%");
  }, []);

  const [juegos, setJuegos] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const abrirModal = async (juegoId) => {
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
    });
  };

  return (
    <Container>
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
    </Container>
  );
}
const Container = styled.div`
  margin-bottom: 50px;
`;
