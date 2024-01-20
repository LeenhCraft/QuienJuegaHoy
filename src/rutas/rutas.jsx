import {Routes, Route} from "react-router-dom";
import {
  Home,
  Login,
  UserAuth,
  ProtectorRutas,
  Profile,
  Ligas,
  Buscar,
} from "../index.js";
export function MisRutas() {
  const {user} = UserAuth();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/partidos" element={<Home />} />
      <Route path="/ligas" element={<Ligas />} />
      <Route path="/buscar" element={<Buscar />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectorRutas user={user} redirectTo={<Login />} />}>
        <Route path="/perfil" element={<Profile />} />
      </Route>
    </Routes>
  );
}
