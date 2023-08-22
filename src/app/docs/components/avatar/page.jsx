"use client";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NavbarListPages from "@/components/NavbarListPages";
import Link from "next/link";

import styled from "@/styles/lineGradiant.module.css";
import WindowsComponents from "@/components/WindowsComponents";
import Image from "next/image";

import photoUserProfile from "@/assets/photoUserProfile.jpg";
import CodeComponent from "@/components/CodeComponent";

const Avatar = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden bg-white dark:bg-black">
        <section className="relative container mx-auto w-full flex items-start justify-end mt-20">
          <div className="fixed top-[120px] left-20 lg:left-52">
            <NavbarListPages />
          </div>

          <div className="w-full text-black dark:text-white py-10 sm:px-10 md:px-32 lg:ps-96 px-10">
            <h3 className="text-4xl font-extrabold mb-5">Avatar</h3>

            <p className="max-w-3xl mb-20">
              The Avatar component is used to represent a user, and displays the
              profile picture, initials or fallback icon.
            </p>

            <div>
              <p className="text-2xl font-bold">Demo</p>

              <WindowsComponents>
                <Image
                  src={photoUserProfile}
                  width={50}
                  h={50}
                  className="transition-all rounded-full"
                />

                <Image
                  src={photoUserProfile}
                  width={50}
                  h={50}
                  className="transition-all rounded-full p-0.5 outline outline-green-500"
                />

                <div className="relative">
                  <div className="w-[16px] h-[16px] bg-green-500 rounded-full absolute top-0 right-0 flex items-center justify-center"></div>

                  <Image
                    src={photoUserProfile}
                    width={50}
                    h={50}
                    className="transition-all rounded-full"
                  />
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
                href="/docs/guide/installation"
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

                <p>Installation</p>
              </Link>

              <Link
                href="/docs/components/alert"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
              >
                <p>Alert</p>{" "}
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

export default Avatar;
