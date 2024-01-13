import {createContext, useState} from "react";
import {MisRutas, Light, Dark, AuthContextProvider} from "./index";
import {ThemeProvider} from "styled-components";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? Light : Dark;
  return (
    <>
      <ThemeContext.Provider value={(setTheme, theme)}>
        <ThemeProvider theme={themeStyle}>
          <AuthContextProvider>
            <MisRutas />
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
