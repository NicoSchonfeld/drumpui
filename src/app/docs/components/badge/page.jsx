"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarListPages from "@/components/NavbarListPages";
import Link from "next/link";

import styled from "@/styles/lineGradiant.module.css";
import WindowsComponents from "@/components/WindowsComponents";
import CodeComponent from "@/components/CodeComponent";

const Badge = () => {
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
    <>
      <Navbar />
      <div className="overflow-hidden bg-white dark:bg-black">
        <section className="relative container mx-auto w-full flex items-start justify-end mt-20">
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

          <div className="fixed top-[120px] left-20 lg:left-52">
            <NavbarListPages />
          </div>

          <div className="w-full text-black dark:text-white py-10 sm:px-10 md:px-32 lg:ps-96 px-10">
            <h3 className="text-4xl font-extrabold mb-5">Badge</h3>

            <p className="max-w-3xl mb-20">
              Badges are used as a small numerical value or status descriptor
              for UI elements.
            </p>

            <div>
              <p className="text-2xl font-bold">Demo</p>

              <WindowsComponents>
                <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
                  Live
                </span>

                <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="-ms-1 me-1.5 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <p className="whitespace-nowrap text-sm">Paid</p>
                </span>

                <span className="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="-ms-1 me-1.5 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z"
                    />
                  </svg>

                  <p className="whitespace-nowrap text-sm">Refunded</p>
                </span>

                <span className="inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-0.5 text-red-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="-ms-1 me-1.5 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>

                  <p className="whitespace-nowrap text-sm">Failed</p>
                </span>
              </WindowsComponents>

              <CodeComponent>
                <pre className="mt-10 text-white">
                  &lt;<span className="text-red-500">div</span>{" "}
                  <span className="text-yellow-500">className</span>=
                  <span className="text-yellow-500">"</span>
                  <span className="text-gray-400">p-4 w-[500px] max-auto</span>
                  <span className="text-yellow-500">"</span>&gt;
                  <br />
                  {"    "}
                  &lt;<span className="text-red-500">div</span>{" "}
                  <span className="text-yellow-500">className</span>=
                  <span className="text-yellow-500">"</span>
                  <span className="text-gray-400">
                    animate-pulse flex space-x-4
                  </span>
                  <span className="text-yellow-500">"</span>&gt;
                  <br />
                  {"    "}
                  {"    "}
                  &lt;<span className="text-red-500">div</span>{" "}
                  <span className="text-yellow-500">className</span>=
                  <span className="text-yellow-500">"</span>
                  <span className="text-gray-400">flex-1 space-y-3 py-1</span>
                  <span className="text-yellow-500">"</span>&gt;
                  <br />
                  {"    "}
                  {"    "}
                  {"    "}
                  &lt;<span className="text-red-500">div</span>{" "}
                  <span className="text-yellow-500">className</span>=
                  <span className="text-yellow-500">"</span>
                  <span className="text-gray-400">h-5 bg-slate-200</span>
                  <span className="text-yellow-500">"</span>&gt;&lt;/
                  <span className="text-red-500">div</span>&gt;
                  <br />
                  {"    "}
                  {"    "}
                  {"    "}
                  &lt;<span className="text-red-500">div</span>{" "}
                  <span className="text-yellow-500">className</span>=
                  <span className="text-yellow-500">"</span>
                  <span className="text-gray-400">h-5 bg-slate-200</span>
                  <span className="text-yellow-500">"</span>&gt;&lt;/
                  <span className="text-red-500">div</span>&gt;
                  <br />
                  {"    "}
                  {"    "}
                  {"    "}
                  &lt;<span className="text-red-500">div</span>{" "}
                  <span className="text-yellow-500">className</span>=
                  <span className="text-yellow-500">"</span>
                  <span className="text-gray-400">h-5 bg-slate-200</span>
                  <span className="text-yellow-500">"</span>&gt;&lt;/
                  <span className="text-red-500">div</span>&gt;
                  <br />
                  {"    "}
                  {"    "}
                  &lt;/<span className="text-red-500">div</span>&gt;
                  <br />
                  {"    "}
                  &lt;/<span className="text-red-500">div</span>&gt;
                  <br />
                  &lt;/<span className="text-red-500">div</span>&gt;
                </pre>
              </CodeComponent>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-between px-5 py-5">
              <Link
                href="/docs/components/accordion"
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

                <p>Accordion</p>
              </Link>

              <Link
                href="/docs/components/button"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
                onClick={() => scrollUp()}
              >
                <p>Button</p>{" "}
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

export default Badge;
