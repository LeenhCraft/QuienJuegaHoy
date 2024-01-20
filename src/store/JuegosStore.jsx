import {create} from "zustand";
import {getMatches} from "../index";

export const useDatosStore = create((set) => ({
  calendarioActualizado: false,
  fecha_seleccionada: "",
  partidos: [], // Nuevo estado para almacenar los partidos
  actualizarCalendario: async (fecha_parametro) => {
    try {
      const {data, error} = await getMatches(fecha_parametro); // Utiliza la función importada
      if (error) {
        console.error(error, "Error en JuegosStore|actualizarCalendario");
        return;
      }
      const competicionesTemp = {};
      data.forEach((partido) => {
        const competicion = partido.competicion;
        if (!competicionesTemp[competicion]) {
          competicionesTemp[competicion] = {
            partidos: [],
            nombre: competicion,
            logo: partido.emblem_competicion,
          };
        }
        competicionesTemp[competicion].partidos.push(partido);
      });

      set((state) => ({
        calendarioActualizado: !state.calendarioActualizado,
        fecha_seleccionada: new Date(fecha_parametro).toLocaleDateString(
          "es-PE",
          {
            day: "numeric",
            month: "long",
            year: "numeric",
          }
        ),
        partidos: competicionesTemp || [], // Actualiza la lista de partidos en el estado
      }));
    } catch (error) {
      console.log(
        error.error_description || error.message,
        "Error al consultar supabase|actualizarCalendario"
      );
      return {error};
    }
  },
}));
