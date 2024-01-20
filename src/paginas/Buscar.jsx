import styled from "styled-components";
import {SectionMobile} from "..";

export function Buscar() {
  return (
    <>
      <SectionMobile titulo="Buscar" />
      <Container className="px-4">
        <div className="bg-gray-200 rounded-lg flex gap-1 py-1.5 px-2 text-sm">
          <div className="flex justify-center items-center">
            <i className="fas fa-search text-zinc-400"></i>
          </div>
          <div className="bg-gray-200 box-border text-sm">
            <input
              className="block w-full bg-gray-200 text-zinc-400 outline-0"
              type="text"
              placeholder="Busca las ligas o competiciones"
            />
          </div>
        </div>
      </Container>
    </>
  );
}
const Container = styled.div`
  padding: 1rem 1rem 0;
  width: 100%;
  height: calc(100vh - calc(117px + 1rem));
`;
