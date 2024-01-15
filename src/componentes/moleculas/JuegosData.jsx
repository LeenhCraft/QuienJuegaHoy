import styled from "styled-components";

export function Juego({local, visitante}) {
  return (
    <Container className="flex justify-center gap-3 content-center">
      <h1>{local}</h1>
      <h2>vs</h2>
      <h1>{visitante}</h1>
    </Container>
  );
}
const Container = styled.div``;
