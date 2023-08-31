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
import { codeTable } from "@/components/CodeExapmleOfComponents";
import { BiLogoVisa } from "react-icons/bi";

const Table = () => {
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
              Table
            </h3>

            <p className="max-w-3xl mb-20">
              Table component is used to organize and display data efficiently.
            </p>

            <div className="mb-20">
              <p className="text-2xl font-bold">Demo</p>

              <WindowsComponents>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                      <tr className="bg-gray-100">
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-start text-gray-900">
                          Cliente
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-start text-gray-900">
                          Correo
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-start text-gray-900">
                          Estado
                        </th>
                        <th className="whitespace-nowrap px-4 py-2 font-medium text-start text-gray-900">
                          Importe
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-start text-gray-900">
                          Felix Saldaña
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
                          felix@saldana.com
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
                          Enviado
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
                          $76.999,00
                        </td>
                      </tr>

                      <tr className="bg-gray-100">
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-start text-gray-900">
                          Lucas Gallego
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
                          lucas@saldana.com
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
                          Enviado
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
                          $20.009,00
                        </td>
                      </tr>

                      <tr>
                        <td className="whitespace-nowrap px-4 py-2 font-medium text-start text-gray-900">
                          Oihane Torralba
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
                          oihane@saldana.com
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
                          Enviado
                        </td>
                        <td className="whitespace-nowrap px-4 py-2 text-start text-gray-700">
                          $7.000,00
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </WindowsComponents>

              <CodeComponent copyCode={codeTable}>{codeTable}</CodeComponent>
            </div>

            <div className={styled.gridLineCenter}></div>

            <div className="w-full flex items-center justify-between px-5 py-5 mt-10">
              <Link
                href="/docs/components/creaditcard"
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

                <p>Creadit card</p>
              </Link>

              <Link
                href="/docs/components/headers"
                rel="noopener noreferrer"
                className="border border-dark/50 dark:border-white/30 rounded-md px-3 py-2 flex items-center justify-center space-x-2 dark:hover:shadow-white/30 hover:shadow-md transition-all"
                onClick={() => scrollUp()}
              >
                <p>Headers</p>{" "}
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

export default Table;
