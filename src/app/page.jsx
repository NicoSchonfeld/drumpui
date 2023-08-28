"use client";

import React, { useEffect, useRef, useState } from "react";
import HomePage from "@/pages/HomePage";

import SectionTwoHome from "@/pages/SectionTwoHome";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import styled from "@/styles/lineGradiant.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useTheme } from "next-themes";

const App = () => {
  const { theme, setTheme } = useTheme();

  const ref = useRef(null);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

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
      <div
        className="relative overflow-hidden bg-white dark:bg-black"
        ref={ref}
      >
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

        <HomePage theme={theme} />

        <SectionTwoHome refScroll={ref} />

        <section className="relative w-full h-auto overflow-hidden flex flex-col items-center justify-center gap-10 py-40">
          <div className="flex flex-col items-center gap-5 px-10">
            <p className="text-black dark:text-white font-bold text-3xl text-center">
              Title dsajdjasd asd asd s
            </p>

            {/* <p className="text-black/50 dark:text-white/50 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              et ut id debitis enim consequatur vel dolorum cum vero fugiat.
            </p> */}
          </div>

          <div className="relative px-10 w-full flex items-center justify-center gap-5 lg:gap-10 md:flex-row flex-col">
            <div
              className="group relative max-w-sm py-5 px-5 rounded-xl w-[300px] md:w-auto border border-black/20 dark:border-white/20 bg-white dark:bg-black dark:shadow-md dark:shadow-pink-500/20 shadow-md"
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              #ec489930,
              transparent 80%
            )
          `,
                }}
              />

              <div>
                <h3 className="text-base font-semibold leading-7 text-pink-500">
                  Byline
                </h3>
                <div className="mt-2 flex items-center gap-x-2">
                  <span className="text-xl font-bold tracking-tight dark:text-white text-black">
                    Hero
                  </span>
                </div>
                <p className="mt-6 text-base leading-7 dark:text-gray-300 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,
                  facilis illum eum ullam nostrum atque quam.
                </p>
              </div>
            </div>

            <div
              className="group relative max-w-sm py-5 px-5 rounded-xl w-[300px] md:w-auto border border-black/20 dark:border-white/20 bg-white dark:bg-black dark:shadow-md dark:shadow-pink-500/20 shadow-md"
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              #ec489930,
              transparent 80%
            )
          `,
                }}
              />

              <div>
                <h3 className="text-base font-semibold leading-7 text-pink-500">
                  Byline
                </h3>
                <div className="mt-2 flex items-center gap-x-2">
                  <span className="text-xl font-bold tracking-tight dark:text-white text-black">
                    Hero
                  </span>
                </div>
                <p className="mt-6 text-base leading-7 dark:text-gray-300 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,
                  facilis illum eum ullam nostrum atque quam.
                </p>
              </div>
            </div>

            <div
              className="group relative max-w-sm py-5 px-5 rounded-xl w-[300px] md:w-auto border border-black/20 dark:border-white/20 bg-white dark:bg-black dark:shadow-md dark:shadow-pink-500/20 shadow-md"
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                  background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              #ec489930,
              transparent 80%
            )
          `,
                }}
              />

              <div>
                <h3 className="text-base font-semibold leading-7 text-pink-500">
                  Byline
                </h3>
                <div className="mt-2 flex items-center gap-x-2">
                  <span className="text-xl font-bold tracking-tight dark:text-white text-black">
                    Hero
                  </span>
                </div>
                <p className="mt-6 text-base leading-7 dark:text-gray-300 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,
                  facilis illum eum ullam nostrum atque quam.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="fixed bottom-0 w-full border-2 border-pink-500 z-10"></div>
        <div className="fixed bottom-[-1000px] left-[400px] w-[1000px] h-[1000px] flex-shrink-0 rounded-full bg-pink-500 filter blur-[500px] z-20"></div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
