import styled from "styled-components";
import {format, isToday} from "date-fns";
import {es} from "date-fns/locale";

export function Fecha({text, hora}) {
  const fechaFormateada = () => {
    const fechaPartidoDate = new Date(text);
    if (isToday(fechaPartidoDate)) {
      return "Hoy";
    } else {
      return format(fechaPartidoDate, "dd MMM", {locale: es});
    }
  };
  return (
    <Container className="text-xs font-medium fecha">
      <p className="capitalize">{fechaFormateada()}</p>
      <p>
        <strong>{hora}</strong>
      </p>
    </Container>
  );
}
const Container = styled.div`
  color: ${(props) => props.theme.textSection};
`;
