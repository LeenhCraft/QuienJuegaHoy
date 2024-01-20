import styled from "styled-components";
import {Acciones, Competicion, Estado} from "../../../index";

export function HeaderModal({data}) {
  return (
    <Container className="match-header">
      <Estado idestado={data.idestado} />
      <Competicion img={data.emblem_competicion} nombre={data.competicion} />
      <Acciones />
    </Container>
  );
}
const Container = styled.div``;
