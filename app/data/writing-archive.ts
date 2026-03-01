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

export function parseKitWindowProps(html: string): KitWindowProps | null {
  const marker = "window.props = ";
  const markerIndex = html.indexOf(marker);
  if (markerIndex === -1) return null;

  const jsonStart = markerIndex + marker.length;
  const scriptClose = html.indexOf(";</script>", jsonStart);
  if (scriptClose === -1) return null;

  const payload = html.slice(jsonStart, scriptClose).trim();

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
