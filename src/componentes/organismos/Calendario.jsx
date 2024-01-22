import styled from "styled-components";
import {useEffect, useState} from "react";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io";
import {useDatosStore, mesesDelAnio} from "../../index";
import "../../calculadoranativa.css";

export function Calendario({setIsOpen}) {
  const {actualizarCalendario} = useDatosStore();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [monthPicker, setMonthPicker] = useState("");
  const [DiasDelMes, setDiasDelMes] = useState(null);
  const nombremeses = mesesDelAnio;

  const generateCalendar = (month, year) => {
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startDay = firstDayOfMonth.getDay();
    const totalDays = lastDayOfMonth.getDate();
    setMonthPicker(nombremeses[month]);

    const days = Array.from({length: totalDays}, (_, index) => {
      const day = index + 1;
      const currentDate = new Date();
      const isCurrentMonth =
        currentDate.getMonth() === month && currentDate.getFullYear() === year;
      const isToday = isCurrentMonth && day === currentDate.getDate();

      return (
        <div
          key={index}
          data-day={day}
          className={`${isToday ? "current-date" : ""}`}
        >
          {day}
        </div>
      );
    });

    const emptyDays = Array.from({length: startDay}, (_, index) => (
      <div key={`empty-${index}`} className="dia-vacio" />
    ));

    return [...emptyDays, ...days];
  };

  useEffect(() => {
    setDiasDelMes(generateCalendar(currentMonth, currentYear));
  }, [currentMonth, currentYear]);

  const handlePrevClick = (e) => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };
  const handleNextClick = (e) => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };
  const handleTodayClick = (e) => {
    setCurrentYear(new Date().getFullYear());
    setCurrentMonth(new Date().getMonth());
    actualizarCalendario(new Date().toISOString().slice(0, 10) + "%");
    const selected = document.querySelector(".selected");
    if (selected) {
      selected.classList.remove("selected");
    }
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };
  const handleDataClick = (e) => {
    let selected = document.querySelector(".selected");
    const day = e.target.dataset.day;
    if (selected) {
      selected.classList.remove("selected");
    }
    e.target.classList.add("selected");
    const fechaSeleccionada = `${currentYear}-${(currentMonth + 1)
      .toString()
      .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;

    console.log(fechaSeleccionada);
    actualizarCalendario(fechaSeleccionada + "%");
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };
  return (
    <DivCalendar className="calendar">
      <div className="calendar-header">
        <div className="date-picker" id="date-picker">
          <button
            onClick={handlePrevClick}
            className="month-change"
            id="pre-month"
          >
            <IoIosArrowBack />
          </button>
          <span className="current-date">
            {monthPicker + " " + currentYear}
          </span>
          <button
            onClick={handleNextClick}
            className="month-change"
            id="next-month"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className="calendar-body">
        <div className="calendar-week-days">
          <div>Dom</div>
          <div>Lun</div>
          <div>Mar</div>
          <div>Mie</div>
          <div>Jue</div>
          <div>Vie</div>
          <div>Sab</div>
        </div>
        <div onClick={handleDataClick} className="calendar-days">
          {DiasDelMes}
        </div>
      </div>
      <div className="calendar-footer">
        <button onClick={handleTodayClick} className="today">
          Hoy
        </button>
      </div>
    </DivCalendar>
  );
}

const DivCalendar = styled.div`
  .year-picker {
    color: ${(props) => props.theme.text};
  }
`;
