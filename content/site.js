// site.js developed by Bob Tianqi Wei
module.exports = {
  site: {
    title: "Retroframe",
    metaTitle: "Retroframe | Retro Portfolio Template for Researchers and Engineers",
    metaDescription:
      "A retro portfolio template for researchers and engineers, with a simple file-based content system for projects, publications, and personal links.",
    footerLabel: "Built from",
    footerLinkLabel: "github.com/bobtianqiwei/retroframe",
    footerLinkHref: "https://github.com/bobtianqiwei/retroframe"
  },
  topbar: {
    prefix: "Template demo time:"
  },
  banner: {
    title: "Retroframe",
    subtitle:
      "A retro academic-style portfolio template for professors, research engineers, and technical builders."
  },
  navLinks: [
    { label: "Home", href: "index.html" },
    { label: "About", href: "index.html#profile" },
    { label: "Works", href: "index.html#projects" },
    { label: "CV", href: "https://example.com/cv" },
    { label: "Scholar", href: "https://scholar.google.com" },
    { label: "GitHub", href: "https://github.com/example" },
    { label: "Department", href: "https://example.edu/people/jianyu-chen" }
  ],
  newsItems: [
    "Retroframe now demos a more realistic professor or research engineer profile with projects, publications, and academic links.",
    "Use one file for site-wide profile content and one file per project or publication.",
    "The demo includes placeholder company logos and free photos so you can swap in your own work quickly."
  ],
  profile: {
    image: "assets/images/profile/demo-avatar-unsplash.jpg",
    imageAlt: "Demo portrait for the Retroframe professor and research engineer template",
    name: "Dr. Jianyu Chen",
    focus:
      "Human-AI systems, machine learning evaluation, interactive systems, and research infrastructure",
    availability: "Open to research collaborations, invited talks, and selective research engineering opportunities"
  },
  quickLinks: [
    { label: "CV PDF", href: "https://example.com/cv" },
    { label: "Google Scholar", href: "https://scholar.google.com" },
    { label: "Semantic Scholar", href: "https://www.semanticscholar.org" },
    { label: "GitHub Profile", href: "https://github.com/example" },
    {
      label: "Department Page",
      href: "https://example.edu/people/jianyu-chen"
    },
    { label: "Email", href: "mailto:jianyu.chen@example.edu" }
  ],
  contact: [
    {
      label: "Email",
      value: "jianyu.chen@example.edu",
      href: "mailto:jianyu.chen@example.edu"
    },
    { label: "Website", value: "jianyuchen.org", href: "https://jianyuchen.org" },
    { label: "Scholar", value: "Google Scholar", href: "https://scholar.google.com" },
    { label: "GitHub", value: "/example", href: "https://github.com/example" },
    {
      label: "Department",
      value: "example.edu/people/jianyu-chen",
      href: "https://example.edu/people/jianyu-chen"
    }
  ],
  introParagraphs: [
    "Jianyu Chen is a computer scientist working across human-AI interaction, machine learning systems, and evaluation. His research studies how intelligent tools can support real research and engineering tasks without making those workflows harder to understand or trust.",
    "He builds interactive systems, research prototypes, and infrastructure for experimentation. His recent work focuses on retrieval, evaluation, agent workflows, and interfaces that help people inspect model behavior in practical settings.",
    "This template is written as a realistic example for faculty, applied scientists, research engineers, and PhD students who want one site for biography, projects, publications, and contact information."
  ],
  trustedBy: [
    {
      name: "Apple",
      href: "https://www.apple.com",
      image: "assets/images/logos/apple.svg"
    },
    {
      name: "NVIDIA",
      href: "https://www.nvidia.com",
      image: "assets/images/logos/nvidia.svg"
    },
    {
      name: "Google",
      href: "https://about.google",
      image: "assets/images/logos/google.svg"
    },
    {
      name: "Stripe",
      href: "https://stripe.com",
      image: "assets/images/logos/stripe.svg"
    },
    {
      name: "GitHub",
      href: "https://github.com",
      image: "assets/images/logos/github.svg"
    },
    {
      name: "Meta",
      href: "https://about.meta.com",
      image: "assets/images/logos/meta.svg"
    }
  ]
};
