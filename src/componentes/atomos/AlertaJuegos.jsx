import styled from "styled-components";

export function AlertaJuegos() {
  return (
    <Container className="card p-4 my-3">
      <div className="text-center text-xl border rounded-xl px-4 py-8 bg-gray-100 font-bold">
        <h1 className="text-gray-500">No hay juegos para mostrar</h1>
      </div>
    </Container>
  );
}
const Container = styled.div``;
