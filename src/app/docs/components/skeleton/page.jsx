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
  codeSkeleton,
  codeSkeletonCircleAndTextSkeleton,
  codeSkeletonCircleAndTextSkeletonVariant2,
  codeSkeletonHeightAndWidth,
} from "@/components/CodeExapmleOfComponents";

const Skeleton = () => {
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
              Skeleton
            </h3>

            <p className="max-w-3xl mb-20">
              Skeleton is used to display the loading state of some component.
            </p>

            <div>
              <p className="text-2xl font-bold">Demo</p>

              <p className="mt-2">You can use it as a standalone component.</p>

              <WindowsComponents>
                <div className="sm:w-[500px] w-[250px] p-4">
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-3 py-1">
                      <div className="h-5 bg-slate-200"></div>
                      <div className="h-5 bg-slate-200"></div>
                      <div className="h-5 bg-slate-200"></div>
                    </div>
                  </div>
                </div>
              </WindowsComponents>

              <CodeComponent copyCode={codeSkeleton}>
                {codeSkeleton}
              </CodeComponent>
            </div>

            <div className="mt-32">
              <p>
                Or to wrap another component to take the same height and width.
              </p>

              <WindowsComponents>
                <div className="sm:w-[500px] w-[250px] p-4">
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-3 py-1">
                      <div className="h-10 bg-slate-200"></div>
                    </div>
                  </div>
                </div>
              </WindowsComponents>

              <CodeComponent copyCode={codeSkeletonHeightAndWidth}>
                {codeSkeletonHeightAndWidth}
              </CodeComponent>
            </div>

            <div className="mt-32">
              <p className="text-2xl font-bold">Circle and Text Skeleton</p>

              <WindowsComponents>
                <div className="sm:w-[500px] w-[250px] p-4">
                  <div className="animate-pulse flex flex-col space-y-4">
                    <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div className="flex-1 space-y-3 py-1">
                      <div className="h-2 bg-slate-200 "></div>
                      <div className="h-2 bg-slate-200 "></div>
                      <div className="h-2 bg-slate-200 "></div>
                      <div className="w-[75%] h-2 bg-slate-200 "></div>
                    </div>
                  </div>
                </div>
              </WindowsComponents>

              <CodeComponent copyCode={codeSkeletonCircleAndTextSkeleton}>
                {codeSkeletonCircleAndTextSkeleton}
              </CodeComponent>
            </div>

            <div className="mt-32 mb-20">
              <p className="text-2xl font-bold">
                Circle and Text Skeleton variant 2
              </p>

              <WindowsComponents>
                <div className="sm:w-[500px] w-[250px] p-4">
                  <div className="animate-pulse flex space-x-4">
                    <div className="rounded-full bg-slate-200 h-10 w-10"></div>
                    <div className="flex-1 space-y-3 py-1">
                      <div className="h-2 bg-slate-200"></div>
                      <div className="h-2 bg-slate-200"></div>
                      <div className="h-2 bg-slate-200"></div>
                      <div className="h-2 bg-slate-200"></div>
                    </div>
                  </div>
                </div>
              </WindowsComponents>

              <CodeComponent
                copyCode={codeSkeletonCircleAndTextSkeletonVariant2}
              >
                {codeSkeletonCircleAndTextSkeletonVariant2}
              </CodeComponent>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-between px-5 py-5 mt-10">
              <Link
                href="/docs/components/modal"
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

                <p>Modal</p>
              </Link>

              <Link
                href="/docs/components/breadcrumb"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
                onClick={() => scrollUp()}
              >
                <p>Breadcrumb</p>{" "}
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

export default Skeleton;
