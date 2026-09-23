import type React from "react";

export interface GroupMeta {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  keywords: string[];
  ogImage: string;
  icon: string;
  image: string;
  schema: object;
}

export interface HoverEffect {
  id: string;
  title: string;
  category: string;
  description?: string;
  tags?: string[];
  animationType?: string;
  complexity?: "simple" | "medium" | "complex";
  /** npm package dependencies required by the React component */
  deps?: string[];
  /** Optional attribution link shown in the effect card */
  credit?: {
    title: string;
    url: string;
  };
  react: string;
  html: string;
  css?: string;
  /** Live preview component rendered in the effect card */
  preview?: React.ComponentType;
}

