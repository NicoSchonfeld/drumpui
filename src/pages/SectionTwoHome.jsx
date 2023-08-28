"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import styled from "@/styles/lineGradiant.module.css";
import Image from "next/image";

import pepe from "@/assets/pepe.png";

const SectionTwoHome = ({ refScroll }) => {
  const { scrollYProgress } = useScroll({
    target: refScroll,
    offset: ["0 1", "1 2"],
  });

  return (
    <>
      <section className="h-auto w-full overflow-hidden py-32">
        <div className="relative w-full h-auto flex items-center justify-center">
          <motion.div
            className="px-10"
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
              zIndex: 1,
            }}
          >
            <motion.div
              className="w-full pb-10 flex items-center justify-center"
              style={{ opacity: scrollYProgress }}
            >
              <p className="font-bold text-3xl text-center">
                Modify the styles to your liking!
              </p>
            </motion.div>
            <Image
              className="rounded-lg md:w-[1000px] w-96"
              src={pepe}
              width={1000}
              height={500}
              alt="Picture of the author"
            />
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
