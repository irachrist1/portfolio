function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function parsePublishArgs(argv) {
  const args = {
    slug: "",
    publishDate: "",
    branch: "main",
    remote: "origin",
    dryRun: false,
  };

  for (const arg of argv) {
    if (arg.startsWith("--slug=")) {
      args.slug = arg.slice("--slug=".length).trim();
      continue;
    }

    if (arg.startsWith("--publish-date=")) {
      args.publishDate = arg.slice("--publish-date=".length).trim();
      continue;
    }

    if (arg.startsWith("--branch=")) {
      args.branch = arg.slice("--branch=".length).trim();
      continue;
    }

    if (arg.startsWith("--remote=")) {
      args.remote = arg.slice("--remote=".length).trim();
      continue;
    }

    if (arg === "--dry-run") {
      args.dryRun = true;
      continue;
    }

    throw new Error(`Unknown argument '${arg}'.`);
  }

  if (!args.slug) {
    throw new Error("Missing required argument --slug=<slug>.");
  }

  return args;
}

export function getKigaliTodayDateString(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Kigali",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);

  return parts;
}

export function toKigaliStartIso(dateString) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    throw new Error(
      `Invalid publish date '${dateString}'. Expected YYYY-MM-DD format.`
    );
  }

  const utcValue = new Date(`${dateString}T00:00:00+02:00`);

  if (Number.isNaN(utcValue.getTime())) {
    throw new Error(`Could not parse publish date '${dateString}'.`);
  }

  return utcValue.toISOString();
}

export function updateArticlePublicationInSource(source, slug, publishedAtIso) {
  const pattern = new RegExp(
    `(slug:\\s*"${escapeRegex(slug)}"[\\s\\S]*?published:\\s*)(true|false)(,\\s*\\n\\s*publishedAt:\\s*)(null|"[^"]*")(,)`
  );

  const match = source.match(pattern);

  if (!match) {
    throw new Error(`Article slug '${slug}' was not found in app/data/writing.ts.`);
  }

  if (match[2] === "true") {
    throw new Error(`Article '${slug}' is already published.`);
  }

  return source.replace(pattern, `$1true$3"${publishedAtIso}"$5`);
}

export function assertSourceHasSlug(source, slug) {
  const slugPattern = new RegExp(`slug:\\s*"${escapeRegex(slug)}"`);
  if (!slugPattern.test(source)) {
    throw new Error(`Article slug '${slug}' does not exist in app/data/writing.ts.`);
  }
}
