"use client";

import React, { useEffect, useRef } from "react";
import HomePage from "@/pages/HomePage";

import SectionTwoHome from "@/pages/SectionTwoHome";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import styled from "@/styles/lineGradiant.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const App = () => {
  /* const getModeThemePage = localStorage.getItem("theme"); */

  const ref = useRef(null);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const initialState = {
    themeDark:
      typeof window !== "undefined"
        ? window.localStorage.getItem("theme")
        : false,
  };

  return (
    <div className={initialState.themeDark}>
      <Navbar />
      <div
        className="relative overflow-hidden bg-white dark:bg-black"
        ref={ref}
      >
        <HomePage getModeThemePage={initialState.themeDark} />

        <SectionTwoHome refScroll={ref} />

        <section className="relative h-screen w-full overflow-hidden">
          <div className="relative w-full h-auto flex items-start justify-center space-x-5">
            <div
              className="group relative max-w-sm py-5 px-5 rounded-xl border border-white/10 bg-black shadow-2xl"
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
                  <span className="text-xl font-bold tracking-tight text-white">
                    Hero
                  </span>
                </div>
                <p className="mt-6 text-base leading-7 text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,
                  facilis illum eum ullam nostrum atque quam.
                </p>
              </div>
            </div>

            <div
              className="group relative max-w-sm py-5 px-5 rounded-xl border border-white/10 bg-black shadow-2xl"
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
                  <span className="text-xl font-bold tracking-tight text-white">
                    Hero
                  </span>
                </div>
                <p className="mt-6 text-base leading-7 text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit,
                  facilis illum eum ullam nostrum atque quam.
                </p>
              </div>
            </div>

            <div
              className="group relative max-w-sm py-5 px-5 rounded-xl border border-white/10 bg-black shadow-2xl"
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
                  <span className="text-xl font-bold tracking-tight text-white">
                    Hero
                  </span>
                </div>
                <p className="mt-6 text-base leading-7 text-gray-300">
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
