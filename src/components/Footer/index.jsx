import React, { useContext } from "react";
import { ThemeContext } from "../../utils/context";
import styled from "styled-components";
import colors from "../../utils/style/colors";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

const NightModeButton = styled.button`
  background-color: transparent;
  padding: 5px;
  border: 1px solid ${colors.primary};
  border-radius: 30px;
  cursor: pointer;
  color: ${colors.secondary};
`;

const Footer = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === "light" ? "☀️" : "🌙"}
      </NightModeButton>
    </FooterContainer>
  );
};

export default Footer;
