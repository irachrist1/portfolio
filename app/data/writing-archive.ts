export type ExternalArchiveArticle = {
  id: string;
  title: string;
  url: string;
  excerpt: string;
  publishedAt: string | null;
  source: "Kit" | "LinkedIn";
};

const KIT_ARCHIVE_URL = "https://sunday-scoops.kit.com/posts";
const LINKEDIN_NEWSLETTER_URL =
  "https://www.linkedin.com/newsletters/rwanda-s-tech-insider-7131233970339373056/";

type KitRecentPost = {
  id: number;
  title: string;
  url: string;
  introContent?: string;
  publishedAt?: string;
};

type KitWindowProps = {
  recentPosts?: KitRecentPost[];
};

function extractJsonObjectAfterMarker(input: string, marker: string): string | null {
  const markerIndex = input.indexOf(marker);
  if (markerIndex === -1) return null;

  let cursor = markerIndex + marker.length;
  while (cursor < input.length && /\s/.test(input[cursor])) {
    cursor += 1;
  }

  if (input[cursor] !== "{") {
    return null;
  }

  let depth = 0;
  let inString = false;
  let escaping = false;
  let endIndex = -1;

  for (let index = cursor; index < input.length; index += 1) {
    const char = input[index];

    if (inString) {
      if (escaping) {
        escaping = false;
        continue;
      }
      if (char === "\\") {
        escaping = true;
        continue;
      }
      if (char === "\"") {
        inString = false;
      }
      continue;
    }

    if (char === "\"") {
      inString = true;
      continue;
    }

    if (char === "{") {
      depth += 1;
      continue;
    }

    if (char === "}") {
      depth -= 1;
      if (depth === 0) {
        endIndex = index + 1;
        break;
      }
    }
  }

  if (endIndex === -1) {
    return null;
  }

  return input.slice(cursor, endIndex);
}

export function parseKitWindowProps(html: string): KitWindowProps | null {
  const payload = extractJsonObjectAfterMarker(html, "window.props = ");
  if (!payload) return null;

  try {
    return JSON.parse(payload) as KitWindowProps;
  } catch (_error) {
    return null;
  }
}

function cleanExcerpt(text?: string): string {
  if (!text) return "";
  return text.replace(/\s+/g, " ").trim();
}

export async function fetchKitRecentPosts(limit = 12): Promise<ExternalArchiveArticle[]> {
  try {
    const response = await fetch(KIT_ARCHIVE_URL, {
      headers: {
        "User-Agent": "portfolio-writing-archive/1.0",
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      return [];
    }

    const html = await response.text();
    const props = parseKitWindowProps(html);

    if (!props?.recentPosts || props.recentPosts.length === 0) {
      return [];
    }

    return props.recentPosts.slice(0, limit).map((post) => ({
      id: String(post.id),
      title: post.title,
      url: post.url,
      excerpt: cleanExcerpt(post.introContent),
      publishedAt: post.publishedAt ?? null,
      source: "Kit",
    }));
  } catch (_error) {
    return [];
  }
}

export function getExternalArchiveRoots() {
  return {
    kit: KIT_ARCHIVE_URL,
    linkedIn: LINKEDIN_NEWSLETTER_URL,
  };
}
