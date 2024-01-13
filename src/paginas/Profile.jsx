import styled from "styled-components";
import {UserAuth, useAuthStore} from "../index";

export function Profile() {
  const {signout} = useAuthStore();
  const {user} = UserAuth();
  return (
    <Container>
      <h1>Profile</h1>
      <h3>Bienvenido Home {user.full_name}</h3>
      <img src={user.picture} />
      <button onClick={signout}>Cerrar</button>
    </Container>
  );
}
const Container = styled.div`
  button {
    background-color: #f8f6f8;
    border: 1px solid #f8f6f8;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 500;
    color: #000;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
`;
