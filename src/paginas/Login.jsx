import styled from "styled-components";
import {LoginTemplate, v} from "../index.js";
export function Login() {
  return (
    <Container className="px-4 flex">
      <LoginTemplate />
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f8f6f8;
`;
