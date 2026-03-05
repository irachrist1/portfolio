export type WritingCategory = {
  id: string;
  label: string;
  matchTags: string[];
};

export const writingCategories: WritingCategory[] = [
  {
    id: "ai",
    label: "AI & Tools",
    matchTags: ["AI Tools", "AI Workflows", "Get AI Native", "AI Strategy"],
  },
  {
    id: "strategy",
    label: "Strategy",
    matchTags: [
      "Product Strategy",
      "Industry Analysis",
      "State of AI 2026",
    ],
  },
  {
    id: "building",
    label: "Building in Public",
    matchTags: ["Building in Public", "Newsletter"],
  },
];

export function getArticleCategory(
  tags: string[]
): WritingCategory | undefined {
  return writingCategories.find((cat) =>
    cat.matchTags.some((t) => tags.includes(t))
  );
}

export function filterArticlesByCategory<
  T extends { tags: string[] },
>(articles: T[], categoryId: string): T[] {
  const category = writingCategories.find((c) => c.id === categoryId);
  if (!category) return articles;
  return articles.filter((a) =>
    category.matchTags.some((t) => a.tags.includes(t))
  );
}
