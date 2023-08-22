"use client";

import React from "react";
import LogoIcon from "./LogoIcon";
import { useParams } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const getModeThemePage = localStorage.getItem("theme");

  const pathname = useParams();

  const listNavbarHeaderPage = [
    { id: "home", title: "Home", path: "/" },
    { id: "docs", title: "Docs", path: "/docs/guide/introduction" },
    { id: "components", title: "Components", path: "/docs/components/avatar" },
  ];

  const toggleThemeLight = () => {
    localStorage.setItem("theme", "light");
    location.reload("/");
  };

  const toggleThemeDark = () => {
    localStorage.setItem("theme", "dark");
    location.reload("/");
  };

  return (
    <>
      <header className="fixed top-0 left-0 backdrop-blur-md w-full bg-white/20 dark:bg-black/20 py-3 z-20">
        <nav className="container mx-auto flex items-center justify-between px-14">
          <Link href="/" rel="noopener noreferrer">
            <LogoIcon
              color={getModeThemePage === "dark" ? "white" : "black"}
              ui={getModeThemePage === "dark" ? "#EC4899" : "white"}
              w={100}
            />
          </Link>

          <ul className="flex items-center space-x-5">
            {listNavbarHeaderPage?.map((dato, index) => (
              <li
                key={dato.id}
                className={
                  pathname === dato.path
                    ? "text-white dark:text-white/80 sr-only xl:not-sr-only"
                    : "text-black/50 hover:text-black/40 dark:text-white/50 dark:hover:text-white/40 transition-all sr-only xl:not-sr-only"
                }
              >
                <Link href={dato.path} rel="noopener noreferrer">
                  {dato.title}
                </Link>
              </li>
            ))}
            <li>
              {getModeThemePage === "dark" ? (
                <button
                  className="text-white sr-only xl:not-sr-only"
                  onClick={toggleThemeLight}
                >
                  Light
                </button>
              ) : (
                <button
                  className="text-red-500 sr-only xl:not-sr-only"
                  onClick={toggleThemeDark}
                >
                  Dark
                </button>
              )}
            </li>
            <li className="xl:sr-only not-sr-only">
              {getModeThemePage === "dark" ? (
                <button className="text-white">MENU</button>
              ) : (
                <button className="text-black">MENU</button>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
