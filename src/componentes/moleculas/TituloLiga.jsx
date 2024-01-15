import styled from "styled-components";

export function TituloLiga({nombre, img}) {
  return (
    <Container className="flex justify-center items-center font-bold my-6 py-3 rounded lg:bg-gray-200">
      <img
        src={img}
        alt="Serie A"
        className="mr-2 w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] object-cover"
      />
      <p className="ml-2 h-auto text-xl lg:text-base">{nombre}</p>
    </Container>
  );
}
const Container = styled.div`
  background-color: ${(props) => props.theme.bgTituloLiga};
  color: ${(props) => props.theme.textTituloLiga};
`;
