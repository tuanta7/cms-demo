"use client";

import dynamic from "next/dynamic";

const EditorRenderer = dynamic(() => import("./MagnoliaPage"), {
  ssr: false,
});

export default EditorRenderer;
