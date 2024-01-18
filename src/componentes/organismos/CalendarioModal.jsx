import styled from "styled-components";
import {useDatosStore} from "../../index";
import {AnimatePresence, motion} from "framer-motion";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const events = [{title: "Meeting", start: new Date()}];

export function CalendarioModal({isOpen, setIsOpen}) {
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur fixed z-10 inset-0 flex justify-center items-center"
        >
          <motion.div
            initial={{scale: 0, rotate: "20deg"}}
            animate={{scale: 1, rotate: "0deg"}}
            exit={{scale: 0, rotate: "0deg"}}
            onClick={(e) => e.stopPropagation()}
          >
            <Container className="ostias">
              <div className="match">
                <div className="w-11/12 mx-auto">
                  <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    weekends={false}
                    height={340}
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
                </div>
              </div>
            </Container>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
const Container = styled.div`
  .match {
    width: calc(100vw - 60px);
    min-width: calc(100vw - 20px);
    padding: 1rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 2px 0 rgba(48, 48, 48, 0.1),
      0 4px 4px 0 rgba(48, 48, 48, 0.1);
  }
  .calendar-wh {
    width: 100%;
    height: 450px;
  }
  .fc .fc-toolbar-title {
    font-size: 14px;
    font-weight: 600;
    color: var(--dark);
  }
  .fc .fc-prev-button,
  .fc .fc-next-button {
    outline: none;
    box-sizing: border-box;
    cursor: pointer;
    vertical-align: middle;
    user-select: none;
    position: relative;
    white-space: nowrap;
    z-index: 1;
    font-weight: 500;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #374df5;
    background-color: transparent;
    border: none;
    padding: 0.4em;
    transition: background-color 200ms ease 0s, box-shadow 200ms ease 0s,
      border-color 200ms ease 0s, color 200ms ease 0s;
  }
  .fc .fc-prev-button:hover,
  .fc .fc-next-button:hover {
    background-color: rgba(55, 77, 245, 0.15);
    border-color: rgba(55, 77, 245, 0.15);
    color: #374df5;
  }
  .fc .fc-prev-button:focus,
  .fc .fc-next-button:focus {
    background-color: rgba(55, 77, 245, 0.15);
    border-color: rgba(55, 77, 245, 0.15);
    color: #374df5;
    box-shadow: none;
    outline: none;
  }
  .fc .fc-button-primary:not(:disabled).fc-button-active,
  .fc .fc-button-primary:not(:disabled):active {
    background-color: rgba(55, 77, 245, 0.15);
    border-color: rgba(55, 77, 245, 0.15);
    color: #374df5;
  }
  .fc .fc-toolbar.fc-header-toolbar {
    margin: 0;
    padding: 1rem 0.5rem 0.1rem 0.5rem;
  }
  .fc .fc-col-header-cell-cushion {
    color: rgba(34, 34, 38, 0.45);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.33;
    padding: 8px 0;
  }
  /* editandon los dias */
  .fc .fc-daygrid-day-events {
    margin: 0;
  }
  .fc .fc-daygrid-body-natural .fc-daygrid-day-events {
    margin-bottom: 0;
  }
  .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events {
    min-height: 0.5em;
  }
  .fc-daygrid-day-frame.fc-scrollgrid-sync-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .fc .fc-daygrid-day.fc-day-today {
    border-radius: 9999px;
    color: #fff;
    font-weight: 700;
  }
  .fc .fc-daygrid-day-number {
    font-weight: 600;
    cursor: pointer;
    padding: 0;
    position: relative;
    z-index: 4;
  }
  button.fc-today-button.fc-button.fc-button-primary {
    outline: none;
    box-sizing: border-box;
    transition: background-color 200ms ease 0s, box-shadow 200ms ease 0s,
      border-color 200ms ease 0s, color 200ms ease 0s;
    cursor: pointer;
    vertical-align: middle;
    user-select: none;
    position: relative;
    white-space: nowrap;
    z-index: 1;
    appearance: button;
    -webkit-font-smoothing: antialiased;
    font: 500 12px "Sofascore Sans", sans-serif;
    text-transform: none;
    letter-spacing: normal;
    border-radius: 24px;
    padding: 4px 12px;
    color: #fff;
    background-color: #374df5;
    border: 1.5px solid #374df5;
  }
`;
const BtnToday = styled.button`
  outline: none;
  box-sizing: border-box;
  transition: background-color 200ms ease 0s, box-shadow 200ms ease 0s,
    border-color 200ms ease 0s, color 200ms ease 0s;
  cursor: pointer;
  vertical-align: middle;
  user-select: none;
  position: relative;
  white-space: nowrap;
  z-index: 1;
  appearance: button;
  -webkit-font-smoothing: antialiased;
  font: 500 12px "Sofascore Sans", sans-serif;
  text-transform: none;
  letter-spacing: normal;
  border-radius: 24px;
  padding: 4px 12px;
  color: #fff;
  background-color: #374df5;
  border: 1.5px solid #374df5;
`;
