import React from "react";
import NavBar from "../components/NavBar";
import MarkdownPreview from "@uiw/react-markdown-preview";

import AboutContent from "../assets/markdown/about.mdx";

export default function AboutPage() {
//   console.log(AboutContent);
  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-col items-center bg-white">
        <div className="prose mlb-8">
            <AboutContent/>
        </div>
      </div>
    </div>
  );
}
