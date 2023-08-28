"use client";

import { ThemeProvider } from "next-themes";

const ProviderTheme = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ProviderTheme;
