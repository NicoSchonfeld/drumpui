"use client";

import React, { useState } from "react";
import LogoIcon from "./LogoIcon";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";

import {
  BsFillSunFill,
  BsFillMoonFill,
  BsLink45Deg,
  BsGithub,
} from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  const [openModalSeach, setOpenModalSeach] = useState(false);
  const map = new Map();
  const leerEntradas = (e) => {
    map.set(e.key, e.type == "keydown");
    if (map.get("Control") && map.get("c")) {
      setOpenModalSeach(!openModalSeach);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener(`keydown`, leerEntradas);
    window.addEventListener(`keyup`, leerEntradas);
  }

  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDrop = () => {
    setOpenDropdown(!openDropdown);
  };

  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  const listSearchComponents = [
    {
      id: "installation",
      title: "Installation",
      path: "/docs/guide/installation",
    },
    { id: "avatar", title: "Avatar", path: "/docs/components/avatar" },
    { id: "alert", title: "Alert", path: "/docs/components/alert" },
    { id: "accordion", title: "Accordion", path: "/docs/components/accordion" },
    { id: "badge", title: "Badge", path: "/docs/components/badge" },
    { id: "button", title: "Button", path: "/docs/components/button" },
    { id: "card", title: "Card", path: "/docs/components/card" },
    { id: "input", title: "Input", path: "/docs/components/input" },
    { id: "modal", title: "Modal", path: "/docs/components/modal" },
    { id: "skeleton", title: "Skeleton", path: "/docs/components/skeleton" },
    {
      id: "breadcrumb",
      title: "Breadcrumb",
      path: "/docs/components/breadcrumb",
    },
    {
      id: "creadit_card",
      title: "Credit card",
      path: "/docs/components/creaditcard",
    },
    {
      id: "table",
      title: "Table",
      path: "/docs/components/table",
      newVersion: true,
    },
    {
      id: "headers",
      title: "Headers",
      path: "/docs/components/headers",
      newVersion: true,
    },
  ];

  const toggleThemeLight = () => {
    setTheme("light");
  };

  const toggleThemeDark = () => {
    setTheme("dark");
  };

  const [listComponents, setListComponents] = useState(listSearchComponents);
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setKeyword(value);
  };

  let newResult = listComponents.filter((el) =>
    el.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <>
      <header className="fixed top-0 left-0 backdrop-blur-md w-full bg-white/50 dark:bg-black/50 py-3 z-20">
        <AnimatePresence>
          {openModalSeach && (
            <div className="fixed top-0 left-0 bg-black/80 w-full h-screen flex items-start justify-center backdrop-blur-sm z-50 px-10 py-40">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="bg-white dark:bg-gray-900 backdrop-blur-xl w-auto h-auto max-w-[600px] rounded shadow-xl relative flex flex-col p-2"
              >
                <div className="relative w-[600px] h-auto px-2 py-5">
                  <svg
                    onClick={() => setOpenModalSeach(false)}
                    className="text-gray-600 dark:text-gray-100 cursor-pointer absolute top-2 right-5"
                    data-testid="geist-icon"
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </svg>

                  <FaSearch className="text-md absolute top-[31px] left-10 dark:text-gray-100 text-gray-600" />
                  <input
                    type="text"
                    placeholder="Search the docs"
                    className="w-full py-2 px-20 focus:outline-none bg-transparent text-gray-600 dark:text-gray-100"
                    autoFocus
                    value={keyword}
                    onChange={handleChange}
                  />
                </div>

                {!keyword ? null : (
                  <>
                    <hr />

                    <div className="py-5 px-2 w-full">
                      <ul className="flex flex-col items-start gap-3">
                        {newResult?.map((dato) => (
                          <li
                            key={dato.id}
                            className="w-full flex items-center justify-between py-4 px-5 rounded-md border font-bold text-gray-800 hover:text-gray-100 hover:underline dark:bg-pink-100/20 dark:border-white/20 dark:text-gray-100 bg-pink-100 hover:bg-pink-500 dark:hover:bg-pink-500"
                          >
                            <Link
                              href={dato.path}
                              onClick={() => setOpenModalSeach(false)}
                            >
                              {dato.title}
                            </Link>
                            <BsLink45Deg className="text-bold text-2xl" />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <nav className="container mx-auto flex items-center justify-between px-10">
          <Link href="/" rel="noopener noreferrer">
            <LogoIcon
              color={theme === "dark" ? "white" : "black"}
              colorUI={theme === "dark" ? "white" : "#EC4899"}
              ui={theme === "dark" ? "#EC4899" : "white"}
              w={140}
            />
          </Link>

          <div
            className="sr-only xl:not-sr-only w-auto"
            onClick={() => setOpenModalSeach(true)}
          >
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
                  <code className="px-1">C</code>
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-400"></div>
                </div>
              </div>
            </div>
          </div>

          <ul className="flex items-center space-x-5 sr-only xl:not-sr-only">
            <li>
              <a
                className="text-gray-400 hover:text-gray-500 transition-all"
                href="https://github.com/NicoSchonfeld/drumpui-components/tree/main/src/components"
                target="_blank"
              >
                <BsGithub />
              </a>
            </li>

            <li>
              <a
                className="text-gray-400 hover:text-gray-500 transition-all"
                href="https://twitter.com/NicoSchonfeld__"
                target="_blank"
              >
                <svg
                  data-testid="geist-icon"
                  fill="none"
                  height="15"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="15"
                >
                  <path
                    fill="var(--geist-fill, currentColor)"
                    stroke="none"
                    d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"
                  />
                </svg>
              </a>
            </li>

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
                          onClick={() => {
                            toggleThemeLight();
                            toggleDrop();
                          }}
                        >
                          <BsFillSunFill /> Light
                        </motion.button>

                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 }}
                          className="w-full flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-500 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-500/50 hover:text-gray-700"
                          onClick={() => {
                            toggleThemeDark();
                            toggleDrop();
                          }}
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
              <a
                href="https://cafecito.app/nicoschonfeld"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition rounded border border-gray-300 bg-gray-200/50 text-gray-800 hover:bg-gray-300/50 dark:bg-gray-200 dark:hover:bg-gray-300 px-4 py-2 text-sm font-bold focus:outline-none"
              >
                <span className="text-red-500">❤</span> Sponsor
              </a>
            </li>
          </ul>

          <ul className="xl:sr-only not-sr-only">
            <li>
              {theme === "dark" ? (
                <button
                  className="text-white text-2xl"
                  onClick={() => setOpenDrawer(!openDrawer)}
                >
                  <BiMenuAltRight />
                </button>
              ) : (
                <button
                  className="text-black text-2xl"
                  onClick={() => setOpenDrawer(!openDrawer)}
                >
                  <BiMenuAltRight />
                </button>
              )}
            </li>
          </ul>
        </nav>
      </header>

      <AnimatePresence>
        {openDrawer && (
          <div className="fixed top-0 left-0 bg-gray-900/50 w-full h-full flex items-center justify-center backdrop-blur-sm z-[60]">
            <motion.div
              initial={{ opacity: 1, y: 1000 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 1, y: 1000 }}
              className="w-full flex h-screen overflow-scroll flex-col justify-between border-e bg-white dark:bg-black fixed top-0 right-0"
            >
              <div className="px-4 py-6 container mx-auto">
                <div className="w-full flex items-center justify-between">
                  <LogoIcon
                    color={theme === "dark" ? "white" : "black"}
                    colorUI={theme === "dark" ? "white" : "#EC4899"}
                    ui={theme === "dark" ? "#EC4899" : "white"}
                    w={100}
                  />

                  <span
                    onClick={toggleDrawer}
                    className="grid h-7 w-7 place-content-center rounded-sm bg-black/10 dark:bg-white/20 text-xs dark:text-white text-gray-600 font-bold cursor-pointer"
                  >
                    <svg
                      data-testid="geist-icon"
                      fill="none"
                      height="24"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M18 6L6 18" />
                      <path d="M6 6l12 12" />
                    </svg>
                  </span>
                </div>

                <div className="px-5">
                  <h3 className="text-pink-500 text-2xl font-bold mt-10 mb-3">
                    Docs
                  </h3>

                  <ul className="space-y-2">
                    {listSearchComponents?.map((dato) => (
                      <li
                        key={dato.id}
                        className={
                          pathname === dato.path
                            ? "text-black dark:text-white/80"
                            : "text-black/50 hover:text-black/40 dark:text-white/50 dark:hover:text-white/40 transition-all"
                        }
                      >
                        <Link
                          href={dato.path}
                          rel="noopener noreferrer"
                          onClick={toggleDrawer}
                        >
                          {dato.title}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <ul className="flex items-center justify-center pb-5 pt-10 space-x-5 not-sr-only lg:sr-only w-full">
                    <li>
                      <a
                        className="text-gray-400 hover:text-gray-500 transition-all text-2xl"
                        href="https://github.com/NicoSchonfeld/drumpui-components/tree/main/src/components"
                        target="_blank"
                      >
                        <BsGithub />
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-400 hover:text-gray-500 transition-all"
                        href="https://twitter.com/NicoSchonfeld__"
                        target="_blank"
                      >
                        <svg
                          className="pt-1.5"
                          data-testid="geist-icon"
                          fill="none"
                          height="30"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="30"
                        >
                          <path
                            fill="var(--geist-fill, currentColor)"
                            stroke="none"
                            d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"
                          />
                        </svg>
                      </a>
                    </li>

                    <li>
                      <div className="relative">
                        <div className="inline-flex items-center overflow-hidden">
                          <button
                            className="h-full flex items-center gap-2 pt-1.5 text-lg text-gray-600 dark:text-gray-100 hover:text-gray-700"
                            onClick={toggleDrop}
                          >
                            <span>
                              {theme === "dark" ? (
                                <BsFillSunFill />
                              ) : (
                                <BsFillMoonFill />
                              )}
                            </span>
                          </button>
                        </div>

                        <AnimatePresence>
                          {openDropdown && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="absolute z-10 mt-2 -left-32 w-40 rounded-md border border-gray-100 dark:border-white/20 bg-white shadow-lg dark:bg-black"
                              role="menu"
                            >
                              <div className="p-2">
                                <motion.button
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.3, delay: 0.2 }}
                                  className="w-full flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-500 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-500/50 hover:text-gray-700"
                                  onClick={() => {
                                    toggleThemeLight();
                                    toggleDrop();
                                  }}
                                >
                                  <BsFillSunFill /> Light
                                </motion.button>

                                <motion.button
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 0.3, delay: 0.3 }}
                                  className="w-full flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-gray-500 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-500/50 hover:text-gray-700"
                                  onClick={() => {
                                    toggleThemeDark();
                                    toggleDrop();
                                  }}
                                >
                                  <BsFillMoonFill /> Dark
                                </motion.button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </li>
                  </ul>

                  <ul className="w-full py-5 flex flex-col-reverse items-center justify-center gap-5">
                    <li className="relative cursor-pointer dark:text-gray-400 text-gray-500 text-sm border border-black/20 dark:border-white/30 rounded-full px-2 group">
                      <p>v1.0.0</p>
                      <div className="hidden group-hover:inline">
                        <p className="absolute top-6 -left-10 border border-white/20 bg-black text-white px-2 py-1 text-[12px] rounded-md w-40 z-10">
                          First version of DrumpUI
                        </p>
                      </div>
                    </li>
                    <li>
                      <a
                        href="https://cafecito.app/nicoschonfeld"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 transition rounded border border-gray-300 bg-gray-200/50 text-gray-800 hover:bg-gray-300/50 dark:bg-gray-200 dark:hover:bg-gray-300 px-4 py-2 text-sm font-bold focus:outline-none"
                      >
                        <span className="text-red-500">❤</span> Sponsor
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
