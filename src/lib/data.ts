/**
 * Centralised content model for the homepage.
 * All copy here is original placeholder content written for this recreation —
 * the layout/structure mirrors the reference, the words and assets do not.
 */

export const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Campuses", href: "#campuses" },
  { label: "Gallery", href: "#gallery" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO = {
  eyebrow: "A happy place to grow",
  titleA: "Where little minds",
  titleHighlight: "bloom",
  titleB: "every single day",
  sub: "A play-first early learning school that turns curiosity into confidence — for children aged 1.5 to 6 years.",
  ctaPrimary: "Book a Campus Visit",
  ctaSecondary: "Explore Programs",
  image: "/images/hero.svg",
};

export const LOGOS = [
  "Sunrise Corp",
  "BrightWorks",
  "Northwind",
  "Helio Labs",
  "Crayon & Co",
  "Maple Group",
  "Orbit Media",
  "Lighthouse",
];

export const LEARNING_HUB = {
  eyebrow: "Our Learning Hub",
  title: "A curriculum built around how children actually learn",
  body: "Our hub blends Montessori-inspired stations, sensory play zones and storytelling circles. Every corner is designed to spark a question — and every question is met with a guided discovery.",
  points: [
    { icon: "🧩", label: "Play-based pedagogy" },
    { icon: "🎨", label: "Art & sensory studios" },
    { icon: "📚", label: "Early literacy circles" },
    { icon: "🌱", label: "Outdoor nature lab" },
  ],
  image: "/images/learning-hub.svg",
};

export const STATS = [
  { value: 12, suffix: "+", label: "Years of joyful learning" },
  { value: 4800, suffix: "+", label: "Happy graduates" },
  { value: 6, suffix: "", label: "Campuses across the city" },
  { value: 98, suffix: "%", label: "Parent happiness score" },
];

export const FEATURES = [
  {
    eyebrow: "Safe & Nurturing",
    title: "A second home, built for tiny explorers",
    body: "CCTV-monitored campuses, trained caregivers, child-proofed corners and a strict 1:8 teacher ratio — so every child is seen, heard and hugged.",
    cta: "Our Safety Promise",
    image: "/images/feature-1.svg",
    accent: "teal" as const,
  },
  {
    eyebrow: "Learning by Doing",
    title: "Hands-on projects that make ideas stick",
    body: "From baking math to puddle science, our project weeks let children touch, build and break things — because real understanding is messy and wonderful.",
    cta: "Peek Into a Project Week",
    image: "/images/feature-2.svg",
    accent: "berry" as const,
  },
  {
    eyebrow: "Future Ready",
    title: "Confidence that walks into big school smiling",
    body: "Our school-readiness track builds vocabulary, numeracy and social grace, with transition workshops for parents in the final term.",
    cta: "School Readiness Plan",
    image: "/images/feature-3.svg",
    accent: "grape" as const,
  },
];

export const TESTIMONIALS = [
  {
    name: "Ananya's Mom",
    role: "Parent, Playgroup",
    quote: "She runs to the gate every morning. That's all the review you need.",
    thumb: "/images/testimonial-1.svg",
  },
  {
    name: "Vihaan's Dad",
    role: "Parent, Nursery",
    quote: "The teachers know my son better than his grandparents do. Astonishing care.",
    thumb: "/images/testimonial-2.svg",
  },
  {
    name: "Sara's Parents",
    role: "Parents, Junior KG",
    quote: "We moved across town and kept the same campus. Worth every extra mile.",
    thumb: "/images/testimonial-3.svg",
  },
  {
    name: "Advik's Mom",
    role: "Parent, Senior KG",
    quote: "He started reading street signs aloud at five. The literacy circles work.",
    thumb: "/images/testimonial-4.svg",
  },
];

export const AGE_GROUPS = [
  {
    badge: "1.5 – 2.5 yrs",
    title: "Playgroup",
    body: "Gentle separation, sensory play and first friendships.",
    image: "/images/age-1.svg",
    color: "bg-sky-pop",
  },
  {
    badge: "2.5 – 3.5 yrs",
    title: "Nursery",
    body: "Language explosion, motor skills and circle time.",
    image: "/images/age-2.svg",
    color: "bg-berry-pop",
  },
  {
    badge: "3.5 – 4.5 yrs",
    title: "Junior KG",
    body: "Pre-writing, early numeracy and confident expression.",
    image: "/images/age-3.svg",
    color: "bg-leaf-pop",
  },
  {
    badge: "4.5 – 6 yrs",
    title: "Senior KG",
    body: "School readiness, reading fluency and leadership play.",
    image: "/images/age-4.svg",
    color: "bg-grape-pop",
  },
];

export const CAMPUSES = [
  {
    name: "Jubilee Hills",
    tag: "Flagship Campus",
    image: "/images/campus-1.svg",
    gradient: "from-brand-200 via-brand-100 to-cream",
  },
  {
    name: "Gachibowli",
    tag: "Day-care + Preschool",
    image: "/images/campus-2.svg",
    gradient: "from-sky-pop/30 via-brand-50 to-cream",
  },
  {
    name: "Kondapur",
    tag: "Preschool",
    image: "/images/campus-3.svg",
    gradient: "from-berry-pop/25 via-brand-50 to-cream",
  },
];

export const BLOG_POSTS = [
  {
    title: "Why boredom is a gift: raising self-starters",
    category: "Parenting",
    date: "May 28, 2026",
    image: "/images/blog-1.svg",
  },
  {
    title: "5 snack-box swaps your toddler will actually eat",
    category: "Nutrition",
    date: "May 14, 2026",
    image: "/images/blog-2.svg",
  },
  {
    title: "Screen time before six: what the research says",
    category: "Research",
    date: "Apr 30, 2026",
    image: "/images/blog-3.svg",
  },
];

export const GALLERY = [
  { image: "/images/gallery-1.svg", tall: true },
  { image: "/images/gallery-2.svg", tall: false },
  { image: "/images/gallery-3.svg", tall: false },
  { image: "/images/gallery-4.svg", tall: true },
  { image: "/images/gallery-5.svg", tall: false },
  { image: "/images/gallery-6.svg", tall: true },
];

export const INSTAGRAM = [
  "/images/insta-1.svg",
  "/images/insta-2.svg",
  "/images/insta-3.svg",
  "/images/insta-4.svg",
  "/images/insta-5.svg",
  "/images/insta-6.svg",
];

export const EVENT = {
  eyebrow: "Upcoming Event",
  title: "Summer Splash Camp 2026",
  body: "Two weeks of water play, clay studios and campfire stories. Open to all children aged 2–6 — members and non-members welcome.",
  date: "June 22 – July 4",
  cta: "Reserve a Spot",
  image: "/images/event.svg",
};

export const FOOTER_COLUMNS = [
  {
    heading: "Explore",
    links: ["About Us", "Programs", "Campuses", "Admissions", "Careers"],
  },
  {
    heading: "Programs",
    links: ["Playgroup", "Nursery", "Junior KG", "Senior KG", "Day-care"],
  },
  {
    heading: "Resources",
    links: ["Blog", "Gallery", "Parent Handbook", "FAQs", "Fee Structure"],
  },
];
