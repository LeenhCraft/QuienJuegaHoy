import {styled} from "styled-components";
import {FaRegStar} from "react-icons/fa";
import {BiBellPlus} from "react-icons/bi";

export function Acciones() {
  return (
    <Container className="match-actions">
      <button className="btn-icon">
        <FaRegStar />
      </button>
      <button className="btn-icon">
        <BiBellPlus />
      </button>
    </Container>
  );
}
const Container = styled.div``;