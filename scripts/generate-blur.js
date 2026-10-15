// Generates tiny base64 previews for every image the site renders, so each
// <Image> can paint something immediately instead of an empty box.
const fs = require("node:fs");
const path = require("node:path");

const root = process.argv[2];
const sharp = require(path.join(root, "node_modules", "sharp"));

const dirs = ["public/photos", "public/projects"];
const files = [];
for (const dir of dirs) {
  const abs = path.join(root, dir);
  if (!fs.existsSync(abs)) continue;
  for (const name of fs.readdirSync(abs)) {
    if (/\.(jpe?g|png|webp)$/i.test(name)) {
      files.push("/" + path.posix.join(dir.replace(/^public\//, ""), name));
    }
  }
}

(async () => {
  const entries = [];
  for (const rel of files.sort()) {
    const abs = path.join(root, "public", rel.replace(/^\//, ""));
    const buf = await sharp(abs)
      .resize(12, 12, { fit: "inside" })
      .webp({ quality: 45 })
      .toBuffer();
    entries.push([rel, `data:image/webp;base64,${buf.toString("base64")}`]);
  }

  const body = entries.map(([k, v]) => `  "${k}":\n    "${v}",`).join("\n");
  const out = `/**
 * Tiny inline previews, generated from the files in /public by
 * scripts/generate-blur.js. Each <Image> paints one of these instantly, so a
 * slow network shows a soft colour impression instead of an empty frame.
 */
export const blurPlaceholders: Record<string, string> = {
${body}
};

/** Falls back to a flat brand-ink pixel for anything not pre-generated. */
export const FALLBACK_BLUR =
  "data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==";

export function blurFor(src: string): string {
  return blurPlaceholders[src] ?? FALLBACK_BLUR;
}
`;
  fs.writeFileSync(path.join(root, "src/lib/blur.ts"), out);
  console.log(`generated ${entries.length} placeholders`);
  const bytes = entries.reduce((n, [, v]) => n + v.length, 0);
  console.log(`total inline weight: ${(bytes / 1024).toFixed(1)}KB`);
})();
