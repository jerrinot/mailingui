import type { MDXComponents } from "mdx/types";
import {
  MdxH1,
  MdxH2,
  MdxH3,
  MdxH4,
  MdxP,
  MdxA,
  MdxCode,
  DocPre,
  MdxUl,
  MdxOl,
} from "@components/MdxComponents";

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => (
    //   <h1 className="text-2xl font-semibold md:text-6xl">{children}</h1>
    // ),
    h1: MdxH1,
    h2: MdxH2,
    h3: MdxH3,
    h4: MdxH4,
    p: MdxP,
    pre: ({ children, ...props }) => <DocPre {...props}>{children}</DocPre>,
    a: MdxA,
    code: MdxCode,
    ol: MdxOl,
    ul: MdxUl,
    ...components,
  };
}
