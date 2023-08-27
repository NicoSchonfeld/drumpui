"use client";

import React, { useState } from "react";
import LogoIcon from "./LogoIcon";
import { useParams } from "next/navigation";
import Link from "next/link";

import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const getModeThemePage = localStorage.getItem("theme");

  const pathname = useParams();

  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDrop = () => {
    setOpenDropdown(!openDropdown);
  };

  const listNavbarHeaderPage = [
    { id: "home", title: "home", path: "/" },
    {
      id: "docs",
      title: "docs",
      path: "/docs/guide/installation",
    } /* introduction */,
    { id: "components", title: "components", path: "/docs/components/avatar" },
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
      <header className="fixed top-0 left-0 backdrop-blur-md w-full bg-white/80 dark:bg-black/50 py-3 z-20">
        <nav className="container mx-auto flex items-center justify-between px-10">
          <Link href="/" rel="noopener noreferrer">
            <LogoIcon
              color={getModeThemePage === "dark" ? "white" : "black"}
              ui={getModeThemePage === "dark" ? "#EC4899" : "white"}
              w={140}
            />
          </Link>

          <div className="sr-only xl:not-sr-only w-auto">
            <div className="flex items-center justify-between bg-transparent w-[500px] px-5 py-2 rounded-md text-gray-600 dark:text-gray-400 border dark:border-white/20 shadow-sm cursor-text">
              <div className="flex items-center gap-2">
                <FaSearch className="text-sm" /> Search the docs
              </div>

              <div className="flex items-center gap-2">
                <div className="relative text-sm text-gray-600 bg-gray-200 rounded-md overflow-hidden">
                  <code className="px-1">Ctrl</code>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400"></div>
                </div>

                <div className="relative text-sm text-gray-600 bg-gray-200 rounded-md overflow-hidden">
                  <code className="px-1">K</code>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400"></div>
                </div>
              </div>
            </div>
          </div>

          <ul className="flex items-center space-x-5 sr-only xl:not-sr-only">
            <li>
              <div className="relative">
                <div className="inline-flex items-center overflow-hidden">
                  <button
                    className="h-full flex items-center gap-2 text-gray-600 dark:text-gray-100 hover:text-gray-700"
                    onClick={toggleDrop}
                  >
                    <span>Theme</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        openDropdown
                          ? `h-5 w-5 rotate-180 transition-all`
                          : "h-5 w-5 transition-all"
                      }
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                <AnimatePresence>
                  {openDropdown && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="absolute z-10 mt-2 w-40 rounded-md border border-gray-100 dark:border-white/20 bg-white shadow-lg dark:bg-black"
                      role="menu"
                    >
                      <div className="p-2">
                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="w-full flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-500 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-500/50 hover:text-gray-700"
                          onClick={toggleThemeLight}
                        >
                          <BsFillSunFill /> Light
                        </motion.button>

                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="w-full flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-500 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-500/50 hover:text-gray-700"
                          onClick={toggleThemeDark}
                        >
                          <BsFillMoonFill /> Dark
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </li>
            <li className="relative cursor-pointer dark:text-gray-400 text-gray-500 text-sm border border-black/20 dark:border-white/30 rounded-full px-2 group">
              <p>v1.0.0</p>
              <div className="hidden group-hover:inline">
                <p className="absolute top-6 -left-10 border border-white/20 bg-black text-white px-2 py-1 text-[12px] rounded-md w-40 z-10">
                  First version of DrumpUI
                </p>
              </div>
            </li>
            <li>
              <button className="flex items-center gap-2 transition rounded border border-gray-300 bg-gray-200/50 text-gray-800 hover:bg-gray-300/50 dark:bg-gray-200 dark:hover:bg-gray-300 px-4 py-2 text-sm font-bold focus:outline-none">
                <span className="text-red-500">❤</span> Sponsor
              </button>
            </li>
          </ul>

          <ul className="xl:sr-only not-sr-only">
            <li>
              {getModeThemePage === "dark" ? (
                <button className="text-white text-2xl">
                  <BiMenuAltRight />
                </button>
              ) : (
                <button className="text-black text-2xl">
                  <BiMenuAltRight />
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
