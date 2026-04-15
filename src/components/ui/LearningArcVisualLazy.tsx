"use client";

import dynamic from "next/dynamic";

export const LearningArcVisualLazy = dynamic(
  () => import("./LearningArcVisual").then((m) => m.LearningArcVisual),
  { ssr: true }
);
