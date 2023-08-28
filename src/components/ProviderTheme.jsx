"use client";

import { ThemeProvider } from "next-themes";

const ProviderTheme = ({ children }) => {
  return (
    <>
      <ThemeProvider>{children}</ThemeProvider>
      {/* <div className="w-full h-screen flex items-center justify-center text-6xl font-bold">
        Maintenance
      </div> */}
    </>
  );
};

export default ProviderTheme;
