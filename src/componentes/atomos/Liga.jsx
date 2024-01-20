import styled from "styled-components";

export function Liga({id, nombre, img}) {
  return (
    <Container className="hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-4 mb-1 p-2">
      <div className="rounded-full p-2 max-w-[65px] max-h-[65px] w-full h-[65px] shadow-md border">
        <img
          src={img}
          alt={nombre}
          className="rounded-full w-full h-full object-contain"
        />
      </div>
      <p className="nombre-liga font-bold capitalize">{nombre}</p>
    </Container>
  );
}
const Container = styled.div``;
