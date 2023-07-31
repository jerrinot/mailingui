import { componentTypes } from "@examples";

export type DocItems = DocItemGroup[];
export type DocItemGroup = {
  label: string;
  items: DocItem[];
};
export type DocItem = {
  href: string;
  label: string;
  description?: string;
};

export const docsItems: DocItems = [
  {
    label: "Getting Started",
    items: [
      {
        href: "/docs/installation",
        label: "Installation",
        description: "Learn about the MailingUI",
      },
    ],
  },
  {
    label: "Components",
    items: [
      {
        href: "/docs/components",
        label: "Overview",
        description: "Explore MailingUI components",
      },
      ...componentTypes
        .map((componentType) => ({
          href: `/docs/components/${componentType.type}`,
          label: componentType.title,
          description: componentType.subtitle,
        }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    ],
  },
];

export const flattenedDocsItems = docsItems.reduce((acc, item) => {
  if (item.items) acc.push(...item.items);
  return acc;
}, [] as DocItem[]);
