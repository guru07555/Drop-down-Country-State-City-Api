/**
 * Centralised content model for the homepage.
 *
 * Copy is original placeholder text written for this recreation — the
 * section structure mirrors the reference, the paragraphs do not.
 *
 * Images: the build container cannot reach photo CDNs, so every slot
 * points to a keyword-locked loremflickr URL that resolves to a real
 * photograph in the browser. Swap each entry for licensed photography
 * before going live.
 */

export const img = (keywords: string, w: number, h: number, lock: number) =>
  `https://loremflickr.com/${w}/${h}/${keywords}?lock=${lock}`;

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Activities", href: "#activities" },
  { label: "Programs", href: "#programs" },
  { label: "Our Schools", href: "#schools" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
] as const;

export const TOPBAR = {
  left: "Admissions Open for 2026–27 · Limited Seats",
  phone: "+91 90000 00000",
};

export const HERO_SLIDES = [
  {
    title: "A Safe, Nurturing Environment",
    image: img("preschool,children,classroom", 1600, 900, 101),
  },
  {
    title: "Where Kids Learn Through Play",
    image: img("kids,playing,kindergarten", 1600, 900, 102),
  },
  {
    title: "Caring Teachers, Happy Children",
    image: img("teacher,children,school", 1600, 900, 103),
  },
];

export const LOGOS = [
  "Sunrise Corp",
  "BrightWorks",
  "Northwind",
  "Helio Labs",
  "Maple Group",
  "Orbit Media",
];

export const LEARNING_HUB = {
  eyebrowTop: "Child-Centered",
  title: "Learning Hub",
  body: "Welcome to a hub of joyful discovery — a warm, child-first space where early learning is woven into play, movement and conversation. Our educators design every day around curiosity, so children build real understanding, happiness and confidence.",
  image: img("toddler,playing,blocks", 700, 700, 104),
  badges: [
    { icon: "🧒", label: "Child-Centered Learning Approach" },
    { icon: "🌳", label: "Large Outdoor Spaces" },
    { icon: "🛡️", label: "Safe & Secure Environment" },
  ],
};

export const STATS = [
  { value: 2000, suffix: "+", label: "Sessions every month" },
  { value: 7, suffix: "+", label: "Years of Trust (Since 2019)" },
  { value: 100, suffix: "+", label: "Parents & Staff community" },
];

export const CORNERS = [
  {
    script: "The Feel Corner",
    title: "Where Conscious Connections Happen.",
    body: "We provide a safe, nurturing space for children to understand and express their feelings — helping them build strong connections with parents, peers and the world around them.",
    cta: "Learn More",
    image: img("teacher,child,reading", 800, 800, 105),
    flipped: false,
    tint: true,
  },
  {
    script: "The Do and Think Corner",
    title: "Where Kids Do, Try and Learn.",
    body: "Children learn through hands-on activity and imaginative play. We guide their little discoveries and big experiments, turning every question into a small project they can touch, build and feel proud of.",
    cta: "Learn More",
    image: img("children,craft,painting", 800, 800, 106),
    flipped: true,
    tint: false,
  },
];

export const TESTIMONIALS = [
  {
    name: "Parents of Aarav",
    image: img("family,parents,portrait", 700, 800, 107),
    video: true,
  },
  {
    name: "Mother of Anaya",
    image: img("mother,child,happy", 700, 800, 108),
    video: true,
  },
  {
    name: "Mother of Vivaan",
    image: img("mother,baby,smile", 700, 800, 109),
    video: true,
  },
];

export const AGE_GROUPS = [
  {
    badge: "1.5–2 Years",
    title: "Toddlers",
    body: "Gentle care for the tiniest learners.",
    image: img("toddler,playing,toys", 700, 550, 110),
  },
  {
    badge: "2–3 Years",
    title: "Junior 1",
    body: "First steps into a world of wonder.",
    image: img("toddler,kindergarten,learning", 700, 550, 111),
  },
  {
    badge: "3–4 Years",
    title: "Junior 2",
    body: "Where every discovery sparks joy.",
    image: img("child,preschool,drawing", 700, 550, 112),
  },
  {
    badge: "4–5 Years",
    title: "Junior 3",
    body: "Growing confidence through joyful learning.",
    image: img("children,classroom,activity", 700, 550, 113),
  },
  {
    badge: "5–6 Years",
    title: "K1",
    body: "Building fluency with brilliance and care.",
    image: img("kid,school,writing", 700, 550, 114),
  },
  {
    badge: "6–7 Years",
    title: "K2",
    body: "Prepared for school — inspired for life.",
    image: img("children,school,books", 700, 550, 115),
  },
];

export const NURSERY_TABS = [
  {
    label: "Preschool Zone",
    image: img("preschool,children,group", 1300, 700, 116),
  },
  {
    label: "Day-care Zone",
    image: img("daycare,kids,playing", 1300, 700, 117),
  },
  {
    label: "Outdoor Play",
    image: img("playground,children,outdoor", 1300, 700, 118),
  },
];

export const BLOG_POSTS = [
  {
    title: "How play builds the thinking brain",
    date: "28 May 2026",
    image: img("children,playing,education", 800, 560, 119),
  },
  {
    title: "Helping toddlers name big feelings",
    date: "14 May 2026",
    image: img("toddler,emotions,child", 800, 560, 120),
  },
  {
    title: "Five outdoor games for tiny scientists",
    date: "30 Apr 2026",
    image: img("kids,outdoor,nature", 800, 560, 121),
  },
  {
    title: "A gentle start: easing the first goodbye",
    date: "16 Apr 2026",
    image: img("parent,child,school", 800, 560, 122),
  },
];

export const LIFE_GALLERY = [
  { image: img("children,dance,school", 700, 900, 123), tall: true },
  { image: img("kids,art,classroom", 700, 500, 124), tall: false },
  { image: img("children,sports,day", 700, 500, 125), tall: false },
  { image: img("kids,celebration,festival", 700, 900, 126), tall: true },
  { image: img("children,music,fun", 700, 500, 127), tall: false },
  { image: img("kids,garden,activity", 700, 900, 128), tall: true },
  { image: img("children,yoga,exercise", 700, 500, 129), tall: false },
  { image: img("kids,storytime,reading", 700, 500, 130), tall: false },
];

export const INSTAGRAM = Array.from({ length: 8 }, (_, i) => ({
  image: img("kids,school,happy", 600, 600, 131 + i),
  reel: i % 2 === 0,
}));

export const EVENT = {
  eyebrow: "Upcoming Events",
  title: "Celebrating Fitness Day at Campus",
  date: "28 June 2026",
  body: "A morning of races, stretches and giggles — families welcome!",
  cta: "View All Events",
  image: img("children,sports,outdoor", 1600, 800, 139),
};

export const FOOTER = {
  about: ["About Us", "Our Team", "Testimonials", "Careers", "Privacy Policy"],
  curriculum: ["Curriculum", "Programs", "Admissions", "Behaviour Policy", "FAQs"],
  admissions: {
    heading: "Admissions Open for 2026–27",
    phone: "+91 90000 00000",
    email: "hello@yello.example",
  },
  campuses: [
    {
      name: "Yello Preschool and Daycare, Jubilee Hills",
      address: "Plot 12, Road No. 36, Jubilee Hills, Hyderabad 500033",
    },
    {
      name: "Yello Preschool and Daycare, Gachibowli",
      address: "Survey 45, Tower Lane, Gachibowli, Hyderabad 500032",
    },
    {
      name: "Yello Preschool and Daycare, Kondapur",
      address: "8-2-120, Green Park Colony, Kondapur, Hyderabad 500084",
    },
  ],
};
