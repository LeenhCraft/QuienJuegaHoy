import {supabase} from "../index";

export const getMatches = async (fecha_parametro) => {
  try {
    const {data, error} = await supabase.rpc("obtener_partidos_fecha", {
      fecha_parametro,
    });
    return {data, error};
  } catch (error) {
    console.log(error.error_description || error.message + " getMatches");
  }
};

export const buscarJuego = async (juegoid) => {
  try {
    const {data, error} = await supabase.rpc("juegoporid", {
      juegoid,
    });
    return {data, error};
  } catch (error) {
    console.log(error.error_description || error.message + " buscarJuego");
  }
};
