"use client";

import React, { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
} from "framer-motion";
import styled from "@/styles/lineGradiant.module.css";

const SectionThreeHome = ({ refScroll }) => {
  const { scrollYProgress } = useScroll({
    target: refScroll,
    offset: ["0 1", "1.5 3"],
  });

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [widthPage, setWidthPage] = useState(1300);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidthPage(window.innerWidth);
    }
  }, []);

  return (
    <section className="relative w-full h-auto overflow-hidden flex flex-col items-center justify-center gap-10 py-40">
      <motion.div
        style={{
          scale: widthPage > 1300 ? scrollYProgress : null,
          opacity: widthPage > 1300 ? scrollYProgress : null,
          zIndex: 1,
        }}
        className="space-y-10"
      >
        <div className="flex flex-col items-center gap-5 px-10">
          <p className="text-black dark:text-white font-bold text-3xl text-center">
            Advantages of using DrumurUI
          </p>
        </div>

        <div className="relative px-10 w-full flex items-center justify-center gap-5 lg:gap-10 md:flex-row flex-col">
          <div
            className="group relative max-w-sm py-5 px-10 rounded-xl w-[300px] md:w-auto min-h-[200px] max-h-[200px] border border-black/20 dark:border-white/20 bg-white dark:bg-black dark:shadow-md dark:shadow-pink-500/20 shadow-md"
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
              <div className="mt-1 flex items-center gap-x-2">
                <span className="text-xl font-bold tracking-tight text-pink-500">
                  High customization
                </span>
              </div>
              <p className="mt-3 text-sm md:text-base leading-7 dark:text-gray-300 text-gray-500">
                Can be easily adjusted to your design needs. <br />
                Set sizes, colors, appearances, shapes, and more.
              </p>
            </div>
          </div>

          <div
            className="group relative max-w-sm py-5 px-10 rounded-xl w-[300px] md:w-auto min-h-[200px] max-h-[200px] border border-black/20 dark:border-white/20 bg-white dark:bg-black dark:shadow-md dark:shadow-pink-500/20 shadow-md"
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
              <div className="mt-1 flex items-center gap-x-2">
                <span className="text-xl font-bold tracking-tight text-pink-500">
                  Easy to use
                </span>
              </div>
              <p className="mt-3 text-sm md:text-base leading-7 dark:text-gray-300 text-gray-500">
                Ready to use components in your projects.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SectionThreeHome;
