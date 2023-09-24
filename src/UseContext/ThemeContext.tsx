import { createContext } from "react"; // 1st createContext frm react import it
import { theme } from "./theme";

// next create themeProps
type ThemeContextProviderPrps = {
  children: React.ReactNode;
};
// 2nd-a create ThemeContext variable = createContext that accept value of theme object in theme.ts
export const ThemeContext = createContext(theme);

// then pass the themeContextProvider as props destructured it as children
const ThemeContextProvider = ({ children }: ThemeContextProviderPrps) => {
  return (
    <>
      {/* called it  */}
      {/* <h1> {children}</h1> */}
      <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    </>
  );
};

export default ThemeContextProvider;
