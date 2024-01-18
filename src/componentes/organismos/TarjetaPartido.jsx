import styled from "styled-components";
import {InfoEquipo, InfoPartido} from "../../index.js";

export function TarjetaPartido({partido, abrirModal}) {
  return (
    <div
      id={partido.id}
      className="partido-container card grid grid-cols-3 px-8 py-3 my-3 lg:hover:bg-gray-100 cursor-pointer"
      onClick={() => abrirModal(partido.id)}
    >
      <InfoEquipo
        emblemSrc={partido.emblem_local}
        nombreEquipo={partido.local}
      />
      <InfoPartido {...partido} />
      <InfoEquipo
        emblemSrc={partido.emblem_visitante}
        nombreEquipo={partido.visitante}
      />
    </div>
  );
}
const Container = styled.div``;
