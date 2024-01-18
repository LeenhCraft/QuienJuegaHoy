import styled from "styled-components";

export function Goles({goles_local, goles_visitante}) {
  return (
    <Container className="font-bold text-3xl text-center">
      {goles_local} - {goles_visitante}
    </Container>
  );
}
const Container = styled.div``;
