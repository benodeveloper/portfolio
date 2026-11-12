import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Global components for every MDX file (required by @next/mdx in the App Router).
 * Styling comes from the `.md` wrapper class in globals.css.
 */
const components: MDXComponents = {
  a: ({ href = "", children, ...props }) =>
    href.startsWith("/") || href.startsWith("#") ? (
      <Link href={href} {...props}>{children}</Link>
    ) : (
      <a href={href} target="_blank" rel="noreferrer" {...props}>{children}</a>
    ),
  // eslint-disable-next-line @next/next/no-img-element -- MDX authors reference arbitrary images by path
  img: ({ alt = "", ...props }) => <img alt={alt} loading="lazy" decoding="async" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
