"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarListPages from "@/components/NavbarListPages";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import styled from "@/styles/lineGradiant.module.css";
import WindowsComponents from "@/components/WindowsComponents";
import CodeComponent from "@/components/CodeComponent";
import { useTheme } from "next-themes";
import {
  codeDrawer,
  codeMenu,
  codeModal,
  terminalCommandNpmIFramerMotion,
} from "@/components/CodeExapmleOfComponents";

const Modal = () => {
  const { theme, setTheme } = useTheme();

  const [openModal, setOpenModal] = useState(false);
  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDrop = () => {
    setOpenDropdown(!openDropdown);
  };

  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

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
        name="modal"
        className="overflow-hidden bg-white dark:bg-black h-auto"
      >
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
            <h3 className="text-4xl font-extrabold text-pink-500">
              Animated components
            </h3>

            <p className="max-w-3xl mb-20 mt-5">
              These components are animated and are created to be used in a
              modal, a menu, a drawer and more.
            </p>

            <div>
              <p className="text-2xl font-bold mb-5">Modal</p>

              <p className="max-w-3xl mb-5">
                A modal is a dialog that focuses the user's attention
                exclusively on an information via a window that is overlaid on
                primary content.
              </p>

              <WindowsComponents>
                <button
                  onClick={toggleModal}
                  className="transition rounded border border-pink-600 
                bg-pink-600 px-4 py-2 text-sm font-medium text-white
                hover:bg-pink-700 hover:border-pink-700 
                hover:text-white focus:outline-none"
                >
                  Open Modal
                </button>

                <AnimatePresence>
                  {openModal && (
                    <div className="fixed top-0 left-0 bg-black/10 w-full h-[100%] flex items-center justify-center backdrop-blur-sm z-50 px-10">
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-xl w-full h-auto max-w-[600px] rounded shadow-xl relative"
                      >
                        <div className="flex items-center justify-between p-4">
                          <span className="text-lg font-bold text-gray-800 dark:text-white">
                            Lorem, ipsum dolor.
                          </span>
                          <span
                            className="cursor-pointer"
                            onClick={toggleModal}
                          >
                            <svg
                              className="transition hover:bg-gray-200 dark:hover:bg-gray-900 rounded"
                              data-testid="geist-icon"
                              fill="none"
                              height="24"
                              shape-rendering="geometricPrecision"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M18 6L6 18" />
                              <path d="M6 6l12 12" />
                            </svg>
                          </span>
                        </div>

                        <hr />

                        <div className="px-4 py-5 space-y-3">
                          <p className="text-gray-800 dark:text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorum, molestiae. Totam excepturi laboriosam
                            necessitatibus consequatur voluptas pariatur,
                            asperiores nemo dolorem?
                          </p>

                          <p className="text-gray-800 dark:text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Minus, nostrum.
                          </p>
                        </div>

                        <hr />

                        <div className="py-3 px-4 w-full h-full flex items-center justify-end space-x-4">
                          <button className="transition rounded border border-red-600  px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-600 hover:text-white focus:outline-none focus:ring active:text-white">
                            Close
                          </button>

                          <button
                            onClick={toggleModal}
                            className="transition rounded border border-green-600 bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 hover:border-green-700 hover:text-white focus:outline-none focus:ring active:text-white"
                          >
                            Accept
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </WindowsComponents>

              <p className="my-5">
                To make this type of animations we use Framer-Motion. <br /> You
                can copy this command and place it in your terminal to install
                the dependencies. <br /> We also leave you the{" "}
                <a
                  href="https://www.framer.com/motion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition-all"
                >
                  Framer-motion
                </a>{" "}
                documentation.
              </p>

              <CodeComponent copyCode={terminalCommandNpmIFramerMotion}>
                {terminalCommandNpmIFramerMotion}
              </CodeComponent>

              <p className="my-5">
                Once installed we have to import motion and AnimatePresence from
                "framer-motion".
              </p>

              <CodeComponent copyCode={codeModal}>{codeModal}</CodeComponent>
            </div>

            <div className="mt-32">
              <p className="text-2xl font-bold mb-5">Menu</p>

              <p className="max-w-3xl mb-5">
                An accessible dropdown menu for the common dropdown menu button
                design pattern. Menu uses roving tabIndex for focus management.
              </p>

              <WindowsComponents>
                <div className="relative">
                  <div className="inline-flex items-center overflow-hidden rounded-md border dark:border-white/20 bg-white dark:bg-black">
                    <button
                      className="h-full flex items-center gap-2 p-2 text-gray-600 dark:text-gray-100 dark:hover:bg-black hover:bg-gray-50 hover:text-gray-700"
                      onClick={toggleDrop}
                    >
                      <span>Menu</span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          openDropdown
                            ? `h-5 w-5 rotate-180 transition-all`
                            : "h-5 w-5 transition-all"
                        }
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
                  </div>

                  <AnimatePresence>
                    {openDropdown && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute z-10 mt-2 w-56 rounded-md border border-gray-100 dark:border-white/20 bg-white shadow-lg dark:bg-black"
                        role="menu"
                      >
                        <div className="p-2">
                          <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                          >
                            Profile
                          </motion.a>

                          <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                          >
                            Edit
                          </motion.a>

                          <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            href="#"
                            className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            role="menuitem"
                          >
                            Settings
                          </motion.a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </WindowsComponents>

              <p className="my-5">
                To make this type of animations we use Framer-Motion. <br /> You
                can copy this command and place it in your terminal to install
                the dependencies. <br /> We also leave you the{" "}
                <a
                  href="https://www.framer.com/motion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition-all"
                >
                  Framer-motion
                </a>{" "}
                documentation.
              </p>

              <CodeComponent copyCode={terminalCommandNpmIFramerMotion}>
                {terminalCommandNpmIFramerMotion}
              </CodeComponent>

              <p className="my-5">
                Once installed we have to import motion and AnimatePresence from
                "framer-motion".
              </p>

              <CodeComponent copyCode={codeMenu}>{codeMenu}</CodeComponent>
            </div>

            <div className="mt-32 mb-20">
              <p className="text-2xl font-bold mb-5">Drawer</p>

              <p className="max-w-3xl mb-5">
                The Drawer component is a panel that slides out from the edge of
                the screen. It can be useful when you need users to complete a
                task or view some details without leaving the current page.
              </p>

              <WindowsComponents>
                <button
                  onClick={toggleDrawer}
                  className="transition rounded border border-pink-600 
                bg-pink-600 px-4 py-2 text-sm font-medium text-white
                hover:bg-pink-700 hover:border-pink-700 
                hover:text-white focus:outline-none"
                >
                  Open Drawer
                </button>

                <AnimatePresence>
                  {openDrawer && (
                    <div className="fixed top-0 left-0 bg-gray-900/50 w-full h-[100%] flex items-center justify-center backdrop-blur-sm z-50">
                      <motion.div
                        initial={{ opacity: 1, x: 500 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 1, x: 500 }}
                        className="w-full md:w-[400px] flex h-screen flex-col justify-between border-e bg-white fixed top-0 right-0"
                      >
                        <div className="px-4 py-6">
                          <div className="w-full flex items-center justify-between">
                            <span className="grid h-10 w-10 place-content-center rounded-full bg-teal-500 text-xs text-white font-bold"></span>

                            <span
                              onClick={toggleDrawer}
                              className="grid h-7 w-7 place-content-center rounded-sm bg-teal-100 text-xs text-teal-900 font-bold cursor-pointer"
                            >
                              <svg
                                data-testid="geist-icon"
                                fill="none"
                                height="24"
                                shape-rendering="geometricPrecision"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <path d="M18 6L6 18" />
                                <path d="M6 6l12 12" />
                              </svg>
                            </span>
                          </div>

                          <div>
                            <p className="mt-10 text-black text-2xl font-bold">
                              Drawer
                            </p>

                            <p className="mt-5 text-black">
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Nulla vitae molestias, nesciunt
                              nemo nam minus adipisci! Quam itaque dolorum vitae
                              ad, illum, excepturi enim sunt dolore eaque nam
                              iure fuga.
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </WindowsComponents>

              <p className="my-5">
                To make this type of animations we use Framer-Motion. <br /> You
                can copy this command and place it in your terminal to install
                the dependencies. <br /> We also leave you the{" "}
                <a
                  href="https://www.framer.com/motion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition-all"
                >
                  Framer-motion
                </a>{" "}
                documentation.
              </p>

              <CodeComponent copyCode={terminalCommandNpmIFramerMotion}>
                {terminalCommandNpmIFramerMotion}
              </CodeComponent>

              <p className="my-5">
                Once installed we have to import motion and AnimatePresence from
                "framer-motion".
              </p>

              <CodeComponent copyCode={codeDrawer}>{codeDrawer}</CodeComponent>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-between px-5 py-5 mt-10">
              <Link
                href="/docs/components/input"
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

                <p>input</p>
              </Link>

              <Link
                href="/docs/components/skeleton"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
                onClick={() => scrollUp()}
              >
                <p>Skeleton</p>{" "}
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

export default Modal;
