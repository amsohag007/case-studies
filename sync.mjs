// Refreshes the case studies in this repo from the portfolio, which is the single source.
// Keeps each README's own front matter (redirect_to, permalink, ...) and replaces only the body,
// then copies the diagrams. Run: `node sync.mjs` (set PORTFOLIO_DIR if the portfolio lives elsewhere).
import fs from "node:fs";
import path from "node:path";

const src = path.resolve(process.env.PORTFOLIO_DIR ?? "../my-portfolio");
const content = path.join(src, "content", "case-studies");
if (!fs.existsSync(content)) {
  console.error(`Portfolio not found at ${src}. Set PORTFOLIO_DIR to its path.`);
  process.exit(1);
}

const body = (md) => md.replace(/^---\n[\s\S]*?\n---\n/, "");
const frontMatter = (md) => md.match(/^---\n[\s\S]*?\n---\n/)?.[0] ?? "";

for (const file of fs.readdirSync(content).filter((f) => f.endsWith(".md"))) {
  const slug = file.replace(/\.md$/, "");
  const readme = path.join(slug, "README.md");
  if (!fs.existsSync(readme)) {
    console.warn(`Skipped ${slug}: no ${readme} here yet (add its front matter first).`);
    continue;
  }
  const source = fs.readFileSync(path.join(content, file), "utf8").replace(/\r\n/g, "\n");
  const current = fs.readFileSync(readme, "utf8").replace(/\r\n/g, "\n");
  fs.writeFileSync(readme, frontMatter(current) + body(source));
  fs.copyFileSync(path.join(src, "public", "case-studies", slug, "architecture.png"), path.join(slug, "architecture.png"));
  console.log(`Synced ${slug}`);
}
