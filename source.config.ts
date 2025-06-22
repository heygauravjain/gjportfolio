import {
  defineCollections,
  defineConfig,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export const blogs = defineCollections({
  type: "doc",
  dir: "content/blogs",
  schema: frontmatterSchema.extend({
    author: z.string().default("Deepak Jangra"),
    date: z
      .string()
      .or(z.date())
      .transform((value, context) => {
        try {
          return new Date(value);
        } catch {
          context.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Invalid date",
          });
          return z.NEVER;
        }
      }),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
