"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";
import styled from "@/styles/lineGradiant.module.css";
import Image from "next/image";

import pepe from "@/assets/pepe.png";

const SectionTwoHome = ({ refScroll }) => {
  const { scrollYProgress } = useScroll({
    target: refScroll,
    offset: ["0 1", "1 2.3"],
  });

  return (
    <>
      <section className="h-screen w-full overflow-hidden pt-[80px]">
        <div className="relative w-full h-auto flex items-center justify-center">
          <motion.div
            style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
              zIndex: 1,
            }}
          >
            <Image
              className="rounded-lg"
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
