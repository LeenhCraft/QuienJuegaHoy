import styled from "styled-components";
import {Calendario, Fullcalendar, useDatosStore} from "../../index";
import {AnimatePresence, motion} from "framer-motion";

const events = [{title: "Meeting", start: new Date()}];

export function CalendarioModal({isOpen, setIsOpen}) {
  const {actualizarCalendario} = useDatosStore();
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
                  <Calendario setIsOpen={setIsOpen} />
                  <div className="my-2">
                    <button onClick={() => setIsOpen(false)} className="button">
                      Cerrar Ventana
                    </button>
                  </div>
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
  .button {
    position: absolute;
    bottom: -16px;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    background-color: #623ce6;
    border-radius: 6px;
    padding: 5px 24px;
    color: rgba(255, 255, 255, 0.9);
    font-size: 14px;
    box-shadow: 0 4px 8px 0 rgba(48, 48, 48, 0.25);
    font-weight: 600;
  }
`;
