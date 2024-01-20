export function Estado({idestado}) {
  return (
    <>
      {idestado === 1 && (
        <div className={"match-status bg-gray-100 text-gray-500"}>
          Finalizado
        </div>
      )}
      {idestado === 2 && (
        <div className={"match-status bg-blue-100 text-blue-500"}>Pronto</div>
      )}
      {idestado === 7 && (
        <div className={"match-status bg-green-100 text-green-500"}>
          En juego
        </div>
      )}
    </>
  );
}
