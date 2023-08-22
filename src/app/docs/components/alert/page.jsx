"use client";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarListPages from "@/components/NavbarListPages";
import Link from "next/link";

import styled from "@/styles/lineGradiant.module.css";
import WindowsComponents from "@/components/WindowsComponents";
import CodeComponent from "@/components/CodeComponent";

const Alert = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden bg-white dark:bg-black">
        <section className="relative container mx-auto w-full flex items-start justify-end mt-20">
          <div className="fixed top-[120px] left-20 lg:left-52">
            <NavbarListPages />
          </div>

          <div className="w-full text-black dark:text-white py-10 sm:px-10 md:px-32 lg:ps-96 px-10">
            <h3 className="text-4xl font-extrabold mb-5">Alert</h3>

            <p className="max-w-3xl mb-20">
              Alerts are used to communicate a state that affects a system,
              feature or page.
            </p>

            <div className="mb-32">
              <p className="text-2xl font-bold">Demo</p>

              <WindowsComponents col="col">
                <div
                  role="alert"
                  className="bg-red-200 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="rotate-180 text-red-500 w-7 h-7"
                      data-testid="geist-icon"
                      fill="none"
                      height="14"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="14"
                    >
                      <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </span>

                  <p className="text-red-900">
                    There was an error processing your request
                  </p>
                </div>

                <div
                  role="alert"
                  className="bg-green-200 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="text-green-600"
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
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>

                  <p className="text-green-900">
                    Data uploaded to the server. Fire on!
                  </p>
                </div>

                <div
                  role="alert"
                  className="bg-yellow-100 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="text-yellow-500"
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
                      <path
                        d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                        fill="var(--geist-fill)"
                      />
                      <path d="M12 9v4" stroke="var(--geist-stroke)" />
                      <path d="M12 17h.01" stroke="var(--geist-stroke)" />
                    </svg>
                  </span>

                  <p className="text-green-900">
                    Seems your account is about expire, upgrade now
                  </p>
                </div>

                <div
                  role="alert"
                  className="bg-sky-100 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="text-sky-500 w-7 h-7"
                      data-testid="geist-icon"
                      fill="none"
                      height="14"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="14"
                    >
                      <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </span>

                  <p className="text-sky-900">
                    Chakra is going live on August 30th. Get ready!
                  </p>
                </div>
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

            <div>
              <p className="text-2xl font-bold">Variants</p>

              <WindowsComponents col="col">
                <div
                  role="alert"
                  className="bg-red-500 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="rotate-180 text-white w-7 h-7"
                      data-testid="geist-icon"
                      fill="none"
                      height="14"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="14"
                    >
                      <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </span>

                  <p className="text-white">
                    There was an error processing your request
                  </p>
                </div>

                <div
                  role="alert"
                  className="bg-green-500 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="text-white"
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
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>

                  <p className="text-white">
                    Data uploaded to the server. Fire on!
                  </p>
                </div>

                <div
                  role="alert"
                  className="bg-yellow-500 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="text-white"
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
                      <path
                        d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
                        fill="var(--geist-fill)"
                      />
                      <path d="M12 9v4" stroke="var(--geist-stroke)" />
                      <path d="M12 17h.01" stroke="var(--geist-stroke)" />
                    </svg>
                  </span>

                  <p className="text-white">
                    Seems your account is about expire, upgrade now
                  </p>
                </div>

                <div
                  role="alert"
                  className="bg-sky-500 flex items-center gap-3 p-3 w-full"
                >
                  <span>
                    <svg
                      className="text-white w-7 h-7"
                      data-testid="geist-icon"
                      fill="none"
                      height="14"
                      shape-rendering="geometricPrecision"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      width="14"
                    >
                      <circle cx="12" cy="12" r="10" fill="var(--geist-fill)" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  </span>

                  <p className="text-white">
                    Chakra is going live on August 30th. Get ready!
                  </p>
                </div>
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
                href="/docs/components/avatar"
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

                <p>Avatar</p>
              </Link>

              <Link
                href="/docs/components/accordion"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
              >
                <p>Accordion</p>{" "}
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

export default Alert;
