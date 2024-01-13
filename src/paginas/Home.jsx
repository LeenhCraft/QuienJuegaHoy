import styled from "styled-components";

export function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <a href="/futbol/login">Ir al login</a>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8f6f8;
`;
