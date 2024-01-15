import {createContext, useState} from "react";
import {MisRutas, Light, Dark, AuthContextProvider, MenuMobile} from "./index";
import {ThemeProvider} from "styled-components";
import {useLocation} from "react-router-dom";

export const ThemeContext = createContext(null);

function App() {
  const {pathname} = useLocation();
  const [theme, setTheme] = useState("dar");
  const themeStyle = theme === "dark" ? Dark : Light;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={(setTheme, theme)}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <MisRutas />
            <MenuMobile />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
