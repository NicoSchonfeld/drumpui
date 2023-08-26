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

const Button = () => {
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
      <div className="overflow-hidden bg-white dark:bg-black">
        <section className="relative container mx-auto w-full flex items-start justify-end mt-20">
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

          <div className="fixed top-[120px] left-20 lg:left-52">
            <NavbarListPages />
          </div>

          <div className="w-full text-black dark:text-white py-10 sm:px-10 md:px-32 lg:ps-96 px-10">
            <h3 className="text-4xl font-extrabold mb-5">Button</h3>
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

              <CodeComponent>
                <pre lenguage="language-html" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          transition rounded border border-pink-600 <br />
                          bg-pink-600 px-4 py-2 text-sm font-medium text-white
                          <br />
                          hover:bg-pink-700 hover:border-pink-700 <br />
                          hover:text-white focus:outline-none
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">Button</span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>
              </CodeComponent>
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

              <CodeComponent>
                <pre lenguage="language-html" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          ... px-4 py-2
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">Button</span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>

                <pre lenguage="language-html" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          ... px-5 py-2.5
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">Button</span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>

                <pre lenguage="language-html" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          ... px-6 py-3
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">Button</span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>

                <pre lenguage="language-html" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          ... px-7 py-3.5
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">Button</span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>
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

              <CodeComponent>
                <pre lenguage="language-html" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          transition rounded border border-pink-600 <br />
                          bg-pink-600 px-4 py-2 text-sm font-medium text-white
                          <br />
                          hover:bg-pink-700 hover:border-pink-700 <br />
                          hover:text-white focus:outline-none
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">Button</span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>

                <pre lenguage="language-html" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          transition rounded border border-pink-600 <br />
                          bg-transparent px-4 py-2 text-sm <br /> font-medium
                          text-pink-600 hover:bg-pink-600/10
                          <br />
                          hover:border-pink-600 hover:text-pink-700
                          <br />
                          focus:outline-none
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">Button</span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>

                <pre lenguage="language-html" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          transition rounded border border-pink-600
                          <br />
                          bg-transparent px-4 py-2 text-sm font-medium
                          text-pink-600
                          <br />
                          hover:bg-pink-600 hover:border-pink-600
                          <br />
                          hover:text-white
                          <br />
                          focus:outline-none
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">Button</span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>

                <pre lenguage="language-html" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          transition rounded bg-transparent px-4 py-2
                          <br />
                          text-sm font-medium text-pink-600
                          <br />
                          hover:bg-pink-600/10 hover:border-pink-600
                          <br />
                          hover:text-pink-600 focus:outline-none"
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">Button</span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>
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

              <CodeComponent>
                <pre>
                  <code className="text-white">
                    <span className="text-sky-500">npm</span> i react-icons
                  </code>
                </pre>
              </CodeComponent>

              <br />
              <br />

              <CodeComponent>
                <pre lenguage="language-jsx" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span className="token tag">
                      <span class="token tag">
                        <span class="text-red-500">import</span>{" "}
                        <span class="text-yellow-500">{`{`}</span>{" "}
                        <span class="text-white">
                          BsWhatsapp, BsFacebook, BsTwitter
                        </span>{" "}
                        <span class="text-yellow-500">{`}`}</span>{" "}
                        <span class="text-red-500">from</span>{" "}
                        <span class="text-gray-400">'react-icons/bs'</span>{" "}
                      </span>
                    </span>
                    <br />
                    <span className="token tag">
                      <span class="token tag">
                        <span class="text-red-500">import</span>{" "}
                        <span class="text-yellow-500">{`{`}</span>{" "}
                        <span class="text-white">FcGoogle</span>{" "}
                        <span class="text-yellow-500">{`}`}</span>{" "}
                        <span class="text-red-500">from</span>{" "}
                        <span class="text-gray-400">'react-icons/fc'</span>{" "}
                      </span>
                    </span>
                  </code>
                </pre>

                <pre lenguage="language-jsx" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          flex items-center gap-2 transition rounded border
                          <br />
                          border-green-500 bg-green-500 px-4 py-2 text-sm
                          <br />
                          font-medium text-white hover:bg-green-600
                          hover:border-green-600 hover:text-white
                          <br />
                          focus:outline-none
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">
                      <span class="token punctuation text-white">&lt;</span>
                      <span
                        class="token punctuaction"
                        className="text-sky-500 me-2"
                      >
                        BsWhatsapp
                      </span>
                      <span class="token punctuation text-white me-2">
                        /&gt;
                      </span>
                      WhatsApp
                    </span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>

                <pre lenguage="language-jsx" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          flex items-center gap-2 transition rounded border
                          <br />
                          border-blue-900 bg-blue-900 px-4 py-2 text-sm
                          <br />
                          font-medium text-white hover:bg-blue-900/90
                          hover:border-blue-900/90 hover:text-white
                          <br />
                          focus:outline-none
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">
                      <span class="token punctuation text-white">&lt;</span>
                      <span
                        class="token punctuaction"
                        className="text-sky-500 me-2"
                      >
                        BsFacebook
                      </span>
                      <span class="token punctuation text-white me-2">
                        /&gt;
                      </span>
                      Facebook
                    </span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>

                <pre lenguage="language-jsx" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          flex items-center gap-2 transition rounded border
                          <br />
                          border-sky-500 bg-sky-500 px-4 py-2 text-sm
                          font-medium text-white hover:bg-sky-600
                          <br />
                          hover:border-sky-600 hover:text-white
                          <br />
                          focus:outline-none
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">
                      <span class="token punctuation text-white">&lt;</span>
                      <span
                        class="token punctuaction"
                        className="text-sky-500 me-2"
                      >
                        BsTwitter
                      </span>
                      <span class="token punctuation text-white me-2">
                        /&gt;
                      </span>
                      Twitter
                    </span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>

                <pre lenguage="language-jsx" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          flex items-center gap-2 transition rounded border
                          <br />
                          border-black/10 bg-white px-4 py-2 text-sm font-medium
                          <br />
                          text-black hover:bg-white hover:border-whibg-white
                          <br />
                          hover:text-black focus:outline-none
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">
                      <span class="token punctuation text-white">&lt;</span>
                      <span
                        class="token punctuaction"
                        className="text-sky-500 me-2"
                      >
                        FcGoogle
                      </span>
                      <span class="token punctuation text-white me-2">
                        /&gt;
                      </span>
                      Google
                    </span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>
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

              <CodeComponent>
                <pre lenguage="language-html" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          cursor-no-drop transition rounded border
                          <br />
                          border-pink-400 bg-pink-400 px-4 py-2 text-sm
                          <br />
                          font-medium text-white
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">Button</span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>
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

              <CodeComponent>
                <pre>
                  <code className="text-white">
                    <span className="text-sky-500">npm</span> i react-icons
                  </code>
                </pre>
              </CodeComponent>

              <br />
              <br />

              <CodeComponent>
                <pre lenguage="language-jsx" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span className="token tag">
                      <span class="token tag">
                        <span class="text-red-500">import</span>{" "}
                        <span class="text-yellow-500">{`{`}</span>{" "}
                        <span class="text-white">ImSpinner8, ImSpinner2</span>{" "}
                        <span class="text-yellow-500">{`}`}</span>{" "}
                        <span class="text-red-500">from</span>{" "}
                        <span class="text-gray-400">'react-icons/im'</span>{" "}
                      </span>
                    </span>
                    <br />
                    <span className="token tag">
                      <span class="token tag">
                        <span class="text-red-500">import</span>{" "}
                        <span class="text-yellow-500">{`{`}</span>{" "}
                        <span class="text-white">FaSpinner</span>{" "}
                        <span class="text-yellow-500">{`}`}</span>{" "}
                        <span class="text-red-500">from</span>{" "}
                        <span class="text-gray-400">'react-icons/fa'</span>{" "}
                      </span>
                    </span>
                    <br />
                    <span className="token tag">
                      <span class="token tag">
                        <span class="text-red-500">import</span>{" "}
                        <span class="text-yellow-500">{`{`}</span>{" "}
                        <span class="text-white">CgSpinnerTwoAlt</span>{" "}
                        <span class="text-yellow-500">{`}`}</span>{" "}
                        <span class="text-red-500">from</span>{" "}
                        <span class="text-gray-400">'react-icons/cg'</span>{" "}
                      </span>
                    </span>
                  </code>
                </pre>

                <pre lenguage="language-jsx" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          cursor-no-drop flex items-center gap-2 transition
                          <br />
                          rounded border border-pink-400 bg-pink-400 px-4 py-2
                          text-sm font-medium
                          <br /> text-white
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">
                      <span class="token punctuation text-white">&lt;</span>
                      <span
                        class="token punctuaction"
                        className="text-sky-500 me-2"
                      >
                        ImSpinner8{" "}
                        <span class="token attr-name text-yellow-500">
                          className
                        </span>
                        <span class="token attr-value">
                          <span class="token punctuation attr-equals text-red-500">
                            =
                          </span>
                          <span class="token punctuation text-yellow-500">
                            "
                          </span>
                          <span class="code-highlight bg-code-highlight text-gray-400">
                            animate-spin
                          </span>
                          <span class="token punctuation text-yellow-500">
                            "
                          </span>
                        </span>
                      </span>
                      <span class="token punctuation text-white me-2">
                        /&gt;
                      </span>
                      Loading
                    </span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>

                <pre lenguage="language-jsx" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          cursor-no-drop flex items-center gap-2 transition
                          <br />
                          rounded border border-pink-400 bg-pink-400 px-4 py-2
                          text-sm font-medium
                          <br /> text-white
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">
                      <span class="token punctuation text-white">&lt;</span>
                      <span
                        class="token punctuaction"
                        className="text-sky-500 me-2"
                      >
                        ImSpinner2{" "}
                        <span class="token attr-name text-yellow-500">
                          className
                        </span>
                        <span class="token attr-value">
                          <span class="token punctuation attr-equals text-red-500">
                            =
                          </span>
                          <span class="token punctuation text-yellow-500">
                            "
                          </span>
                          <span class="code-highlight bg-code-highlight text-gray-400">
                            animate-spin
                          </span>
                          <span class="token punctuation text-yellow-500">
                            "
                          </span>
                        </span>
                      </span>
                      <span class="token punctuation text-white me-2">
                        /&gt;
                      </span>
                      Loading
                    </span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>

                <pre lenguage="language-jsx" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          cursor-no-drop flex items-center gap-2 transition
                          <br />
                          rounded border border-pink-400 bg-pink-400 px-4 py-2
                          text-sm font-medium
                          <br /> text-white
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">
                      <span class="token punctuation text-white">&lt;</span>
                      <span
                        class="token punctuaction"
                        className="text-sky-500 me-2"
                      >
                        FaSpinner{" "}
                        <span class="token attr-name text-yellow-500">
                          className
                        </span>
                        <span class="token attr-value">
                          <span class="token punctuation attr-equals text-red-500">
                            =
                          </span>
                          <span class="token punctuation text-yellow-500">
                            "
                          </span>
                          <span class="code-highlight bg-code-highlight text-gray-400">
                            animate-spin
                          </span>
                          <span class="token punctuation text-yellow-500">
                            "
                          </span>
                        </span>
                      </span>
                      <span class="token punctuation text-white me-2">
                        /&gt;
                      </span>
                      Loading
                    </span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>

                <pre lenguage="language-jsx" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">button</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          cursor-no-drop flex items-center gap-2 transition
                          <br />
                          rounded border border-pink-400 bg-pink-400 px-4 py-2
                          text-sm font-medium
                          <br /> text-white
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">
                      <span class="token punctuation text-white">&lt;</span>
                      <span
                        class="token punctuaction"
                        className="text-sky-500 me-2"
                      >
                        CgSpinnerTwoAlt{" "}
                        <span class="token attr-name text-yellow-500">
                          className
                        </span>
                        <span class="token attr-value">
                          <span class="token punctuation attr-equals text-red-500">
                            =
                          </span>
                          <span class="token punctuation text-yellow-500">
                            "
                          </span>
                          <span class="code-highlight bg-code-highlight text-gray-400">
                            animate-spin
                          </span>
                          <span class="token punctuation text-yellow-500">
                            "
                          </span>
                        </span>
                      </span>
                      <span class="token punctuation text-white me-2">
                        /&gt;
                      </span>
                      Loading
                    </span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">button</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>
              </CodeComponent>
            </div>

            <div className="mt-32">
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

              <CodeComponent>
                <pre lenguage="language-html" className="mt-10">
                  <code lenguage="lenguage-html">
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;</span>
                        <span class="text-red-500">span</span>
                      </span>{" "}
                      <span class="token attr-name text-yellow-500">
                        className
                      </span>
                      <span class="token attr-value">
                        <span class="token punctuation attr-equals text-red-500">
                          =
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                        <span class="code-highlight bg-code-highlight text-gray-400">
                          inline-flex overflow-hidden
                          <br /> rounded-md border dark:border-white/20 bg-white
                          <br /> dark:bg-black shadow-sm
                        </span>
                        <span class="token punctuation text-yellow-500">"</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                    <span class="text-white">
                      <br />
                      <span class="token tag">
                        <span class="token tag">
                          <span class="token punctuation text-white">&lt;</span>
                          <span class="text-red-500">button</span>
                        </span>{" "}
                        <span class="token attr-name text-yellow-500">
                          className
                        </span>
                        <span class="token attr-value">
                          <span class="token punctuation attr-equals text-red-500">
                            =
                          </span>
                          <span class="token punctuation text-yellow-500">
                            "
                          </span>
                          <span class="code-highlight bg-code-highlight text-gray-400">
                            transition-all inline-block border-e
                            <br />
                            dark:border-e-white/20 px-4 py-2 text-gray-700
                            dark:text-white hover:bg-black/5
                            <br />
                            dark:hover:bg-white/10 focus:relative
                          </span>
                          <span class="token punctuation text-yellow-500">
                            "
                          </span>
                        </span>
                        <span class="token punctuation text-white">&gt;</span>
                      </span>
                      <span className="text-white">Button 1</span>
                      <span class="token tag">
                        <span class="token tag">
                          <span class="token punctuation text-white">
                            &lt;/
                          </span>
                          <span class="text-red-500">button</span>
                        </span>
                        <span class="token punctuation text-white">&gt;</span>
                      </span>
                      <br />
                      <br />
                      <span class="token tag">
                        <span class="token tag">
                          <span class="token punctuation text-white">&lt;</span>
                          <span class="text-red-500">button</span>
                        </span>{" "}
                        <span class="token attr-name text-yellow-500">
                          className
                        </span>
                        <span class="token attr-value">
                          <span class="token punctuation attr-equals text-red-500">
                            =
                          </span>
                          <span class="token punctuation text-yellow-500">
                            "
                          </span>
                          <span class="code-highlight bg-code-highlight text-gray-400">
                            transition-all inline-block border-e
                            <br />
                            dark:border-e-white/20 px-4 py-2 text-gray-700
                            dark:text-white hover:bg-black/5
                            <br />
                            dark:hover:bg-white/10 focus:relative
                          </span>
                          <span class="token punctuation text-yellow-500">
                            "
                          </span>
                        </span>
                        <span class="token punctuation text-white">&gt;</span>
                      </span>
                      <span className="text-white">Button 2</span>
                      <span class="token tag">
                        <span class="token tag">
                          <span class="token punctuation text-white">
                            &lt;/
                          </span>
                          <span class="text-red-500">button</span>
                        </span>
                        <span class="token punctuation text-white">&gt;</span>
                      </span>
                      <br />
                    </span>
                    <span class="token tag">
                      <span class="token tag">
                        <span class="token punctuation text-white">&lt;/</span>
                        <span class="text-red-500">span</span>
                      </span>
                      <span class="token punctuation text-white">&gt;</span>
                    </span>
                  </code>
                </pre>
              </CodeComponent>
            </div>
            <div className={styled.gridLineCenter}></div>
            <div className="w-full flex items-center justify-between px-5 py-5">
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
    </>
  );
};

export default Button;
