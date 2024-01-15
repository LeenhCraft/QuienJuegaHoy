import { BiColor } from "react-icons/bi";
import styled from "styled-components";

export function InfoEquipo({emblemSrc, nombreEquipo}) {
  return (
    <Container className="flex flex-col justify-center items-center text-center leading-3 font-bold">
      <img
        src={emblemSrc}
        alt={nombreEquipo}
        className="mb-2 w-[55px] h-[55px] mx-auto lg:h-[60px] object-contain"
      />
      <p className="line-clamp-2 text-base lg:text-base break-all">
        {nombreEquipo}
      </p>
    </Container>
  );
}
const Container = styled.div`
  p{
    color: ${(props) => props.theme.textRGBa};
  }
`