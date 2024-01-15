import styled from "styled-components";

export function InfoPartido({fecha, hora}) {
  return (
    <div className="flex flex-col justify-center items-center text-center leading-3">
      <p className="text-xs font-medium cl-gray-100">{fecha}</p>
      <span className="font-bold text-lg lg:text-xl">{hora}</span>
    </div>
  );
}
