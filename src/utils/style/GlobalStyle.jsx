import { useContext } from "react";
import { createGlobalStyle } from "styled-components";
import { ThemeContext } from "../context";

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
        background-color: ${({ isDarkMode }) =>
          isDarkMode ? "#2F2E41" : "white"};
          color: ${({ isDarkMode }) => (isDarkMode ? "white" : "#2F2E41")};
        margin: 0;
    }
`;

const GlobalStyle = () => {
  const { theme } = useContext(ThemeContext);
  return <StyledGlobalStyle isDarkMode={theme === "dark"} />;
};

export default GlobalStyle;
