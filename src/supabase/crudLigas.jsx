import {supabase} from "../index";

export const listaDeLigas = async () => {
  try {
    const {data, error} = await supabase.rpc("listarligas");
    return {data, error};
  } catch (error) {
    console.log(error.error_description || error.message + " listarLigas");
  }
};
