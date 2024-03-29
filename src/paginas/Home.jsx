import styled from "styled-components";
import {SectionMobile, Juegos} from "../index";

export function Home() {
  return (
    <Container>
      <SectionMobile titulo="Partidos" />
      <Juegos />
    </Container>
  );
}
const Container = styled.div`
  background-color: ${(props) => props.theme.body};
`;
