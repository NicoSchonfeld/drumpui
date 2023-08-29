"use client";

import { ThemeProvider, useTheme } from "next-themes";
import React, { useEffect } from "react";

const ProviderTheme = ({ children }) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);

  return (
    <div className={theme}>
      <ThemeProvider>{children}</ThemeProvider>
    </div>
  );
};

export default ProviderTheme;
