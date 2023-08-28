"use client";

const ProviderThemeStorage = ({ children }) => {
  const getModeThemePage = localStorage.getItem("theme");
  return <div className={getModeThemePage}>{children}</div>;
};

export default ProviderThemeStorage;
