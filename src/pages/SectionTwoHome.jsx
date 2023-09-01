"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import styled from "@/styles/lineGradiant.module.css";

import Image from "next/image";

import ropa from "@/assets/ropa.jpg";

import { codeDemoSectionTwo } from "@/components/CodeExapmleOfComponents";
import CodeComponent from "@/components/CodeComponent";

const SectionTwoHome = ({ refScroll }) => {
  const { scrollYProgress } = useScroll({
    target: refScroll,
    offset: ["0 1", "1 2.3"],
  });

  const [widthPage, setWidthPage] = useState(1300);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidthPage(window.innerWidth);
    }
  }, []);

  return (
    <>
      <section className="h-auto w-full overflow-hidden py-32">
        <div className="relative w-full h-auto flex items-center justify-center">
          <motion.div
            className="px-10"
            style={{
              scale: widthPage > 1300 ? scrollYProgress : null,
              opacity: widthPage > 1300 ? scrollYProgress : null,
              zIndex: 1,
            }}
          >
            <motion.div
              className="w-full pb-10 flex items-center justify-center"
              style={{ opacity: widthPage > 1300 ? scrollYProgress : null }}
            >
              <p className="text-black dark:text-white font-bold text-xl md:text-3xl text-center">
                Modify the styles to your liking!
              </p>
            </motion.div>

            <div className="rounded-lg w-[310px] md:w-[500px] lg:w-[1000px] h-[600px] shadow-xl flex lg:flex-row flex-col overflow-hidden border border-black/20 dark:border-white/20">
              <div className="bg-gray-900 w-full overflow-auto">
                <CodeComponent copyCode={codeDemoSectionTwo}>
                  {codeDemoSectionTwo}
                </CodeComponent>
              </div>
              <div className="bg-white w-full p-5 flex items-center justify-center">
                <div className="w-[200px] md:w-[400px] bg-white dark:bg-gray-900 border dark:border-black rounded-lg p-4 shadow-sm shadow-indigo-100 dark:shadow-black/50">
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
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: scrollYProgress, scaleY: scrollYProgress }}
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-5"
          >
            <div className={styled.gridLineCenter}></div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SectionTwoHome;
