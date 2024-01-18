import {createContext, useContext, useEffect, useState} from "react";
import {supabase, InsertarUsuarios} from "../index";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const {data: authListener} = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session == null) {
          setUser(null);
        } else {
          setUser(session?.user.user_metadata);
          insertarUsuarios(session?.user.user_metadata, session?.user.id);
          // console.log("event", event);
          // console.log("session", session?.user.user_metadata);
        }
      }
    );

    return () => {
      authListener.subscription;
    };
  }, []);

  const insertarUsuarios = async (dataProvider, idsupabase) => {
    const p = {
      idgoogle: dataProvider.provider_id,
      nombre: dataProvider.name,
      nombre_completo: dataProvider.full_name,
      foto: dataProvider.picture,
      email: dataProvider.email,
      idauth_supabase: idsupabase,
    };
    await InsertarUsuarios(p);
  };

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
