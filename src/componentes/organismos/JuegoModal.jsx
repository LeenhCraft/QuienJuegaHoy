import {AnimatePresence, motion} from "framer-motion";
import {BodyModal, FooterModal, HeaderModal} from "../../index";
import "../../JuegoModal.css";

export function JuegoModal({isOpen, setIsOpen, data}) {
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
            <div className="modal">
              <div className="match">
                <HeaderModal data={data} />
                <BodyModal data={data} />
                <FooterModal setIsOpen={setIsOpen} {...data} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
