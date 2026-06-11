import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Generates colourful SVG placeholder "photos" so the project ships
 * self-contained. Swap these for real photography in /public/images.
 */
const OUT = join(process.cwd(), "public", "images");
mkdirSync(OUT, { recursive: true });

const PALETTES = [
  ["#FFC907", "#FF7A1A"],
  ["#4FB7E8", "#8E6FD8"],
  ["#FF5E8A", "#FFC907"],
  ["#7AC143", "#00B5A5"],
  ["#8E6FD8", "#FF5E8A"],
  ["#00B5A5", "#4FB7E8"],
];

function svg(name, label, w, h, paletteIndex) {
  const [c1, c2] = PALETTES[paletteIndex % PALETTES.length];
  const id = name.replace(/\W/g, "");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g${id}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g${id})"/>
  <circle cx="${w * 0.78}" cy="${h * 0.22}" r="${Math.min(w, h) * 0.18}" fill="#ffffff" opacity="0.18"/>
  <circle cx="${w * 0.18}" cy="${h * 0.8}" r="${Math.min(w, h) * 0.26}" fill="#ffffff" opacity="0.12"/>
  <circle cx="${w * 0.5}" cy="${h * 0.45}" r="${Math.min(w, h) * 0.09}" fill="#ffffff" opacity="0.25"/>
  <text x="50%" y="52%" text-anchor="middle" font-family="Arial, sans-serif" font-size="${Math.min(w, h) * 0.07}" font-weight="bold" fill="#ffffff" opacity="0.85">${label}</text>
</svg>
`;
}

const IMAGES = [
  ["hero", "Hero Photo", 1000, 1000],
  ["learning-hub", "Learning Hub", 800, 1000],
  ["feature-1", "Safety", 1000, 800],
  ["feature-2", "Projects", 1000, 800],
  ["feature-3", "Readiness", 1000, 800],
  ["testimonial-1", "Parent Story 1", 750, 1000],
  ["testimonial-2", "Parent Story 2", 750, 1000],
  ["testimonial-3", "Parent Story 3", 750, 1000],
  ["testimonial-4", "Parent Story 4", 750, 1000],
  ["age-1", "Playgroup", 800, 600],
  ["age-2", "Nursery", 800, 600],
  ["age-3", "Junior KG", 800, 600],
  ["age-4", "Senior KG", 800, 600],
  ["campus-1", "Campus 1", 1200, 750],
  ["campus-2", "Campus 2", 1200, 750],
  ["campus-3", "Campus 3", 1200, 750],
  ["blog-1", "Blog 1", 960, 600],
  ["blog-2", "Blog 2", 960, 600],
  ["blog-3", "Blog 3", 960, 600],
  ["gallery-1", "Gallery 1", 750, 1000],
  ["gallery-2", "Gallery 2", 800, 800],
  ["gallery-3", "Gallery 3", 800, 800],
  ["gallery-4", "Gallery 4", 750, 1000],
  ["gallery-5", "Gallery 5", 800, 800],
  ["gallery-6", "Gallery 6", 750, 1000],
  ["insta-1", "Insta 1", 600, 600],
  ["insta-2", "Insta 2", 600, 600],
  ["insta-3", "Insta 3", 600, 600],
  ["insta-4", "Insta 4", 600, 600],
  ["insta-5", "Insta 5", 600, 600],
  ["insta-6", "Insta 6", 600, 600],
  ["event", "Summer Camp", 1000, 750],
];

IMAGES.forEach(([name, label, w, h], i) => {
  writeFileSync(join(OUT, `${name}.svg`), svg(name, label, w, h, i));
});

console.log(`Generated ${IMAGES.length} placeholder images in public/images`);
