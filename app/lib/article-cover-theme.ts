export type ArticleCoverTheme = {
  fingerprint: string;
  meshVariant: 0 | 1 | 2 | 3;
  hueA: number;
  hueB: number;
  hueC: number;
  saturation: number;
  lightness: number;
  accentAlpha: number;
  grainAlpha: number;
};

function hashString(input: string): number {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function normalizeHue(value: number): number {
  const hue = value % 360;
  return hue < 0 ? hue + 360 : hue;
}

export function buildArticleCoverTheme(seed: string): ArticleCoverTheme {
  const hash = hashString(seed);

  const meshVariant = (hash % 4) as 0 | 1 | 2 | 3;
  const hueA = normalizeHue(hash % 360);
  const hueB = normalizeHue(hueA + 35 + (hash % 50));
  const hueC = normalizeHue(hueA + 210 + (hash % 40));
  const saturation = 56 + (hash % 18); // Keep chroma moderated
  const lightness = 46 + (hash % 10); // Avoid over-bright covers
  const accentAlpha = 0.12 + ((hash >>> 8) % 7) * 0.015;
  const grainAlpha = 0.2 + ((hash >>> 12) % 6) * 0.03;

  const fingerprint = [
    meshVariant,
    hueA,
    hueB,
    hueC,
    saturation,
    lightness,
    accentAlpha.toFixed(3),
    grainAlpha.toFixed(3),
  ].join("-");

  return {
    fingerprint,
    meshVariant,
    hueA,
    hueB,
    hueC,
    saturation,
    lightness,
    accentAlpha,
    grainAlpha,
  };
}
