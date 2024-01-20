import styled from "styled-components";
const estadosPermitidos = [7, 8, 1, 5, 6];

export function FooterModal({setIsOpen, idestado}) {
  return (
    <div className="match-footer">
      {!estadosPermitidos.includes(idestado) && (
        <p className="text-xs n8 text-center">
          Para <strong>aspotar</strong> haz clic en el botón de la{" "}
          <strong>cuota</strong> o en el escudo del <strong>equipo</strong>.
        </p>
      )}
      <button className="match-bet-place" onClick={() => setIsOpen(false)}>
        Cerrar
      </button>
    </div>
  );
}
const Container = styled.div``;
