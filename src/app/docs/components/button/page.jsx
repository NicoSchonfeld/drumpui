"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarListPages from "@/components/NavbarListPages";
import Link from "next/link";

import styled from "@/styles/lineGradiant.module.css";
import WindowsComponents from "@/components/WindowsComponents";
import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { ImSpinner8, ImSpinner2 } from "react-icons/im";
import { FaSpinner } from "react-icons/fa";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import CodeComponent from "@/components/CodeComponent";
import { useTheme } from "next-themes";
import {
  codeButton,
  codeButtonDisabled,
  codeButtonGroup,
  codeButtonLoading,
  codeButtonSizes,
  codeButtonVariants,
  codeSocialButtons,
  terminalCommandNpmIreactIcons,
} from "@/components/CodeExapmleOfComponents";

const Button = () => {
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
              Button
            </h3>
            <p className="max-w-3xl mb-20">
              Button component is used to trigger an action or event, such as
              submitting a form, opening a Dialog, canceling an action, or
              performing a delete operation.
            </p>

            <div>
              <p className="text-2xl font-bold">Demo</p>

              <WindowsComponents>
                <button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
                  Button
                </button>
              </WindowsComponents>

              <CodeComponent copyCode={codeButton}>{codeButton}</CodeComponent>
            </div>

            <div className="mt-32">
              <p className="text-2xl font-bold">Button Sizes</p>

              <WindowsComponents>
                <button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none ">
                  Button
                </button>

                <button className="transition rounded border border-pink-600 bg-pink-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none ">
                  Button x2
                </button>

                <button className="transition rounded border border-pink-600 bg-pink-600 px-6 py-3 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none ">
                  Button x3
                </button>

                <button className="transition rounded border border-pink-600 bg-pink-600 px-7 py-3.5 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none ">
                  Button x4
                </button>
              </WindowsComponents>

              <CodeComponent copyCode={codeButtonSizes}>
                {codeButtonSizes}
              </CodeComponent>
            </div>

            <div className="mt-32">
              <p className="text-2xl font-bold">Button variants</p>

              <WindowsComponents>
                <button className="transition rounded border border-pink-600 bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700 hover:border-pink-700 hover:text-white focus:outline-none">
                  Button
                </button>

                <button className="transition rounded border border-pink-600 bg-transparent px-4 py-2 text-sm font-medium text-pink-600 hover:bg-pink-600/10 hover:border-pink-600 hover:text-pink-700 focus:outline-none">
                  Button
                </button>

                <button className="transition rounded border border-pink-600 bg-transparent px-4 py-2 text-sm font-medium text-pink-600 hover:bg-pink-600 hover:border-pink-600 hover:text-white focus:outline-none">
                  Button
                </button>

                <button className="transition rounded bg-transparent px-4 py-2 text-sm font-medium text-pink-600 hover:bg-pink-600/10 hover:border-pink-600 hover:text-pink-600 focus:outline-none">
                  Button
                </button>
              </WindowsComponents>

              <CodeComponent copyCode={codeButtonVariants}>
                {codeButtonVariants}
              </CodeComponent>
            </div>

            <div className="mt-32">
              <p className="text-2xl font-bold">Social Buttons</p>

              <WindowsComponents>
                <button className="flex items-center gap-2 transition rounded border border-green-500 bg-green-500 px-4 py-2 text-sm font-medium text-white hover:bg-green-600 hover:border-green-600 hover:text-white focus:outline-none">
                  <BsWhatsapp /> WhatsApp
                </button>

                <button className="flex items-center gap-2 transition rounded border border-blue-900 bg-blue-900 px-4 py-2 text-sm font-medium text-white hover:bg-blue-900/90 hover:border-blue-900/90 hover:text-white focus:outline-none">
                  <BsFacebook /> Facebook
                </button>

                <button className="flex items-center gap-2 transition rounded border border-sky-500 bg-sky-500 px-4 py-2 text-sm font-medium text-white hover:bg-sky-600 hover:border-sky-600 hover:text-white focus:outline-none">
                  <svg
                    data-testid="geist-icon"
                    fill="none"
                    height="15"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="15"
                  >
                    <path
                      fill="var(--geist-fill, currentColor)"
                      stroke="none"
                      d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z"
                    />
                  </svg>{" "}
                  Twitter
                </button>

                <button className="flex items-center gap-2 transition rounded border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white hover:border-whibg-white hover:text-black focus:outline-none">
                  <FcGoogle /> Google
                </button>
              </WindowsComponents>

              <p className="my-5">
                The icons that you see in these buttons are used from
                React-Icons. <br />
                You can copy this command and place it on your terminal to
                install the icons. <br />
                We also leave you their documentation{" "}
                <a
                  href="https://react-icons.github.io/react-icons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition-all"
                >
                  React-icons
                </a>
                .
              </p>

              <CodeComponent copyCode={terminalCommandNpmIreactIcons}>
                {terminalCommandNpmIreactIcons}
              </CodeComponent>

              <br />
              <br />

              <p className="my-5">
                Once installed we have to import them into our file from
                <code> react-icons/(icon name)</code> <br />
                and we can call them as a component to start using them.
              </p>

              <CodeComponent copyCode={codeSocialButtons}>
                {codeSocialButtons}
              </CodeComponent>
            </div>

            <div className="mt-32">
              <p className="text-2xl font-bold">Button disabled</p>

              <WindowsComponents>
                <button
                  disabled
                  className="cursor-no-drop transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white"
                >
                  Button
                </button>
              </WindowsComponents>

              <CodeComponent copyCode={codeButtonDisabled}>
                {codeButtonDisabled}
              </CodeComponent>
            </div>

            <div className="mt-32">
              <p className="text-2xl font-bold">Button loading</p>

              <WindowsComponents>
                <button className="cursor-no-drop flex items-center gap-2 transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white">
                  <ImSpinner8 className="animate-spin" /> Loading
                </button>

                <button className="cursor-no-drop flex items-center gap-2 transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white">
                  <ImSpinner2 className="animate-spin" /> Loading
                </button>

                <button className="cursor-no-drop flex items-center gap-2 transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white">
                  <FaSpinner className="animate-spin" /> Loading
                </button>

                <button className="cursor-no-drop flex items-center gap-2 transition rounded border border-pink-400 bg-pink-400 px-4 py-2 text-sm font-medium text-white">
                  <CgSpinnerTwoAlt className="animate-spin" /> Loading
                </button>
              </WindowsComponents>

              <p className="my-5">
                The icons that you see in these buttons are used from
                React-Icons. <br />
                You can copy this command and place it on your terminal to
                install the icons. <br />
                We also leave you their documentation{" "}
                <a
                  href="https://react-icons.github.io/react-icons"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition-all"
                >
                  React-icons
                </a>
                .
              </p>

              <CodeComponent copyCode={terminalCommandNpmIreactIcons}>
                {terminalCommandNpmIreactIcons}
              </CodeComponent>

              <br />

              <p className="my-5">
                Once installed we have to import them into our file from
                <code> react-icons/(icon name)</code> <br />
                and we can call them as a component to start using them.
              </p>

              <CodeComponent copyCode={codeButtonLoading}>
                {codeButtonLoading}
              </CodeComponent>
            </div>

            <div className="mt-32 mb-20">
              <p className="text-2xl font-bold">Button group</p>

              <WindowsComponents>
                <span className="inline-flex overflow-hidden rounded-md border dark:border-white/20 bg-white dark:bg-black shadow-sm">
                  <button className="transition-all inline-block border-e dark:border-e-white/20 px-4 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
                    Button 1
                  </button>

                  <button className="transition-all inline-block border-e dark:border-e-white/20 px-4 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
                    Button 2
                  </button>

                  <button className="transition-all inline-block dark:border-e-white/20 px-4 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
                    Button 3
                  </button>
                </span>

                <span className="inline-flex overflow-hidden rounded-md border dark:border-white/20 bg-white dark:bg-black shadow-sm">
                  <button className="transition-all inline-block border-e dark:border-e-white/20 px-4 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
                    Profile
                  </button>

                  <button className="transition-all inline-block dark:border-e-white/20 px-2 py-2 text-gray-700 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 focus:relative">
                    <svg
                      className="h-5 w-5 shrink-0 transition duration-300 dark:text-white text-black"
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
                  </button>
                </span>
              </WindowsComponents>

              <CodeComponent copyCode={codeButtonGroup}>
                {codeButtonGroup}
              </CodeComponent>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-between px-5 py-5 mt-10">
              <Link
                href="/docs/components/badge"
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

                <p>Badge</p>
              </Link>

              <Link
                href="/docs/components/card"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
                onClick={() => scrollUp()}
              >
                <p>Card</p>{" "}
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

export default Button;
