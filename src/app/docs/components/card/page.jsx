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
import { codeCard, codeCardShop } from "@/components/CodeExapmleOfComponents";

import ropa from "@/assets/ropa.jpg";
import Image from "next/image";

const Card = () => {
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
            <h3 className="text-4xl font-extrabold mb-5 text-pink-500">Card</h3>
            <p className="max-w-3xl mb-20">
              Card is a container for text, photos, and actions in the context
              of a single subject.
            </p>

            <div>
              <p className="text-2xl font-bold">Demo</p>

              <WindowsComponents>
                <div className="overflow-hidden rounded-lg border bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-100/20 p-4 sm:p-6 lg:p-8">
                  <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 sm:text-xl">
                        Building a SaaS product as a software developer
                      </h3>

                      <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">
                        By John Doe
                      </p>
                    </div>
                  </div>

                  <div className="mt-4">
                    <p className="max-w-[40ch] text-sm text-gray-500 dark:text-gray-300">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      At velit illum provident a, ipsa maiores deleniti
                      consectetur nobis et eaque.
                    </p>
                  </div>
                </div>
              </WindowsComponents>

              <CodeComponent copyCode={codeCard}>{codeCard}</CodeComponent>
            </div>

            <div className="mt-32 mb-20">
              <p className="text-2xl font-bold">Shop card</p>

              <WindowsComponents>
                <div className="w-[200px] md:w-[400px] bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm shadow-indigo-100 dark:shadow-black/50">
                  <Image
                    alt="photo-1434389677669"
                    src={ropa}
                    className="h-56 w-full object-cover rounded-md"
                    width={"100%"}
                    height={"100%"}
                  />

                  <div className="mt-2">
                    <dl>
                      <div>
                        <dd className="text-sm text-gray-500">$15.000</dd>
                      </div>

                      <div>
                        <dd className="font-medium">Chaqueta Bomber</dd>
                      </div>
                    </dl>

                    <div className="mt-6 w-full">
                      <button className="w-full transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              </WindowsComponents>

              <CodeComponent copyCode={codeCardShop}>
                {codeCardShop}
              </CodeComponent>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-between px-5 py-5 mt-10">
              <Link
                href="/docs/components/button"
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

                <p>Button</p>
              </Link>

              <Link
                href="/docs/components/input"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
                onClick={() => scrollUp()}
              >
                <p>Input</p>{" "}
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

export default Card;
