import styled from "styled-components";
import {useDatosStore} from "../../index";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import dayGridPlugin from "@fullcalendar/daygrid";
import "../../calendario.css";

export function Fullcalendar({setIsOpen}) {
  const {actualizarCalendario} = useDatosStore();
  const handleDataClick = (e) => {
    const days = document.querySelectorAll(".fc-daygrid-day");
    days.forEach((day) => {
      day.style.backgroundColor = "transparent";
    });

    e.dayEl.style.backgroundColor = "red";
    actualizarCalendario(e.dateStr + "%");
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };
  return (
    <Container>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        height={340}
        locale={"es"}
        titleFormat={{month: "long", year: "numeric"}}
        buttonIcons={{
          prev: "chevron-left",
          next: "chevron-right",
        }}
        headerToolbar={{
          left: "prev",
          center: "title",
          right: "next",
        }}
        footerToolbar={{
          left: "today",
        }}
        dateClick={handleDataClick}
        //   events={events}
        //   eventContent={renderEventContent}
      />
    </Container>
  );
}
const Container = styled.div``;
