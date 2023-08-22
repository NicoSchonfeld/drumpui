"use client";

import React from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import NavbarListPages from "@/components/NavbarListPages";
import Link from "next/link";

import styled from "@/styles/lineGradiant.module.css";

const Introduction = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden bg-white dark:bg-black">
        <section className="relative container mx-auto w-full flex items-start justify-end mt-20">
          <div className="fixed top-[120px] left-20 lg:left-52">
            <NavbarListPages />
          </div>

          <div className="w-full text-black dark:text-white py-10 sm:px-10 md:px-32 lg:ps-96 px-10">
            <h3 className="text-4xl font-extrabold">Introduction</h3>

            <p>Welcome to the NextUI documentation!</p>

            <div>
              <p>What is drump UI</p>

              <p>
                NextUI is a UI library for React that helps you build beautiful
                and accessible user interfaces. Created on top of Tailwind CSS
                and React Aria. NextUI's primary goal is to streamline the
                development process, offering a beautiful and adaptable system
                design for an enhanced user experience.
              </p>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-end px-5 py-5">
              <Link
                href="/docs/guide/installation"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
              >
                <p>Installation</p>{" "}
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

export default Introduction;
