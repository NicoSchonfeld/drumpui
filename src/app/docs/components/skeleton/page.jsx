"use client";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarListPages from "@/components/NavbarListPages";
import Link from "next/link";

import styled from "@/styles/lineGradiant.module.css";
import WindowsComponents from "@/components/WindowsComponents";
import CodeComponent from "@/components/CodeComponent";

const Skeleton = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden bg-white dark:bg-black">
        <section className="relative container mx-auto w-full flex items-start justify-end mt-20">
          <div className="fixed top-[120px] left-20 lg:left-52">
            <NavbarListPages />
          </div>

          <div className="w-full text-black dark:text-white py-10 sm:px-10 md:px-32 lg:ps-96 px-10">
            <h3 className="text-4xl font-extrabold mb-5">Skeleton</h3>

            <p className="max-w-3xl mb-20">
              Skeleton is used to display the loading state of some component.
            </p>

            <div className="mt-32">
              <p className="text-2xl font-bold">Demo</p>

              <p className="mt-2">You can use it as a standalone component.</p>

              <WindowsComponents>
                <div className="sm:w-[500px] w-[300px] p-4">
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-3 py-1">
                      <div className="h-5 bg-slate-200"></div>
                      <div className="h-5 bg-slate-200"></div>
                      <div className="h-5 bg-slate-200"></div>
                    </div>
                  </div>
                </div>
              </WindowsComponents>

              <CodeComponent>
                <pre className="mt-10 text-white">
                  &lt;<span className="text-red-500">div</span>{" "}
                  <span className="text-yellow-500">className</span>=
                  <span className="text-yellow-500">"</span>
                  <span className="text-gray-400">
                    sm:w-[500px] w-[300px] p-4
                  </span>
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

            <div className="mt-32">
              <p>
                Or to wrap another component to take the same height and width.
              </p>

              <WindowsComponents>
                <div className="sm:w-[500px] w-[300px] p-4">
                  <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-3 py-1">
                      <div className="h-10 bg-slate-200"></div>
                    </div>
                  </div>
                </div>
              </WindowsComponents>

              <CodeComponent>
                <pre className="mt-10 text-white">
                  &lt;<span className="text-red-500">div</span>{" "}
                  <span className="text-yellow-500">className</span>=
                  <span className="text-yellow-500">"</span>
                  <span className="text-gray-400">
                    sm:w-[500px] w-[300px] p-4
                  </span>
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
                  <span className="text-gray-400">h-10 bg-slate-200</span>
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

            <div className="mt-32">
              <p className="text-2xl font-bold">Circle and Text Skeleton</p>

              <WindowsComponents>
                <div className="sm:w-[500px] w-[300px] p-4">
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

              <CodeComponent>
                <pre className="mt-10">
                  &lt;div class="sm:w-[500px] w-[300px] p-4"&gt; &lt;div
                  class="animate-pulse flex flex-col space-y-4"&gt; &lt;div
                  class="rounded-full bg-slate-200 h-10 w-10"&gt;&lt;/div&gt;
                  &lt;div class="flex-1 space-y-3 py-1"&gt; &lt;div class="h-2
                  bg-slate-200 "&gt;&lt;/div&gt; &lt;div class="h-2 bg-slate-200
                  "&gt;&lt;/div&gt; &lt;div class="h-2 bg-slate-200
                  "&gt;&lt;/div&gt; &lt;div class="w-[75%] h-2 bg-slate-200
                  "&gt;&lt;/div&gt; &lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                </pre>
              </CodeComponent>
            </div>

            <div className="mt-32">
              <p className="text-2xl font-bold">
                Circle and Text Skeleton variant 2
              </p>

              <WindowsComponents>
                <div className="sm:w-[500px] w-[300px] p-4">
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

              <CodeComponent>
                <pre className="mt-10">
                  &lt;div className=&quot;sm:w-[500px] w-[300px] p-4&quot;&gt;
                  &lt;div className=&quot;animate-pulse flex space-x-4&quot;&gt;
                  &lt;div className=&quot;rounded-full bg-slate-200 h-10
                  w-10&quot;&gt;&lt;/div&gt; &lt;div className=&quot;flex-1
                  space-y-3 py-1&quot;&gt; &lt;div className=&quot;h-2
                  bg-slate-200&quot;&gt;&lt;/div&gt; &lt;div className=&quot;h-2
                  bg-slate-200&quot;&gt;&lt;/div&gt; &lt;div className=&quot;h-2
                  bg-slate-200&quot;&gt;&lt;/div&gt; &lt;div className=&quot;h-2
                  bg-slate-200&quot;&gt;&lt;/div&gt; &lt;/div&gt; &lt;/div&gt;
                  &lt;/div&gt;
                </pre>
              </CodeComponent>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-between px-5 py-5">
              <Link
                href="/docs/components/modal"
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

                <p>Modal</p>
              </Link>

              <Link
                href="/docs/components/breadcrumb"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
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
    </>
  );
};

export default Skeleton;
