import styled from "styled-components";

export function CutomToolbar() {
  const CustomToolbar = (toolbar) => {
    const goToBack = () => {
      toolbar.onNavigate("PREV");
    };

    const goToNext = () => {
      toolbar.onNavigate("NEXT");
    };

    const goToToday = () => {
      toolbar.onNavigate("TODAY");
    };

    return (
      <div className="rbc-toolbar">
        <span className="rbc-btn-group">
          <button type="button" onClick={goToBack}>
            Anterior
          </button>
        </span>
        <span className="rbc-toolbar-label">
          {moment(toolbar.date).format("MMMM YYYY")}
        </span>
        <span className="rbc-btn-group">
          <button type="button" onClick={goToToday}>
            Mes
          </button>
        </span>
        <span className="rbc-btn-group">
          <button type="button" onClick={goToNext}>
            Siguiente
          </button>
        </span>
      </div>
    );
  };
}
const Container = styled.div``;
