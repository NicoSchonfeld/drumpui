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
  codeBreadcrumb,
  codeCreditCard,
  codeCreditCardDorso,
} from "@/components/CodeExapmleOfComponents";
import { BiLogoVisa } from "react-icons/bi";

const CreditCard = () => {
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
              Credit Card
            </h3>

            <p className="max-w-3xl mb-20">
              Design a credit card for your forms.
            </p>

            <div className="mb-20">
              <p className="text-2xl font-bold">Demo</p>

              <WindowsComponents>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-w-[250px] md:w-[350px] h-[200px] rounded-lg shadow-lg">
                  <div className="text-white/50 text-7xl w-full flex items-center justify-end px-5">
                    <BiLogoVisa />
                  </div>

                  <div className="w-full px-5 pb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="26"
                      viewBox="0 0 20 16"
                      fill="none"
                    >
                      <path
                        d="M8 0H18C19.11 0 20 0.89 20 2V4H16.59L14 6.59V10.59L12 12.59V16H8V12.59L6 10.59V5.41L8 3.41V0ZM16 7.41V10H20V6H17.41L16 7.41ZM4.59 4L6 2.59V0H2C0.89 0 0 0.89 0 2V4H4.59ZM4 10V6H0V10H4ZM6 13.41L4.59 12H0V14C0 15.11 0.89 16 2 16H6V13.41ZM15.41 12L14 13.41V16H18C19.11 16 20 15.11 20 14V12H15.41Z"
                        fill="#ffffff60"
                      />
                    </svg>
                  </div>

                  <div className="w-full px-5 text-white">
                    <p className="text-base md:text-2xl mb-2">
                      1234 5678 9012 3456
                    </p>
                    <div className="w-full flex items-center justify-between text-sm pe-10">
                      <p className="text-sm">NICOLÁS SCHÖNFELD</p>
                      <p>05/35</p>
                    </div>
                  </div>
                </div>
              </WindowsComponents>

              <CodeComponent copyCode={codeCreditCard}>
                {codeCreditCard}
              </CodeComponent>
            </div>

            <div className="mt-20 mb-20">
              <p className="text-2xl font-bold">Dorso credit card</p>

              <WindowsComponents>
                <div className="relative bg-gray-300 min-w-[250px] md:w-[350px] h-[200px] rounded-lg shadow-lg pt-7 flex items-center justify-start flex-col gap-5">
                  <div className="bg-gray-900 w-full h-12"></div>

                  <div className="bg-gray-400/50 rounded-lg w-52 md:w-72 h-9 flex items-center justify-end px-5">
                    <p className="bg-gray-300 px-2 rounded-md text-gray-600">
                      182
                    </p>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="w-52 md:w-60 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-40 md:w-52 h-1 bg-gray-400 rounded-full"></div>
                    <div className="w-52 md:w-60 h-1 bg-gray-400 rounded-full"></div>
                  </div>
                </div>
              </WindowsComponents>

              <CodeComponent copyCode={codeCreditCardDorso}>
                {codeCreditCardDorso}
              </CodeComponent>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-between px-5 py-5 mt-10">
              <Link
                href="/docs/components/breadcrumb"
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

                <p>Breadcrumb</p>
              </Link>

              <Link
                href="/docs/components/table"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
                onClick={() => scrollUp()}
              >
                <p>Table</p>{" "}
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

export default CreditCard;
