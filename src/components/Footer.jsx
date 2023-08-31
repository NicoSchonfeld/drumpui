"use client";

import LogoIcon from "./LogoIcon";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme, setTheme } = useTheme();

  const aboutDrumpUI = [
    {
      id: "developer",
      title: "Developer",
      path: "https://nicoschonfeld.vercel.app/",
    },
    {
      id: "github",
      title: "Github",
      path: "https://github.com/NicoSchonfeld/drumpui-components/tree/main/src/components",
    },
    {
      id: "twitter",
      title: "Twitter",
      path: "https://twitter.com/NicoSchonfeld__",
    },
    {
      id: "sponsor",
      title: "Sponsor",
      path: "https://cafecito.app/nicoschonfeld",
    },
  ];

  const listNavGuide = [
    {
      id: "installation",
      title: "Installation",
      path: "/docs/guide/installation",
    },
    { id: "components", title: "Components", path: "/docs/components/avatar" },
  ];

  const listNavComponents = [
    { id: "avatar", title: "Avatar", path: "/docs/components/avatar" },
    { id: "alert", title: "Alert", path: "/docs/components/alert" },
    { id: "accordion", title: "Accordion", path: "/docs/components/accordion" },
    { id: "badge", title: "Badge", path: "/docs/components/badge" },
    { id: "button", title: "Button", path: "/docs/components/button" },
    { id: "card", title: "Card", path: "/docs/components/card" },
    { id: "input", title: "Input", path: "/docs/components/input" },
    { id: "modal", title: "Modal", path: "/docs/components/modal" },
    { id: "skeleton", title: "Skeleton", path: "/docs/components/skeleton" },
    {
      id: "breadcrumb",
      title: "Breadcrumb",
      path: "/docs/components/breadcrumb",
    },
  ];

  {
    /* <div>
            <p>
              Created by{" "}
              <a
                href="https://nicoschonfeld.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700"
              >
                Nico Schönfeld
              </a>
              .
            </p>
            <a
              className="flex items-center gap-2 hover:text-gray-600"
              href="https://vercel.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed on{" "}
              {theme == "dark" ? (
                <svg
                  className="w-20"
                  aria-label="Vercel logotype"
                  height="64"
                  role="img"
                  viewBox="0 0 283 64"
                  width="283"
                >
                  <path
                    d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                    fill="white"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-20"
                  aria-label="Vercel logotype"
                  height="64"
                  role="img"
                  viewBox="0 0 283 64"
                  width="283"
                >
                  <path
                    d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                    fill="black"
                  ></path>
                </svg>
              )}
            </a>
            <p>© 2023 Drump</p>
          </div> */
  }

  {
    /* <LogoIcon
              color={theme === "dark" ? "white" : "black"}
              colorUI={theme === "dark" ? "white" : "#EC4899"}
              ui={theme === "dark" ? "#EC4899" : "white"}
              w={140}
            /> */
  }

  {
    /* <div className="flex items-start justify-start gap-20">
            <div>
              <p className="text-md font-bold mb-2 text-black dark:text-white">
                Documentation
              </p>

              <ul className="flex flex-col items-start gap-1">
                {listNavGuide?.map((dato) => (
                  <li
                    key={dato.id}
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer"
                  >
                    {dato.title}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-md font-bold mb-2 text-black dark:text-white">
                About DrumpUI
              </p>

              <ul className="flex flex-col items-start gap-1">
                {aboutDrumpUI?.map((dato) => (
                  <li
                    key={dato.id}
                    className="text-gray-500 hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer"
                  >
                    {dato.title}
                  </li>
                ))}
              </ul>
            </div>
          </div> */
  }

  return (
    <>
      <footer className="w-full h-auto bg-white dark:bg-black border-t border-black/20 dark:border-white/20">
        <div className="w-full container mx-auto py-20 px-10 flex flex-col items-center justify-center gap-20">
          <div className="flex flex-col items-center gap-2">
            <LogoIcon
              color={theme === "dark" ? "white" : "black"}
              colorUI={theme === "dark" ? "white" : "#EC4899"}
              ui={theme === "dark" ? "#EC4899" : "white"}
              w={140}
            />

            <p className="text-gray-600 dark:text-gray-300 text-center">
              Build your website with Free Tailwind CSS components.
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <p>
              Created by{" "}
              <a
                href="https://nicoschonfeld.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:text-pink-700"
              >
                Nico Schönfeld
              </a>
              .
            </p>
            <a
              className="flex items-center gap-2 bg-gray-400/20 dark:bg-gray-600/20 rounded-md px-5 py-2 hover:bg-gray-400/50 dark:hover:bg-gray-600/50 transition-all"
              href="https://vercel.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed on{" "}
              {theme == "dark" ? (
                <svg
                  className="w-20 h-auto"
                  aria-label="Vercel logotype"
                  height="64"
                  role="img"
                  viewBox="0 0 283 64"
                  width="283"
                >
                  <path
                    d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                    fill="white"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-20 h-auto"
                  aria-label="Vercel logotype"
                  height="64"
                  role="img"
                  viewBox="0 0 283 64"
                  width="283"
                >
                  <path
                    d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9v-46h9zM37.59.25l36.95 64H.64l36.95-64zm92.38 5l-27.71 48-27.71-48h10.39l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10v14.8h-9v-34h9v9.2c0-5.08 5.91-9.2 13.2-9.2z"
                    fill="black"
                  ></path>
                </svg>
              )}
            </a>
            <p className="text-gray-500">© 2023 Drump</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
