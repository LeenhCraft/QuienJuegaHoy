import styled, {ThemeContext} from "styled-components";
import HashLoader from "react-spinners/HashLoader";
import {SectionMobile} from "../componentes/moleculas/Section";
import {useContext, useEffect, useState} from "react";
import {Liga, listaDeLigas} from "../index";

export function Ligas() {
  const temaActual = useContext(ThemeContext);
  const [isLoading, setisLoading] = useState(true);
  const [Ligas, setLigas] = useState([]);
  useEffect(() => {
    listaDeLigas().then(({data, error}) => {
      if (error) {
        console.log(error, "listarLigas");
        return;
      }
      setLigas(data);
      setisLoading(false);
    });
  }, []);
  return (
    <>
      <SectionMobile titulo="Ligas" />
      <Container>
        {isLoading ? (
          <div className="w-full h-[calc(100vh-130px)] flex justify-center items-center">
            <HashLoader color={temaActual.primary} />
          </div>
        ) : (
          <>
            {Ligas.map((liga) => (
              <Liga
                key={liga.id}
                id={liga.id}
                nombre={liga.nombre}
                img={liga.emblema}
              />
            ))}
          </>
        )}
      </Container>
    </>
  );
}
const Container = styled.div`
  padding: 0 1rem;
  margin-bottom: 70px;
`;
