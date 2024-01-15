import styled from "styled-components";
import {SectionMobile, Matches} from "../index";

export function Home() {
  return (
    <Container>
      <SectionMobile />
      <Matches />
    </Container>
  );
}
const Container = styled.div`
  background-color: ${(props) => props.theme.body};
`;
