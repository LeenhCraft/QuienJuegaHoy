import styled from "styled-components";
import {InfoEquipo, InfoPartido} from "../../index.js";

export function TarjetaPartido({
  id,
  local,
  emblem_local,
  visitante,
  emblem_visitante,
}) {
  return (
    <div
      id={id}
      className="partido-container card grid grid-cols-3 px-8 py-3 my-3 lg:hover:bg-gray-100 cursor-pointer"
    >
      <InfoEquipo emblemSrc={emblem_local} nombreEquipo={local} />
      <InfoPartido fecha="14 Ene" hora="10:30 AM" />
      <InfoEquipo emblemSrc={emblem_visitante} nombreEquipo={visitante} />
    </div>
  );
}
const Container = styled.div``;
