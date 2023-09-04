"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarListPages from "@/components/NavbarListPages";
import Link from "next/link";

import styled from "@/styles/lineGradiant.module.css";
import WindowsComponents from "@/components/WindowsComponents";
import CodeComponent from "@/components/CodeComponent";
import { useTheme } from "next-themes";
import { codeHeaders, codeTable } from "@/components/CodeExapmleOfComponents";
import { RxHamburgerMenu } from "react-icons/rx";

const Table = () => {
  const { theme, setTheme } = useTheme();
  const [backToTopScroll, setBackToTopScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBackToTopScroll(true);
      } else {
        setBackToTopScroll(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const listNav = [
    { id: "home", title: "home", path: "#" },
    { id: "about", title: "about", path: "#" },
    { id: "project", title: "project", path: "#" },
    { id: "contact", title: "contact", path: "#" },
  ];

  return (
    <div className={theme}>
      <Navbar />
      <div className="overflow-hidden bg-white dark:bg-black h-auto">
        <section className="relative container mx-auto w-full mt-20 flex items-start justify-start">
          {backToTopScroll && (
            <button
              onClick={() => scrollUp()}
              className="z-50 fixed right-10 bottom-10 transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 rotate-180"
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
          )}

          <div className="px-0 xl:px-10">
            <NavbarListPages />
          </div>

          <div className="w-full text-black dark:text-white py-10 ps-10 xl:ps-52 pe-10">
            <h3 className="text-4xl font-extrabold mb-5 text-pink-500">
              Headers
            </h3>

            <p className="max-w-3xl mb-20">
              Headers are a crucial element of any website, as it acts as a kind
              of map for visitors.
            </p>

            <div className="mb-20">
              <p className="text-2xl font-bold">Demo</p>

              <WindowsComponents>
                <div className="space-y-5">
                  <header className="bg-gray-900 w-full lg:w-[750px] py-3">
                    <nav className="container mx-auto flex items-center justify-between px-10">
                      <div>
                        <p className="md:text-2xl text-md font-bold text-white">
                          Logotipo.
                        </p>
                      </div>

                      <div className="md:sr-only not-sr-only text-white text-lg">
                        <RxHamburgerMenu />
                      </div>

                      <ul className="flex items-center gap-5 md:not-sr-only sr-only">
                        {listNav?.map((dato) => (
                          <li
                            key={dato.id}
                            className="text-gray-400 hover:text-pink-600"
                          >
                            <a href={dato.path}>{dato.title}</a>
                          </li>
                        ))}
                      </ul>

                      <div className="space-x-5 md:not-sr-only sr-only">
                        <button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
                          Login
                        </button>
                      </div>
                    </nav>
                  </header>

                  <header className="bg-gray-900 w-full py-3">
                    <nav className="container mx-auto flex items-center justify-between px-10">
                      <div>
                        <p className="md:text-2xl text-md font-bold text-white">
                          Logotipo.
                        </p>
                      </div>

                      <div className="md:sr-only not-sr-only text-white text-lg">
                        <RxHamburgerMenu />
                      </div>

                      <div className="flex items-center gap-10 md:not-sr-only sr-only">
                        <ul className="flex items-center gap-5">
                          {listNav?.map((dato) => (
                            <li
                              key={dato.id}
                              className="text-gray-400 hover:text-pink-600"
                            >
                              <a href={dato.path}>{dato.title}</a>
                            </li>
                          ))}
                        </ul>

                        <div className="space-x-5">
                          <button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
                            Login
                          </button>
                        </div>
                      </div>
                    </nav>
                  </header>

                  <header className="bg-gray-900 w-full py-3">
                    <nav className="container mx-auto flex items-center justify-between px-10">
                      <div className="flex items-center gap-5">
                        <p className="md:text-2xl text-md font-bold text-white">
                          Logotipo.
                        </p>

                        <ul className="flex items-center gap-5 md:not-sr-only sr-only">
                          {listNav?.map((dato) => (
                            <li
                              key={dato.id}
                              className="text-gray-400 hover:text-pink-600"
                            >
                              <a href={dato.path}>{dato.title}</a>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="md:sr-only not-sr-only text-white text-lg">
                        <RxHamburgerMenu />
                      </div>

                      <div className="space-x-5 md:not-sr-only sr-only">
                        <button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
                          Login
                        </button>
                      </div>
                    </nav>
                  </header>

                  <header className="bg-gray-900 w-full py-3">
                    <nav className="container mx-auto flex items-center justify-between px-10">
                      <div>
                        <p className="md:text-2xl text-md font-bold text-white">
                          Logotipo.
                        </p>
                      </div>

                      <div className="md:sr-only not-sr-only text-white text-lg">
                        <RxHamburgerMenu />
                      </div>

                      <ul className="flex items-center gap-5 md:not-sr-only sr-only">
                        {listNav?.map((dato) => (
                          <li
                            key={dato.id}
                            className="text-gray-400 hover:text-pink-600"
                          >
                            <a href={dato.path}>{dato.title}</a>
                          </li>
                        ))}
                      </ul>

                      <div className="space-x-5 md:not-sr-only sr-only">
                        <button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
                          Login
                        </button>
                      </div>
                    </nav>
                  </header>
                </div>
              </WindowsComponents>

              <CodeComponent copyCode={codeHeaders}>
                {codeHeaders}
              </CodeComponent>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-between px-5 py-5 mt-10">
              <Link
                href="/docs/components/table"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
                onClick={() => scrollUp()}
              >
                <svg
                  className="h-5 w-5 shrink-0 dark:text-pink-500 text-pink-500 rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

                <p>Table</p>
              </Link>

              <Link
                href="/docs/components/headers"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
                onClick={() => scrollUp()}
              >
                <p>Next ?</p>{" "}
                <svg
                  className="h-5 w-5 shrink-0 dark:text-pink-500 text-pink-500 -rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Table;
