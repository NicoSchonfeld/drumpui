"use client";

import React from "react";
import LogoIcon from "@/components/LogoIcon";
import { AiFillGithub } from "react-icons/ai";
import styled from "@/styles/lineGradiant.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

import boxGradientTop from "@/assets/boxGradientTop.png";
import boxGradientTopWhite from "@/assets/boxGradientTopWhite.png";
import Link from "next/link";

const HomePage = ({ theme }) => {
  return (
    <>
      <main className="h-screen relative overflow-hidden pb-56">
        {theme === "dark" ? (
          <Image
            src={boxGradientTop}
            alt="boxGradientTop"
            width={"100%"}
            height={180}
            className="absolute top-0 left-0 z-[1]"
          />
        ) : (
          <Image
            src={boxGradientTopWhite}
            alt="boxGradientTop"
            width={"100%"}
            height={180}
            className="absolute top-0 left-0 z-[1]"
          />
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={styled.gridLine90degLeft}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={styled.gridLine90degright}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={styled.gridLine90degLeftNoneAbs}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={styled.gridLine90degrightNoneAbs}
        ></motion.div>

        <div className="container mx-auto w-full h-full flex flex-col items-center justify-center">
          <div className="flex items-center flex-col mt-[150px] sm:mt-[250px]">
            <div className="overflow-hidden sr-only">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <LogoIcon
                  color={theme === "dark" ? "white" : "black"}
                  ui={theme === "dark" ? "#EC4899" : "white"}
                  w={150}
                  h={50}
                />
              </motion.div>
            </div>

            <div className="w-full my-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.5, delay: 1 }}
                className={styled.gridLineCenter}
              ></motion.div>
            </div>

            <div className="overflow-hidden bg-gray-100 dark:bg-black py-2 px-10 z-10">
              <motion.h1
                initial={{ opacity: 1, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-clip-text text-transparent bg-gradient-to-b from-black/60 to-black dark:from-white dark:to-white/60 text-4xl md:text-7xl font-extrabold max-w-6xl text-center"
              >
                Build your website with
              </motion.h1>
            </div>

            <div className="overflow-hidden bg-gray-100 dark:bg-black py-2 z-10">
              <motion.h2
                initial={{ opacity: 1, y: 500 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-clip-text text-transparent bg-gradient-to-b from-black/60 to-black dark:from-white dark:to-white/60 text-4xl md:text-7xl font-extrabold max-w-6xl text-center"
              >
                Free Tailwind CSS components
              </motion.h2>
            </div>

            <div className="w-full my-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.5, delay: 1 }}
                className={styled.gridLineCenter}
              ></motion.div>
            </div>

            <div className="overflow-hidden bg-gray-100 dark:bg-black py-2 px-10 z-10">
              <motion.p
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-black/50 dark:text-white/50 text-center"
              >
                Search, copy, paste and ready to use to your liking
              </motion.p>
            </div>

            <div className="w-full my-3">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 0.5, delay: 1 }}
                className={styled.gridLineCenter}
              ></motion.div>
            </div>

            <div className="overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center space-x-5"
              >
                <Link
                  href="/docs/guide/installation"
                  rel="noopener noreferrer"
                  className="transition rounded border border-pink-500 hover:border-pink-700 bg-pink-500 px-6 py-3 text-sm font-medium text-white hover:bg-pink-700 hover:text-white"
                >
                  Get started
                </Link>

                <a
                  href="https://github.com/NicoSchonfeld/drumpui-components/tree/main/src/components"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition rounded border border-gray-900 hover:border-gray-700 bg-gray-900 px-6 py-3 text-sm font-medium text-white hover:bg-gray-700 hover:text-white"
                >
                  <AiFillGithub className="me-2" /> Github
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
