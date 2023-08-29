"use client";

import React, { useEffect, useState } from "react";
import { FiCopy } from "react-icons/fi";
import { BsCheck2 } from "react-icons/bs";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { motion, AnimatePresence } from "framer-motion";

import useSound from "use-sound";

const CodeComponent = ({ children, code = "React.js", copyCode }) => {
  const [copy, setCopy] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setCopy(false);
    }, 3500);
  }, [copy]);

  const toggleCopy = () => {
    setCopy(true);
    typeof window !== "undefined" &&
      window.navigator.clipboard.writeText(copyCode);
  };

  return (
    <>
      {copy ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: -20 }}
            exit={{ opacity: 0, y: 100 }}
            role="alert"
            className="bg-green-200 rounded-md flex items-center gap-3 p-3 md:w-[500px] w-96 fixed bottom-0 md:right-5 right-2 z-50"
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

            <p className="text-green-900 sm:text-base text-sm">
              Copied to clipboard!
            </p>
          </motion.div>
        </AnimatePresence>
      ) : null}

      <div className="w-auto max-w-[800px] h-auto relative overflow-x-auto pt-10 pb-3 px-5 font-medium text-[10px] md:text-[16px] sm:text-[12px] bg-gray-800 dark:bg-gray-800/50 border border-white/20 rounded-lg shadow-md">
        <div className="absolute top-3 left-4 flex items-center gap-1">
          <div className="w-[13px] h-[13px] bg-red-500 rounded-full"></div>
          <div className="w-[13px] h-[13px] bg-yellow-500 rounded-full"></div>
          <div className="w-[13px] h-[13px] bg-green-500 rounded-full"></div>
        </div>

        <div className="absolute top-3 right-4 flex items-center gap-5">
          <span className="text-sm text-gray-500">{code}</span>

          {copy ? (
            <span className="text-sm text-gray-200 flex items-center gap-1 cursor-pointer">
              <BsCheck2 /> Copied!
            </span>
          ) : (
            <span
              className="text-sm text-gray-200 flex items-center gap-1 cursor-pointer"
              onClick={() => toggleCopy()}
            >
              <FiCopy /> Copy
            </span>
          )}
        </div>

        <SyntaxHighlighter
          /* language="jsx" */
          style={atomOneDarkReasonable}
          customStyle={{ background: "transparent" }}
        >
          {children}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default CodeComponent;
