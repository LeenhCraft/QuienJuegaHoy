import {Routes, Route} from "react-router-dom";
import {Home, Login, UserAuth, ProtectorRutas, Profile} from "../index.js";
export function MisRutas() {
  const {user} = UserAuth();
  return (
    <Routes>
      <Route path="/" element={<a href="/futbol/profile">ir al perfil</a>} />
      <Route path="/futbol">
        <Route path="" element={<Home />} />
        <Route path="partidos" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectorRutas user={user} redirectTo={<Login />} />}>
          <Route path="perfil" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}
