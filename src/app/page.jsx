"use client";

import React, { useEffect, useRef, useState } from "react";
import HomePage from "@/pages/HomePage";

import SectionTwoHome from "@/pages/SectionTwoHome";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import styled from "@/styles/lineGradiant.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { useTheme } from "next-themes";
import SectionThreeHome from "@/pages/SectionThreeHome";

const App = () => {
  const { theme, setTheme } = useTheme();

  const ref = useRef(null);

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
        className="relative overflow-hidden bg-gray-100 dark:bg-black"
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

        <SectionThreeHome refScroll={ref} />

        <div className="fixed bottom-0 w-full border-4 border-pink-500 z-10"></div>
        <div className="fixed bottom-[-1000px] left-[400px] w-[1000px] h-[1000px] flex-shrink-0 rounded-full bg-pink-500 filter blur-[500px] z-20"></div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
