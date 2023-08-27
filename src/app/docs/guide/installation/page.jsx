"use client";

import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import NavbarListPages from "@/components/NavbarListPages";
import Link from "next/link";

import styled from "@/styles/lineGradiant.module.css";
import CodeComponent from "@/components/CodeComponent";

const Intallation = () => {
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
    <>
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
            <h3 className="text-4xl font-extrabold text-pink-500">
              Documentation
            </h3>

            <p className="mt-10">Welcome to the DrumpUI documentation!</p>

            <div>
              <p className="mt-10 text-xl font-bold">What is drump UI?</p>

              <p className="mt-5">
                DrumpUI are free open source components. <br /> A collection of
                free Tailwind CSS Components that can be used in all your
                projects.
              </p>
            </div>

            <div>
              <p className="mt-10 text-xl font-bold">Installation</p>

              <p className="mt-5">
                All you need to use these components is to have Tailwind CSS
                installed in your React project.
              </p>

              <div className="mt-5">
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition-all"
                >
                  Documentation of Tailwind CSS.
                </a>
              </div>

              <p className="mt-5 text-lg font-bold">
                Install Tailwind CSS with Nextjs
              </p>

              <p className="mt-5">
                We recommend that you use Nextjs to create projects as Tailwind
                CSS is easier to install.
                <br />
                We leave you your documentation and your command to place in the
                terminal.
              </p>

              <div className="mt-5">
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-700 transition-all"
                >
                  Documentation of Nextjs.
                </a>
              </div>

              <div className="mt-5">
                <CodeComponent code="Terminal">
                  <pre>
                    <code>
                      <span className="text-white">{`>`}</span>{" "}
                      <span className="text-sky-500">npx</span>{" "}
                      <span className="text-white">create-next-app@latest</span>
                    </code>
                  </pre>
                </CodeComponent>
              </div>

              <p className="my-5">
                It is important that in this option{" "}
                <span className="inline-flex items-center justify-center rounded-sm bg-pink-100 px-2.5 py-0.5 text-pink-700">
                  <code className="whitespace-nowrap text-sm">
                    Would you liketo use TypeScript? No /{" "}
                    <span className="font-bold">Yes</span>
                  </code>
                </span>
                <br /> put that if so that Tailwind CSS is installed correctly
                and can use DrumpUI.
              </p>

              <CodeComponent code="Terminal">
                <pre>
                  <code className="text-gray-100">
                    <span className="text-gray-500">1</span> What is your
                    project named? my-app
                    <br />
                    <span className="text-gray-500">2</span>{" "}
                    <span className="text-sky-500">
                      Would you liketo use TypeScript? No / Yes
                    </span>{" "}
                    <br />
                    <span className="text-gray-500">3</span> Would you like to
                    use ESLint? No / Yes
                    <br />
                    <span className="text-gray-500">4</span> Would you like to
                    use Tailwind CSS? No / Yes
                    <br />
                    <span className="text-gray-500">5</span> use `src/`
                    directory? No / Yes
                    <br />
                    <span className="text-gray-500">6</span> Router?
                    (recommended) No / Yes
                    <br />
                    <span className="text-gray-500">7</span> default import
                    alias? No / Yes
                  </code>
                </pre>
              </CodeComponent>

              <p className="mt-10 text-lg font-bold">
                Install Tailwind CSS with Vite
              </p>

              <p className="mt-5">
                Start by creating a new Vite project if you don’t have one set
                up already. <br /> The most common approach is to use Create
                Vite.
              </p>

              <div className="mt-5">
                <CodeComponent code="Terminal">
                  <pre>
                    <code>
                      <span className="text-white">{`>`}</span>{" "}
                      <span className="text-sky-500">npm</span>{" "}
                      <span className="text-white">
                        create vite@latest my-project -- --template react
                      </span>
                      <br />
                      <span className="text-white">{`>`}</span>{" "}
                      <span className="text-sky-500">cd</span>{" "}
                      <span className="text-white">my-project</span>
                    </code>
                  </pre>
                </CodeComponent>
              </div>

              <p className="mt-5">
                Install tailwindcss and its peer dependencies, then generate
                your tailwind.config.js <br /> and postcss.config.js files.
              </p>

              <div className="mt-5">
                <CodeComponent code="Terminal">
                  <pre>
                    <code>
                      <span className="text-white">{`>`}</span>{" "}
                      <span className="text-sky-500">npm</span>{" "}
                      <span className="text-white">
                        install -D tailwindcss postcss autoprefixer
                      </span>
                      <br />
                      <span className="text-white">{`>`}</span>{" "}
                      <span className="text-sky-500">npx</span>{" "}
                      <span className="text-white">tailwindcss init -p</span>
                    </code>
                  </pre>
                </CodeComponent>
              </div>

              <p className="mt-5">
                Configure your template paths. <br />
                Add the paths to all of your template files in your
                tailwind.config.js file.
              </p>

              <div className="mt-5">
                <CodeComponent code="tailwind.config.js">
                  <pre>
                    <code>
                      <span className="text-gray-500">{`/** @type {import('tailwindcss').Config} */`}</span>{" "}
                      <br />
                      <span className="text-white">
                        export default {`{`}
                      </span>{" "}
                      <br />
                      {"    "}
                      <span className="text-sky-500">content: {`[`}</span>{" "}
                      <br />
                      {"        "}
                      <span className="text-sky-500">"./index.html",</span>{" "}
                      <br />
                      {"        "}
                      <span className="text-sky-500">{`"./src/**/*.{js,ts,jsx,tsx}",`}</span>{" "}
                      <br />
                      {"    "}
                      <span className="text-sky-500">{`],`}</span> <br />
                      {"    "}
                      <span className="text-white">theme: {`{`}</span> <br />
                      {"    "}
                      <span className="text-white">extend: ,</span>
                      <br />
                      {"    "}
                      <span className="text-white">{`},`}</span>
                      <br />
                      {"    "}
                      <span className="text-white">plugins: {`[]`},</span>
                      <br />
                      <span className="text-white">{`},`}</span>
                    </code>
                  </pre>
                </CodeComponent>
              </div>

              <p className="mt-5">
                Add the Tailwind directives to your CSS. <br />
                Add the @tailwind directives for each of Tailwind’s layers to
                your ./src/globales.css file.
              </p>

              <div className="mt-5">
                <CodeComponent code="globals.css">
                  <pre>
                    <code>
                      <span className="text-red-300">@tailwind</span>{" "}
                      <span className="text-yellow-500">base</span>
                      <span className="text-white">;</span>
                      <br />
                      <span className="text-red-300">@tailwind</span>{" "}
                      <span className="text-yellow-500">components</span>
                      <span className="text-white">;</span>
                      <br />
                      <span className="text-red-300">@tailwind</span>{" "}
                      <span className="text-yellow-500">utilities</span>
                      <span className="text-white">;</span>
                    </code>
                  </pre>
                </CodeComponent>
              </div>

              <p className="mt-5">
                Start your build process. <br />
                Run your build process with npm run dev.
              </p>

              <div className="mt-5">
                <CodeComponent code="Terminal">
                  <pre>
                    <code>
                      <span className="text-white">{`>`}</span>{" "}
                      <span className="text-sky-500">npm</span>{" "}
                      <span className="text-white">run dev</span>
                    </code>
                  </pre>
                </CodeComponent>
              </div>

              <p className="mt-5">
                Start using Tailwind in your project. <br />
                Start using Tailwind’s utility classes to style your content.
              </p>

              <div className="mt-5 mb-20">
                <CodeComponent code="App.jsx">
                  <pre>
                    <code>
                      <span className="text-red-300">
                        export default function{" "}
                        <span className="text-yellow-500">App()</span>{" "}
                        <span className="text-sky-500">{`{`}</span>
                        <br />
                        {"    "}
                        <span className="text-red-300">return (</span>
                        <br />
                        {"        "}
                        <span className="text-white">{`<`}</span>
                        <span className="text-red-300">h1</span>{" "}
                        <span className="text-yellow-500">className="</span>
                        <span className="text-sky-300">
                          text-3xl font-bold underline
                        </span>
                        <span className="text-yellow-500">"</span>
                        <span className="text-white">{`>`}</span>
                        <br />
                        {"            "}
                        <span className="text-white">Hello world!</span>
                        <br />
                        {"        "}
                        <span className="text-white">{`</`}</span>
                        <span className="text-red-300">h1</span>
                        <span className="text-white">{`>`}</span>
                        <br />
                        {"    "}
                        <span className="text-red-300">)</span>
                        <br />
                        <span className="text-red-300">{`}`}</span>
                      </span>
                    </code>
                  </pre>
                </CodeComponent>
              </div>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-end px-5 py-5 mt-10">
              {/* <Link
                href="/docs/guide/introduction"
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

                <p>Introduction</p>
              </Link> */}
              <Link
                href="/docs/components/avatar"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
                onClick={() => scrollUp()}
              >
                <p>Components</p>{" "}
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

export default Intallation;
