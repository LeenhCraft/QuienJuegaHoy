import styled from "styled-components";

export function Liga({eventoClick, nombre, emblema}) {
  return (
    <div
      onClick={eventoClick}
      className="hover:bg-gray-100 cursor-pointer rounded-md flex items-center gap-4 mb-1 p-2"
    >
      <div className="rounded-full p-2 max-w-[65px] max-h-[65px] w-full h-[65px] shadow-md border">
        <img
          src={emblema}
          alt={nombre}
          className="rounded-full w-full h-full object-contain"
        />
      </div>
      <p className="nombre-liga font-bold capitalize">{nombre}</p>
    </div>
  );
}
