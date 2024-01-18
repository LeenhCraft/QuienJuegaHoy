import {supabase} from "../index";

export const InsertarUsuarios = async (p) => {
  try {
    const {data} = await supabase.from("fut_usuario").insert(p).select();
    return data;
  } catch (error) {
    alert(error.error_description || error.message + "InsertarUsuarios");
  }
};
