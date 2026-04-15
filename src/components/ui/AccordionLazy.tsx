"use client";

import dynamic from "next/dynamic";

export const AccordionLazy = dynamic(
  () => import("./Accordion").then((m) => m.Accordion),
  { ssr: true }
);
