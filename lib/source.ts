import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { blogs } from "@/.source";

export const source = loader({
  baseUrl: "/blogs",
  source: createMDXSource(blogs),
});
