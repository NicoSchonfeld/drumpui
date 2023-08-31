"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavbarListPages = () => {
  const pathname = usePathname();

  const listNavGuide = [
    {
      id: "installation",
      title: "Installation",
      path: "/docs/guide/installation",
    },
  ];

  const listNavComponents = [
    {
      id: "avatar",
      title: "Avatar",
      path: "/docs/components/avatar",
      newVersion: false,
    },
    {
      id: "alert",
      title: "Alert",
      path: "/docs/components/alert",
      newVersion: false,
    },
    {
      id: "accordion",
      title: "Accordion",
      path: "/docs/components/accordion",
      newVersion: false,
    },
    {
      id: "badge",
      title: "Badge",
      path: "/docs/components/badge",
      newVersion: false,
    },
    {
      id: "button",
      title: "Button",
      path: "/docs/components/button",
      newVersion: false,
    },
    {
      id: "card",
      title: "Card",
      path: "/docs/components/card",
      newVersion: false,
    },
    {
      id: "input",
      title: "Input",
      path: "/docs/components/input",
      newVersion: false,
    },
    {
      id: "modal",
      title: "Modal",
      path: "/docs/components/modal",
      newVersion: false,
    },
    {
      id: "skeleton",
      title: "Skeleton",
      path: "/docs/components/skeleton",
      newVersion: false,
    },
    {
      id: "breadcrumb",
      title: "Breadcrumb",
      path: "/docs/components/breadcrumb",
      newVersion: false,
    },
    {
      id: "creadit_card",
      title: "Credit card",
      path: "/docs/components/creaditcard",
      newVersion: true,
    },
    {
      id: "table",
      title: "Table",
      path: "/docs/components/table",
      newVersion: true,
    },
    {
      id: "headers",
      title: "Headers",
      path: "/docs/components/headers",
      newVersion: true,
    },
  ];

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="sr-only xl:not-sr-only">
        <details
          className="group [&_summary::-webkit-details-marker]:hidden transition-all"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 transition-all">
            <h2 className="font-bold text-pink-500">Guide</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:rotate-[15] text-pink-500 rotate-90"
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

          <ul className="space-y-5">
            {listNavGuide?.map((dato, index) => (
              <li key={dato.id}>
                <Link
                  href={dato.path}
                  rel="noopener noreferrer"
                  className={
                    pathname === dato.path
                      ? "text-black ps-5 dark:text-white/80"
                      : "text-black/50 hover:text-black/40 dark:text-white/50 dark:hover:text-white/40 transition-all ps-5"
                  }
                  onClick={() => scrollUp()}
                >
                  {dato.title}
                </Link>
              </li>
            ))}
          </ul>
        </details>

        <details
          className="group [&_summary::-webkit-details-marker]:hidden transition-all"
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 p-4 text-gray-900 transition-all">
            <h2 className="font-bold text-pink-500">Components</h2>

            <svg
              className="h-5 w-5 shrink-0 transition duration-300 group-open:rotate-[15] text-pink-500 rotate-90"
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

          <ul className="space-y-5">
            {listNavComponents?.map((dato, index) => (
              <li key={dato.id}>
                <Link
                  href={dato.path}
                  rel="noopener noreferrer"
                  className={
                    pathname === dato.path
                      ? "text-black ps-5 dark:text-white/80 flex items-center gap-2"
                      : "text-black/50 hover:text-black/40 dark:text-white/50 dark:hover:text-white/40 transition-all ps-5 flex items-center gap-2"
                  }
                  onClick={() => scrollUp()}
                >
                  {dato.title}{" "}
                  {dato.newVersion ? (
                    <span className="inline-flex items-center justify-center rounded-full bg-emerald-100 px-1 py-0.5 text-emerald-700">
                      <p className="whitespace-nowrap text-[10px]">New</p>
                    </span>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </>
  );
};

export default NavbarListPages;
