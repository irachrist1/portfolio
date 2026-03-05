import type { Metadata } from "next";
import {
  getPublishedArticles,
  getWritingCollectionMetadata,
} from "@/app/data/writing";
import { WritingFilter } from "./WritingFilter";

export const metadata: Metadata = getWritingCollectionMetadata();

export default function WritingPage() {
  const articles = getPublishedArticles().map((a) => ({
    slug: a.slug,
    title: a.title,
    publishedAt: a.publishedAt,
    tags: a.tags,
  }));

  return <WritingFilter articles={articles} />;
}
