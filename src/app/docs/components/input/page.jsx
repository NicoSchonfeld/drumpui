"use client";

import React, { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarListPages from "@/components/NavbarListPages";
import Link from "next/link";

import styled from "@/styles/lineGradiant.module.css";
import WindowsComponents from "@/components/WindowsComponents";
import CodeComponent from "@/components/CodeComponent";

const Inputs = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />
      <div className="overflow-hidden bg-white dark:bg-black">
        <section className="relative container mx-auto w-full flex items-start justify-end mt-20">
          <div className="fixed top-[120px] left-20 lg:left-52">
            <NavbarListPages />
          </div>

          <div className="w-full text-black dark:text-white py-10 sm:px-10 md:px-32 lg:ps-96 px-10">
            <h3 className="text-4xl font-extrabold mb-5">Input</h3>

            <p className="max-w-3xl mb-20">
              Input component is a component that is used to get user input in a
              text field.
            </p>

            <div>
              <p className="text-2xl font-bold">Demo</p>
              <WindowsComponents>
                <div className="flex flex-col items-start gap-1">
                  <input
                    type="text"
                    placeholder="This is a input"
                    className="text-gray-600 dark:text-white transition rounded border dark:border-white/20 px-3 py-1 bg-white dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600"
                  />
                </div>
              </WindowsComponents>

              <CodeComponent>Code</CodeComponent>
            </div>

            <div className="mt-32">
              <p className="text-2xl font-bold">Left and Right Addons</p>
              <WindowsComponents col="col">
                <span className="inline-flex overflow-hidden rounded-md border dark:border-white/50 shadow-sm">
                  <span className="flex items-center justify-center p-2 text-gray-600 bg-gray-200">
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
                  <span className="flex items-center justify-center p-2 text-gray-600 bg-gray-200">
                    https://
                  </span>
                  <input
                    id="input"
                    placeholder="website"
                    type="text"
                    className="transition rounded border dark:border-white/20 px-3 py-1 bg-white dark:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600 text-gray-600 dark:text-white"
                  />
                  <span className="flex items-center justify-center p-2 text-gray-600 bg-gray-200">
                    .com
                  </span>
                </span>
              </WindowsComponents>

              <CodeComponent>Code</CodeComponent>
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

              <CodeComponent>Code</CodeComponent>
            </div>

            <div className="mt-32">
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

              <CodeComponent>Code</CodeComponent>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-between px-5 py-5">
              <Link
                href="/docs/components/card"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
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
    </>
  );
};

export default Inputs;
