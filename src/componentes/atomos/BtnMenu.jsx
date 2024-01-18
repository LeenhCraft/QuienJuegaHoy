import {NavLink} from "react-router-dom";
import styled from "styled-components";

export function BtnMenu({Img, NombreMenu, url}) {
  return (
    <Container className="flex flex-col justify-center items-center menu">
      <NavLink
        to={url}
        className={({isActive}) =>
          `item text-white links${isActive ? ` active flotar` : ``}`
        }
      >
        <img width="25px" src={Img} alt={NombreMenu} />
        <span className="text-xs">{NombreMenu}</span>
      </NavLink>
    </Container>
  );
}
const Container = styled.div`
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .links span {
    display: none;
    margin-left: 0.25rem;
  }
  img {
    filter: ${(props) => props.theme.filterNavMobile};
  }
`;
