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
import {
  codeAlert,
  codeAlertVariantTwo,
} from "@/components/CodeExapmleOfComponents";

const Alert = () => {
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
              Alert
            </h3>

            <p className="max-w-3xl mb-20">
              Alerts are used to communicate a state that affects a system,
              feature or page.
            </p>

            <div className="mb-32">
              <p className="text-2xl font-bold">Demo</p>

              <WindowsComponents col="col">
                <div
                  role="alert"
                  className="bg-red-200 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="rotate-180 text-red-500 w-7 h-7"
                      data-testid="geist-icon"
                      fill="none"
                      height="14"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="14"
                    >
                      <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </span>

                  <p className="text-red-900 sm:text-base text-sm">
                    Unexpected error. Please try again later.
                  </p>
                </div>

                <div
                  role="alert"
                  className="bg-green-200 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="text-green-600"
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
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>

                  <p className="text-green-900 sm:text-base text-sm">
                    Data uploaded to the server!
                  </p>
                </div>

                <div
                  role="alert"
                  className="bg-yellow-100 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="text-yellow-500"
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
                      <path
                        d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                        fill="var(--geist-fill)"
                      />
                      <path d="M12 9v4" stroke="var(--geist-stroke)" />
                      <path d="M12 17h.01" stroke="var(--geist-stroke)" />
                    </svg>
                  </span>

                  <p className="text-green-900 sm:text-base text-sm">
                    Seems your account is about expire.
                  </p>
                </div>

                <div
                  role="alert"
                  className="bg-sky-100 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="text-sky-500 w-7 h-7"
                      data-testid="geist-icon"
                      fill="none"
                      height="14"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="14"
                    >
                      <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </span>

                  <p className="text-sky-900 sm:text-base text-sm">
                    Updated information. Please check!
                  </p>
                </div>
              </WindowsComponents>

              <CodeComponent copyCode={codeAlert}>{codeAlert}</CodeComponent>
            </div>

            <div className="mb-20">
              <p className="text-2xl font-bold">Variants</p>

              <WindowsComponents col="col">
                <div
                  role="alert"
                  className="bg-red-500 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="rotate-180 text-white w-7 h-7"
                      data-testid="geist-icon"
                      fill="none"
                      height="14"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="14"
                    >
                      <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </span>

                  <p className="text-white sm:text-base text-sm">
                    Unexpected error. Please try again later.
                  </p>
                </div>

                <div
                  role="alert"
                  className="bg-green-500 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="text-white"
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
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>

                  <p className="text-white sm:text-base text-sm">
                    Data uploaded to the server!
                  </p>
                </div>

                <div
                  role="alert"
                  className="bg-yellow-500 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="text-white"
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
                      <path
                        d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                        fill="var(--geist-fill)"
                      />
                      <path d="M12 9v4" stroke="var(--geist-stroke)" />
                      <path d="M12 17h.01" stroke="var(--geist-stroke)" />
                    </svg>
                  </span>

                  <p className="text-white sm:text-base text-sm">
                    Seems your account is about expire.
                  </p>
                </div>

                <div
                  role="alert"
                  className="bg-sky-500 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="text-white w-7 h-7"
                      data-testid="geist-icon"
                      fill="none"
                      height="14"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="14"
                    >
                      <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </span>

                  <p className="text-white sm:text-base text-sm">
                    Updated information. Please check!
                  </p>
                </div>
              </WindowsComponents>

              <CodeComponent copyCode={codeAlertVariantTwo}>
                {codeAlertVariantTwo}
              </CodeComponent>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-between px-5 py-5 mt-10">
              <Link
                href="/docs/components/avatar"
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

                <p>Avatar</p>
              </Link>

              <Link
                href="/docs/components/accordion"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
                onClick={() => scrollUp()}
              >
                <p>Accordion</p>{" "}
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

export default Alert;
