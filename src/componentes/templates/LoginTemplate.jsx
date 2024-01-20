import styled from "styled-components";
import {v, useAuthStore} from "../../index.js";

export function LoginTemplate() {
  const {signInWithGoogle} = useAuthStore();
  return <>template</>;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
