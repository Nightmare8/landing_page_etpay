import { createGlobalStyle } from "styled-components";

type ThemeType = {
	colors: Record<string, string>;
};

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    
`;
