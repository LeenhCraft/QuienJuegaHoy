import styled, {ThemeContext} from "styled-components";
import HashLoader from "react-spinners/HashLoader";
import {SectionMobile} from "../componentes/moleculas/Section";
import {useContext, useEffect, useState} from "react";
import {Liga, listaDeLigas, fetchData} from "../index";

export function Ligas() {
  const temaActual = useContext(ThemeContext);
  const [isLoading, setisLoading] = useState(true);
  const [Ligas, setLigas] = useState([]);
  const [VerLiga, setVerLiga] = useState(false);
  const [ligaSeleccionada, setLigaSeleccionada] = useState(null);

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

  const handleLigaClick = (liga) => {
    const url =
      import.meta.env.VITE_API_FOOT +
      "/competitions/" +
      liga.codigo +
      "/standings";
    const options = {
      method: "GET",
      headers: {"X-Auth-Token": import.meta.env.VITE_API_FOOT_TOKEN},
      mode: "cors",
    };
    const data = fetchData(url, options);
    console.log(data);
  };
  return (
    <>
      <SectionMobile titulo="Ligas" />
      <Container>
        {isLoading && (
          <div className="w-full h-[calc(100vh-130px)] flex justify-center items-center">
            <HashLoader color={temaActual.primary} />
          </div>
        )}
        {!isLoading &&
          Ligas?.map((liga) => (
            <Liga
              key={liga.id}
              eventoClick={() => handleLigaClick(liga)}
              nombre={liga.nombre}
              emblema={liga.emblema}
            />
          ))}
      </Container>
    </>
  );
}
const Container = styled.div`
  padding: 0 1rem;
  margin-bottom: 70px;
`;
