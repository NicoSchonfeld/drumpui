"use client";

import React from "react";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeComponentDemoHomeCard = ({ children }) => {
  return (
    <>
      <SyntaxHighlighter
        language="jsx"
        style={atomOneDarkReasonable}
        customStyle={{ background: "transparent" }}
        className={`scrollbar-thin scrollbar-thumb-white scrollbar-track-transparent`}
      >
        {children}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeComponentDemoHomeCard;
