"use client";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarListPages from "@/components/NavbarListPages";
import Link from "next/link";

import styled from "@/styles/lineGradiant.module.css";
import WindowsComponents from "@/components/WindowsComponents";
import CodeComponent from "@/components/CodeComponent";

const Accordion = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden bg-white dark:bg-black">
        <section className="relative container mx-auto w-full flex items-start justify-end mt-20">
          <div className="fixed top-[120px] left-20 lg:left-52">
            <NavbarListPages />
          </div>

          <div className="w-full text-black dark:text-white py-10 sm:px-10 md:px-32 lg:ps-96 px-10">
            <h3 className="text-4xl font-extrabold mb-5">Accordion</h3>

            <p className="max-w-3xl mb-20">
              Accordions display a list of high-level options that can
              expand/collapse to reveal more information.
            </p>

            <div>
              <p className="text-2xl font-bold">Demo</p>
              <WindowsComponents col="col">
                <details
                  className="group [&_summary::-webkit-details-marker]:hidden transition-all w-auto min-w-[300px]"
                  open
                >
                  <summary className="flex cursor-pointer items-center justify-between border-b gap-1.5 p-4 text-black dark:text-white transition-all">
                    <h2 className="font-medium">
                      This is a title of a Accordion.
                    </h2>

                    <svg
                      className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
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
                  </summary>

                  <p className="py-5 px-4 leading-relaxed text-black dark:text-white border-b transition-all">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                    hic veritatis molestias culpa in, recusandae laboriosam
                    neque aliquid libero nesciunt voluptate dicta quo officiis
                    explicabo consequuntur distinctio corporis earum similique!
                  </p>
                </details>
              </WindowsComponents>

              <CodeComponent>
                <pre className="mt-10 text-white">
                  &lt;<span className="text-red-500">div</span>{" "}
                  <span className="text-yellow-500">className</span>=
                  <span className="text-yellow-500">"</span>
                  <span className="text-gray-400">p-4 w-[500px] max-auto</span>
                  <span className="text-yellow-500">"</span>&gt;
                  <br />
                  {"    "}
                  &lt;<span className="text-red-500">div</span>{" "}
                  <span className="text-yellow-500">className</span>=
                  <span className="text-yellow-500">"</span>
                  <span className="text-gray-400">
                    animate-pulse flex space-x-4
                  </span>
                  <span className="text-yellow-500">"</span>&gt;
                  <br />
                  {"    "}
                  {"    "}
                  &lt;<span className="text-red-500">div</span>{" "}
                  <span className="text-yellow-500">className</span>=
                  <span className="text-yellow-500">"</span>
                  <span className="text-gray-400">flex-1 space-y-3 py-1</span>
                  <span className="text-yellow-500">"</span>&gt;
                  <br />
                  {"    "}
                  {"    "}
                  {"    "}
                  &lt;<span className="text-red-500">div</span>{" "}
                  <span className="text-yellow-500">className</span>=
                  <span className="text-yellow-500">"</span>
                  <span className="text-gray-400">h-5 bg-slate-200</span>
                  <span className="text-yellow-500">"</span>&gt;&lt;/
                  <span className="text-red-500">div</span>&gt;
                  <br />
                  {"    "}
                  {"    "}
                  {"    "}
                  &lt;<span className="text-red-500">div</span>{" "}
                  <span className="text-yellow-500">className</span>=
                  <span className="text-yellow-500">"</span>
                  <span className="text-gray-400">h-5 bg-slate-200</span>
                  <span className="text-yellow-500">"</span>&gt;&lt;/
                  <span className="text-red-500">div</span>&gt;
                  <br />
                  {"    "}
                  {"    "}
                  {"    "}
                  &lt;<span className="text-red-500">div</span>{" "}
                  <span className="text-yellow-500">className</span>=
                  <span className="text-yellow-500">"</span>
                  <span className="text-gray-400">h-5 bg-slate-200</span>
                  <span className="text-yellow-500">"</span>&gt;&lt;/
                  <span className="text-red-500">div</span>&gt;
                  <br />
                  {"    "}
                  {"    "}
                  &lt;/<span className="text-red-500">div</span>&gt;
                  <br />
                  {"    "}
                  &lt;/<span className="text-red-500">div</span>&gt;
                  <br />
                  &lt;/<span className="text-red-500">div</span>&gt;
                </pre>
              </CodeComponent>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-between px-5 py-5">
              <Link
                href="/docs/components/alert"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
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

                <p>Alert</p>
              </Link>

              <Link
                href="/docs/components/badge"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
              >
                <p>Badge</p>{" "}
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
    </>
  );
};

export default Accordion;