import styled from "styled-components";
import {BtnMenu, LinksArray} from "../../index.js";

export function MenuMobile() {
  return (
    <Container className="fixed bottom-0 min-h-[50px] max-h-[50px] w-full px-1">
      <div className="grid grid-cols-4 h-[50px]">
        {LinksArray.map(({icon, label, to}, index) => (
          <BtnMenu key={index} Img={icon} NombreMenu={label} url={to} />
        ))}
      </div>
    </Container>
  );
}
const Container = styled.div`
  background-color: ${(props) => props.theme.bgNavMobile};
  border-top-width: 2px;
  border-color: ${(props) => props.theme.borderNavMobile};
  .links.active {
    padding: 0.25rem 0.375rem;
    background-color: #05a367;
    border-radius: 0.475rem;
  }
  .flotar {
    animation: flotando 3.2s ease-in-out infinite;
    transition: all 0.3s ease-in-out;
  }
  .links.active span {
    display: block;
  }
  .links.active img {
    filter: brightness(0) invert(1);
  }
  @keyframes flotando {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`;
