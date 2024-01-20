import {Equipo, InfoJuegoModal} from "../../../index";

export function BodyModal({data}) {
  return (
    <div className="match-content">
      <Equipo id={data.id} nombre={data.local} img={data.emblem_local} />
      <InfoJuegoModal
        {...data}
      />
      <Equipo
        id={data.id}
        nombre={data.visitante}
        img={data.emblem_visitante}
      />
    </div>
  );
}
