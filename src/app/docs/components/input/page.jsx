"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarListPages from "@/components/NavbarListPages";
import Link from "next/link";

import styled from "@/styles/lineGradiant.module.css";
import WindowsComponents from "@/components/WindowsComponents";
import CodeComponent from "@/components/CodeComponent";
import { useTheme } from "next-themes";
import {
  codeInput,
  codeInputLeftAndRightAddons,
  codeInputSelect,
  codePasswordInputExample,
} from "@/components/CodeExapmleOfComponents";

const Inputs = () => {
  const { theme, setTheme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

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
              Input
            </h3>

            <p className="max-w-3xl mb-20">
              Input component is a component that is used to get user input in a
              text field.
            </p>

            <div>
              <p className="text-2xl font-bold">Demo</p>
              <WindowsComponents>
                <input
                  type="text"
                  placeholder="This is a input"
                  className="text-gray-600 dark:text-white transition rounded border dark:border-white/20 px-3 py-1 bg-white dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
                />
              </WindowsComponents>

              <CodeComponent copyCode={codeInput}>{codeInput}</CodeComponent>
            </div>

            <div className="mt-32">
              <p className="text-2xl font-bold">Left and Right Addons</p>
              <WindowsComponents col="col">
                <span className="inline-flex overflow-hidden rounded-md border dark:border-white/50 shadow-sm">
                  <span className="flex items-center justify-center text-sm md:text-base p-2 text-gray-600 bg-gray-200">
                    +54
                  </span>
                  <input
                    id="input"
                    placeholder="9999999999"
                    type="number"
                    className="transition rounded border dark:border-white/20 px-3 py-1 bg-white dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600 text-gray-600 dark:text-white"
                  />
                </span>

                <span className="inline-flex overflow-hidden rounded-md border dark:border-white/50 shadow-sm">
                  <span className="flex items-center justify-center p-2 text-gray-600 bg-gray-200 text-sm md:text-base">
                    https://
                  </span>
                  <input
                    id="input"
                    placeholder="website"
                    type="text"
                    className="w-40 md:w-auto transition rounded border dark:border-white/20 px-3 py-1 bg-white dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600 text-gray-600 dark:text-white"
                  />
                  <span className="flex items-center justify-center p-2 text-gray-600 bg-gray-200 text-sm md:text-base">
                    .com
                  </span>
                </span>
              </WindowsComponents>

              <CodeComponent copyCode={codeInputLeftAndRightAddons}>
                {codeInputLeftAndRightAddons}
              </CodeComponent>
            </div>

            <div className="mt-32">
              <p className="text-2xl font-bold">Password Input Example</p>

              <WindowsComponents>
                <span className="inline-flex overflow-hidden rounded-md border dark:border-white/50 shadow-sm">
                  <input
                    id="input"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    className="transition rounded border dark:border-white/20 px-3 py-1 bg-white dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600 text-gray-600 dark:text-white"
                  />

                  <button
                    className="flex items-center justify-center px-2 text-gray-600 bg-white"
                    onClick={togglePassword}
                  >
                    {showPassword ? (
                      <>
                        <svg
                          class="w-5 h-5"
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
                          <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                          <path d="M1 1l22 22" />
                        </svg>
                      </>
                    ) : (
                      <>
                        <svg
                          class="w-5 h-5"
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
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </>
                    )}
                  </button>
                </span>
              </WindowsComponents>

              <CodeComponent copyCode={codePasswordInputExample}>
                {codePasswordInputExample}
              </CodeComponent>
            </div>

            <div className="mt-32 mb-20">
              <p className="text-2xl font-bold">Input select</p>

              <WindowsComponents>
                <select
                  className="transition rounded border dark:border-white/20 focus:outline-none focus:ring-2
                focus:ring-inset focus:ring-pink-600 text-gray-600
                dark:text-white w-[18rem] px-2 py-1.5 bg-white dark:bg-white/10"
                >
                  <option value="option 1" className="!text-gray-600">
                    option 1
                  </option>
                  <option value="option 2" className="!text-gray-600">
                    option 2
                  </option>
                  <option value="option 3" className="!text-gray-600">
                    option 3
                  </option>
                </select>
              </WindowsComponents>

              <CodeComponent copyCode={codeInputSelect}>
                {codeInputSelect}
              </CodeComponent>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-between px-5 py-5 mt-10">
              <Link
                href="/docs/components/card"
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

                <p>Card</p>
              </Link>

              <Link
                href="/docs/components/modal"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
                onClick={() => scrollUp()}
              >
                <p>Modal</p>{" "}
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

export default Inputs;
