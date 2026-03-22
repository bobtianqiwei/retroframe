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
    { label: "About", href: "about/index.html" },
    { label: "Publications", href: "publications/index.html" },
    { label: "Projects", href: "projects/index.html" },
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
    title: "Assistant Professor of Computer Science",
    affiliation: "Example University",
    location: "San Francisco Bay Area",
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
  aboutPage: {
    headline:
      "A longer biography page for researchers, professors, and research engineers who need more than a short homepage introduction.",
    sections: [
      {
        title: "Biography",
        paragraphs: [
          "Jianyu Chen is an assistant professor of computer science whose work sits at the intersection of human-AI interaction, research infrastructure, and machine learning evaluation.",
          "His research asks how intelligent systems can support real scientific and engineering work without making those workflows harder to inspect, trust, or revise."
        ]
      },
      {
        title: "Research Focus",
        paragraphs: [
          "His recent work focuses on evaluation methods for interactive AI systems, retrieval and memory support for research teams, and interfaces for inspecting agent behavior in practical settings.",
          "Across these projects, the larger goal is to build systems that are technically capable while still remaining legible to the people who depend on them."
        ]
      },
      {
        title: "Collaboration",
        paragraphs: [
          "He works with students, engineers, and researchers on projects involving agentic systems, human-AI workflows, and infrastructure for experimentation.",
          "This page is included in Retroframe because a strong research portfolio often needs a dedicated About page in addition to a concise homepage summary."
        ]
      }
    ]
  },
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
