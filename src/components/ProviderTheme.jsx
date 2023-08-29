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
      {/* <ThemeProvider>{children}</ThemeProvider> */}
      <div className="w-full h-screen flex items-center justify-center text-6xl font-bold text-gray-600 dark:text-gray-100 text-center">
        Maintenance
      </div>
    </div>
  );
};

export default ProviderTheme;
